import * as Ajax from '@/common/ajax';

export function userInfo(params) {
  return Ajax.fetchJSONByGet(`/data/cityinfo/101280101.html`)
}