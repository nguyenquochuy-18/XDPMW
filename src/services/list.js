export function getList() {
    return fetch("./db.json")
      .then(data => data.json())
  }