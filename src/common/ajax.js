/* ajax请求封装 (使用fetch, 如果有跨域问题，则使用fetch-jsonp) */

/* Get */
export const fetchJSONByGet = url => () =>  {
  const params = {
    method: 'GET',
  }
  return fetch(url, params)
}