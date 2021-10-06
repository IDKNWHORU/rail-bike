const copyRecord = node => {
    return node.cloneNode(true);
}

const optionCloning = (node, map) => {
    const clone = node.cloneNode();

    clone.value = map.item_code;
    clone.innerHTML = map.item_name;

    putCloneDataSet(clone, map);

    return clone;
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