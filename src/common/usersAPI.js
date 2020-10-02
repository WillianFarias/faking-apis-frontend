/*const ENDPOINT = "https://api.valentinog.com/api/users/";

function getUsers() {
  return fetch(ENDPOINT)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}

module.exports = { getUsers };*/

//json-server
function getUsers(endpoint) {
  return fetch(endpoint)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}

module.exports = { getUsers };