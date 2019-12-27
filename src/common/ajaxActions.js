/* 派发异步action */

function catchError(error) {
  console.log(error);
}

function checkStatus(response) {
  if (
    (response.status >= 100 && response.status < 300) ||
    response.status === 500 ||
    response.json
  ) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export const createAjaxAction = (api, startAction, endAction) => (
  params,
  cb
) => dispatch => {
  dispatch(startAction(params));
  return new Promise((resolve, reject) => {
    api(params)
      .then(checkStatus)
      .then(response => response.json())
      .then(response => {
        dispatch(endAction({ req: params, res: response }));
      })
      .catch(catchError);
  });
};
