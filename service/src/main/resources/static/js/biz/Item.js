const addItemRow = (tableBody, rowNode)  => tableBody.appendChild(rowNode);

const appendDataListOption = (unitMap, dataList, option) => {
    option.value = unitMap.code;
    option.label = unitMap.name;

    dataList.appendChild(option);
};

const changeAttributeReadOnly = itemCode => itemCode.readOnly = true;

const deleteTarget = button => {
    const row = button.closest('tr');
    const itemCode = row.querySelector(itemCodeSelector)
    
    return itemCode.value;
}

const deleteItemInfo = button => makeFetch(`${url}/${deleteTarget(button)}`, {method:'DELETE'}, getItemInfo);

const getFieldsSelector = prefix => {
    return {
        textFieldSelector : `${prefix}input[type="text"]`,
        numberFieldSelector : `${prefix}input[type="number"]`,
    }
}

const getItemInfo = () => makeFetch(url, {method: 'GET'}, search);

const getUnitInfo = (userUrl) => makeFetch(userUrl, { method: 'GET' }, putUnitOptions);

const putUnitOptions = unitList => {
    const dataList = document.querySelector('datalist');
    const option = document.querySelector('datalist>option').cloneNode(true);

    unitList.forEach(unitMap => appendDataListOption(unitMap, dataList, option));
}

const removeItemList = itemRows => {itemRows.forEach(removeRows)};

const removeRows = (row) => {
    const parentElement = row.parentElement;

    parentElement.removeChild(row)
}

const searchItemList = (inputTag, itemMap) => {
    const role = inputTag.getAttribute('role');

    inputTag.value = itemMap[role];
}