const makeFetch = (userUrl = '', optionInfo = {method: 'GET'}, callbackFunction = (data) => { return ;}) => {
    return fetch(userUrl, validationOptionInfo(optionInfo))
            .then((res) => res.json())
            .then(callbackFunction);
};

const validationOptionInfo = (optionInfo) => {
    return (optionInfo.method === 'GET') ? removeBodyOption(optionInfo) : resumeOption(optionInfo);
};

const removeBodyOption = optionInfo => {
    optionInfo.body = undefined;

    return optionInfo;
};

const resumeOption = optionInfo => {
    return optionInfo;
};