const copyRecord = node => {
    return node.cloneNode(true);
}

const dataListChange = itemList => {
    const options = document.querySelector('#item_list').options;
    const priceField = document.querySelector('input[data-role="item_price"]');
    let selectedOption;

    Array.from(options).some((option) => {
        if (option.value === itemList.value) {
            selectedOption = option;

            return true;
        }
    });

    priceField.value = selectedOption.dataset.price;

    writeTotalPrice();
};

const getItemList = () => {
    makeFetch('/item', {
        method: 'GET'
    }, putOptionInfo);
};

const getNumberFiedlsValue = () => {
    const resultObject = {};
    const numberFields = document.querySelectorAll('input[type="number"]');

    Array.from(numberFields).forEach((numberField) => {
        resultObject[numberField.dataset.role] = Number(numberField.value);
    });

    return resultObject;
};

const inputOrderInfo = (field, orderObject) => {
    const objectKey = field.dataset.role;

    orderObject[objectKey] = field.value;
};

const optionCloning = (node, map) => {
    const clone = node.cloneNode();

    clone.value = map.item_code;
    clone.innerHTML = map.item_name;

    putCloneDataSet(clone, map);

    return clone;
};

const orderListRefresh = () => {
    const orderRecord = document.querySelectorAll('.order-row');
    const orderTableBody = document.querySelector('tbody');

    for (let index = 1; index < orderRecord.length; index++) {
        orderTableBody.removeChild(orderRecord[index]);
    }

    getListInfo();
};

const putMessage = message => {
    const modal = document.querySelector('.modal')

    modal.innerHTML = message;
    visibleModal(modal, true);

    setTimeout(visibleModal, 1500, modal, false)
};

const putOptionInfo = (list) => {
    const optionNode = document.querySelector('datalist>option');

    list.forEach((map) => {
        const optionClone = optionCloning(optionNode, map);

        optionNode.parentNode.appendChild(optionClone);
    });
};

const putOrderColumn = (column, orderObject) => {
    const objectKey = column.dataset.role;

    column.innerText = orderObject[objectKey];
}

const putOrderInfo = (orderObject, orderTable, orderNode) => {
    const orderRecord = copyRecord(orderNode);
    const orderColumns = Array.from(orderRecord.children);

    orderColumns.forEach(column=> putOrderColumn(column, orderObject));

    orderTable.tBodies[0].appendChild(orderRecord);
}

const putOrderList = (orderList) => {
    const rowSelector = ".order-row";
    const tableTag = document.querySelector('table');
    const orderNode = document.querySelector(rowSelector);

    orderList.forEach(orderObject => putOrderInfo(orderObject, tableTag, orderNode));
}

const putCloneDataSet = (clone, map) => {
    clone.dataset.value = map.item_code;
    clone.dataset.label = map.item_name;
    clone.dataset.price = map.price;
};

const returnedMethod = (resultMap) => {
    putMessage(resultMap.msg);

    if (resultMap.result) {
        orderListRefresh();
    }
};

const saveOrderInfo = (button) => {
    const inputFieldsNode = document.querySelector('.input-area').children;
    const inputFields = Array.from(inputFieldsNode);
    const orderObject = {};
    let isValid = true;

    inputFields.some((fieldWrapper) => {
        const inputField = fieldWrapper.firstChild;

        if (validField(inputField)) {
            inputOrderInfo(inputField, orderObject);
        } else {
            isValid = false;

            return true;
        }
    });

    (isValid) ? makeFetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderObject)
    }, returnedMethod): returnedMethod({
        result: false,
        msg: '필수값을 입력하세요'
    });
};

const validField = field => {
    const result = true;
    if (field.required) {
        if (field.value === '') {
            return false;
        }
    }

    return result;
};

const visibleModal = (modal, visible) => {
    if (visible) {
        modal.classList.add('visible');
    } else {
        modal.classList.remove('visible');
    }
};

const writeTotalPrice = () => {
    const totalField = document.querySelector('.total-field');
    const { count, item_price, labor } = getNumberFiedlsValue();

    totalField.value = item_price * count + labor;
};