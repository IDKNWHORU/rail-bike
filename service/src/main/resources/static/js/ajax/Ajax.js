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

const makeFetch = (userUrl, userMethod, callbackFunction) => {
    fetch(userUrl, { method: userMethod })
        .then((res) => res.json())
        .then((data) => callbackFunction(data));
};