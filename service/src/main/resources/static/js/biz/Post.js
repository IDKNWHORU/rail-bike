const getPostList = () => {
    makeFetch('post', {
        method: 'GET'
    }, putPostList);
};

const putPostList = (postList) => {
    const selectTag = document.querySelector('#input-customer');
    const optionTag = selectTag.options[0];

    postList.forEach((postInfo)=>{
        const copyOption = clonePostOption(optionTag, postInfo);

        selectTag.appendChild(copyOption);
    });
}

const clonePostOption = (optionTag, postInfo) => {
    const copyOption = optionTag.cloneNode(true);

    copyOption.value = postInfo.post_numb;
    copyOption.innerText = postInfo.post_name;

    return copyOption;
}