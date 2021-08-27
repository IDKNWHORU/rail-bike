const addItemRow = () => {
    const myTable = document.querySelector('#item_table');
    const cloneRowNode = myRowTag.cloneNode(true);
    cloneRowNode.querySelector('#item_code').value = '';
    cloneRowNode.querySelector('#item_name').value = '';
    cloneRowNode.querySelector('#unit_name').value = '';
    cloneRowNode.querySelector('#price').value = '';
    cloneRowNode.querySelector('#order').value = '';
    myTable.tBodies[0].appendChild(cloneRowNode);
}

const removeDuplicatedRecord = () => {
    const item_rows = document.querySelectorAll('#item_rows');

    for(let index=1; index < item_rows.length; index++)
        item_rows[index].parentElement.removeChild(item_rows[index]);
}

const searchItemList = (itemList = []) => {
    removeDuplicatedRecord();
    itemList.forEach((itemMap)=>{
        addItemRow();
        
        const rowTags = document.querySelectorAll('#item_rows');
        const rowTag = rowTags[rowTags.length-1];

        const item_code = rowTag.querySelector('#item_code');
        const item_name = rowTag.querySelector('#item_name');
        const unit_name = rowTag.querySelector('#unit_name');
        const price = rowTag.querySelector('#price');
        const order = rowTag.querySelector('#order');

        item_code.value = itemMap.item_code;
        item_name.value = itemMap.item_name;
        unit_name.value = itemMap.unit_name;
        price.value = itemMap.price;
        order.value = itemMap.order;
    });
}