const addItemRow = (tableBody, rowNode)  => tableBody.appendChild(rowNode);

const appendDataListOption = (unitMap, dataList, option) => {
    option.label = unitMap.code;
    option.value = unitMap.name;

    dataList.appendChild(option);
};

const changeAttributeReadOnly = itemCode => itemCode.readOnly = true;

const createDataObject = tag => {
    const result = {};
    const objectKey = tag.getAttribute('role');
    const objectValue = tag.value;
    
    result[objectKey] = objectValue;

    return result;
};

const deleteItemInfo = button => makeFetch(`${url}/${findTarget(button)}`, {method:'DELETE'}, getItemInfo);

const findTarget = button => {
    const row = button.closest('tr');
    const itemCode = row.querySelector(itemCodeSelector)
    
    return itemCode.value;
};

const getFieldsSelector = prefix => {
    return {
        textFieldSelector : `${prefix}input[type="text"]`,
        numberFieldSelector : `${prefix}input[type="number"]`,
    };
};

const getItemInfo = () => makeFetch(url, {method: 'GET'}, search);

const getUnitInfo = (userUrl) => makeFetch(userUrl, { method: 'GET' }, putUnitOptions);

const putUnitOptions = unitList => {
    const dataList = document.querySelector('datalist');
    const option = document.querySelector('datalist>option').cloneNode(true);

    unitList.forEach(unitMap => appendDataListOption(unitMap, dataList, option));
};

const removeItemList = itemRows => {itemRows.forEach(removeRows)};

const removeRows = (row) => {
    const parentElement = row.parentElement;

    parentElement.removeChild(row);
};

const saveItemInfo = (button) => {
    const fetchObject = {
        method : 'PUT'
        ,headers : requestHeader
    };
    const dataObject = {};
    const row = button.closest('tr');
    const inputTags = row.querySelectorAll(dataQuerySelector);

    Array.from(inputTags).forEach(tag => {
        const result = createDataObject(tag);

        Object.assign(dataObject, result);
    });

    fetchObject.body = JSON.stringify(dataObject);

    makeFetch(`${url}/${findTarget(button)}`, fetchObject, getItemInfo);
}

const searchItemList = (inputTag, itemMap) => {
    const role = inputTag.getAttribute('role');

    inputTag.value = itemMap[role];
};