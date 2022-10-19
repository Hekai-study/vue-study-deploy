import service from './axios'

export const post = (url, data) => {
  return service.post(url, data)
}

export const get = (url, data) => {
  return service.get(url, { params: Object.assign({ r: Math.random() }, data) })
}

export const put = (url, data) => {
  return service.put(url, data)
}

export const del = (url, data) => {
  return service.delete(url, { params: data })
}

export const patch = (url, data) => {
  return service.patch(url, data)
}