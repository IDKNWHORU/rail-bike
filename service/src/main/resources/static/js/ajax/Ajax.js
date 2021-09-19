let callBack;
let httpRequest;

const makeRequest = (callBackFunction, method, url, requestHeader, queryString) => {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        console.error(`Can't make XMLHTTP instance.`);
        return false;
    }

    callBack = callBackFunction;
    httpRequest.onreadystatechange = responseCallBack;
    httpRequest.open(method, url);

    if (requestHeader !== null) {
        httpRequest.setRequestHeader('Content-Type', requestHeader);
    }

    httpRequest.send(queryString);
};

const responseCallBack = () => {
    try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                callBack(httpRequest);
            } else {
                console.error('request has has problem..');
            }
        }
    } catch (error) {
        console.error(`Request Exception : ${error.message}`);
    }
};

const makeFetch = (userUrl = '', optionInfo = {method: 'GET'}, callbackFunction = (data) => { return ;}) => {
    return fetch(userUrl, validationOptionInfo(optionInfo))
            .then((res) => res.json())
            .then(callbackFunction);
};

const validationOptionInfo = (optionInfo) => {
    return (optionInfo.method === 'GET') ? removeBodyOption(optionInfo) : resumeOption(optionInfo);
}

const removeBodyOption = optionInfo => {
    optionInfo.body = undefined;

    return optionInfo;
}

const resumeOption = optionInfo => {
    return optionInfo;
}