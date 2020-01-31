export default function api(endpoint, { method = "GET", body, jwt } = {}) {
  return fetch("http://localhost:4000/products", {
    method: method,
    body: JSON.stringify(body)
  })
    .then(response => Promise.all([response.status, response.json()]))
    .then(([status, data]) => {
      console.log(data);
      if (status >= 400) {
        throw { api_error: data };
      } else {
        return data;
      }
    });
}
