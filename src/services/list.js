export function getList() {
    return fetch('http://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
  }