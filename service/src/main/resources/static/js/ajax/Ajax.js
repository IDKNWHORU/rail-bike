const makeFetch = (
  userUrl = "",
  optionInfo = { method: "GET" },
  callbackFunction = (data) => {
    return;
  }
) => {
  return fetch(userUrl, validationOptionInfo(optionInfo))
    .then((res) => res.json())
    .then(callbackFunction);
};

const validationOptionInfo = (optionInfo) => {
  return optionInfo.method === "GET"
    ? removeBodyOption(optionInfo)
    : resumeOption(optionInfo);
};

const removeBodyOption = (optionInfo) => {
  optionInfo.body = undefined;

  return optionInfo;
};

const resumeOption = (optionInfo) => {
  return optionInfo;
};

const defaultCB = (data) => {
  return "define your callback function";
};

const apiCall = {
  #method: {
      get: {
          method: "GET"
      },
      post: {
          method: "POST"
      },
      put: {
          method: "PUT"
      },
      delete: {
          method: "DELETE"
      }
  },
  get: async (url = "/", callback = defaultCB) => {
      const serverResponse = await fetch(url, _method.get, callback);
      const jsonData = serverResponse.json();

      return callback(jsonData);
  },
};
