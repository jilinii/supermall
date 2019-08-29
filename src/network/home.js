import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/api/v1/home/multidata'
  })
}
