const addItemRow = () => {
    const cloneRowNode = myRowTag.cloneNode(true);

    Array.from(myRowTag.cloneNode(true)).forEach(node=>(node.children[0].type !== 'button') ? node.children[0].value = '' : false);

    document.querySelector('#item_table>tbody').appendChild(cloneRowNode);
}

const removeDuplicatedRecord = () => Array.from(document.querySelectorAll('#item_rows'))
                                          .slice(1)
                                          .forEach(row => row.parentElement.removeChild(row));

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

        item_code.readOnly = true;

        item_code.classList.add('input-readOnly')
    });
}