export function fetchUsers (id) {
  const url = id ? process.env.REACT_APP_DB_HOST + '/users/' + id : process.env.REACT_APP_DB_HOST + '/users'
  return fetch(url).then((res) => res.json())
}

export function postUsers (data, id) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: id ? 'PATCH' : 'POST',
    body: JSON.stringify(data)
  }
  const url = id ? process.env.REACT_APP_DB_HOST + '/users/' + id : process.env.REACT_APP_DB_HOST + '/users'
  return fetch(url, requestOptions).then((res) => res.json())
}
