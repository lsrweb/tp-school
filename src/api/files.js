import request from '@/utils/request'

export function uploadFile(data) {
  return request({
    baseURL: process.env.VUE_APP_UPLOAD_BASE_URL,
    url: 'upload/file_local',
    method: 'post',
    data
  })
}
