/* 派发异步action */

function catchError(error) {
  console.log(error);
}

function checkStatus(response) {
  console.log('response', response)
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
  api(params)
    .then(checkStatus)
    .then(response => {
      response.json().then(reponseJson => {
        console.log('reponseJson', reponseJson)
        dispatch(endAction({ req: params, res: reponseJson }));
      })
    })
    .catch(catchError);
};
