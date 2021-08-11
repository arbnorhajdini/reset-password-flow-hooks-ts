export function fetchMail (data) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }
  return fetch(process.env.REACT_APP_DB_HOST + '/mail', requestOptions).then((res) => res.json())
}
