import { Server } from "miragejs";

//interceptando a chamada para api/users/ com miragejs usando um objto Server
//configurado com um endpoint falso. *poderia estar em outro lugar
new Server({
  routes() {
    this.namespace = "api";

    this.get("/users/", () => {
      return [
        { name: "Angy", surname: "T." },
        { name: "Chris", surname: "B." },
        { name: "Juliana", surname: "Crain" }
      ];
    });
  }
});


//obter dados ao clicar no botao
const button = document.getElementById("fetch-btn");

/*fetch, jest
button.addEventListener("click", function() {
  fetch("/api/users/")
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => buildList(json));
});*/

//cypress,necessário utilizar XMLHttpRequest pois nao tem suporte a fetch
button.addEventListener("click", function() {
  // AJAX request with XMLHttpRequest
  const request = new XMLHttpRequest();
  request.open("GET", "/api/users/");
  request.onload = function() {
    const jsonResponse = JSON.parse(this.response);
    buildList(jsonResponse);
  };
  request.send();
});

//lista de usuário
function buildList(data) {
  console.log(data);
}

