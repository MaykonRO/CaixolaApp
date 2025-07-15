import { DbName, versionDB, db, createDB } from "../connection/conection.js";

let
    form;

const getForm = (event) => {
    event.preventDefault();

    const
        nome = document.getElementById("nomeInput").value,
        celular = document.getElementById("celInput").value,
        cep = document.getElementById("cepClientInput").value,
        casa = document.getElementById("numClientInput").value,
        rua = document.getElementById("ruaClientInput").value,
        bairro = document.getElementById("bairroClientInput").value,
        cidade = document.getElementById("cidaClientInput").value,
        estado = document.getElementById("estadoClientInput").value;

    console.log(nome, " ", celular, " ", cep, " ", casa, " ", rua, " ", bairro, " ", cidade, " ", estado);

};


document.addEventListener('DOMContentLoaded', () => {
    
    form = document.getElementById("formClientes");
    form.onsubmit = getForm;
});
