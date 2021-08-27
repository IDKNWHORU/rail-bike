const addItemRow = (tableBody, rowNode)  => tableBody.appendChild(rowNode);

const removeDuplicatedRecord = (parentElement, row) => parentElement.removeChild(row);

const searchItemList = (inputTag, itemMap, role) => inputTag.value = itemMap[role];

const changeAttributeReadOnly = itemCode => itemCode.readOnly = true;