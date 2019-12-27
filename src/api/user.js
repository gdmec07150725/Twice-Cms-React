import * as Ajax from '@/common/ajax';

export async function userInfo(params) {
  return Ajax.fetchJSONByGet(`/data/cityinfo/${params.cityCode}.html`)
}