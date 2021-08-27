const addItemRow = () => document.querySelector('#item_table>tbody')
                                 .appendChild(myRowTag.cloneNode(true));

const removeDuplicatedRecord = () => Array.from(document.querySelectorAll('#item_rows'))
                                          .slice(1)
                                          .forEach(row => row.parentElement.removeChild(row));

const searchItemList = (itemList = []) => {
    removeDuplicatedRecord();
    itemList.forEach((itemMap)=>{
        addItemRow();
        Array.from(document.querySelectorAll('#item_rows:last-child>td')).forEach(column => (column.children[0].type !== 'button') ? column.children[0].value = itemMap[column.children[0].id] : '');
    });
    Array.from(document.querySelectorAll('#item_code')).slice(1).forEach(node => node.readOnly = true);
}