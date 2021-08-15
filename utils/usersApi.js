import { request } from './api'

export function index() {
  const url = `/api/users`
  return request('get', url, {}, true)
}

export function show(id) {
  const url = `/api/users/${id}`
  return request('get', url, {}, true)
}

export function create(user) {
  const url = `/api/users`
  return request(
    'post',
    url,
    user,
    true
  )
}

export function update(id, username, name) {
  const url = `/users/${id}`
  return request(
    'put',
    url,
    {
      user: { username, name }
    },
    true
  )
}

export function destroy(id) {
  const url = `/users/${id}`
  return request('delete', url, {}, true)
}