export function getList() {
    return fetch("http://localhost:8000/admin/api/products")
      .then(data => data.json())
  }