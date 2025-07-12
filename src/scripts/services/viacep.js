const cep = document.getElementById("cepClientInput");

const soNumero = (numero) => {
    let valor = /^[0-9]+$/.test(numero);
    return valor;
};


const cepValido = (cep) => cep.length == 8 && soNumero(cep);

const limpaForm = () => {
    document.getElementById("ruaClientInput").value = "";
    document.getElementById("bairroClientInput").value = "";
    document.getElementById("cidaClientInput").value = "";
    document.getElementById("estadoClientInput").value = "";
};

const preencherForm = (endereco) => {
    document.getElementById("ruaClientInput").value = endereco.logradouro;
    document.getElementById("bairroClientInput").value = endereco.bairro;
    document.getElementById("cidaClientInput").value = endereco.localidade;
    document.getElementById("estadoClientInput").value = endereco.estado;
};

const pesquisarCep = async() => {
    limpaForm();

    const cep = document.getElementById("cepClientInput").value.replace("-","");

    const viacep = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)){
        const dados = await fetch(viacep);
        const endereco = await dados.json();

        console.log(endereco);

        if(endereco.hasOwnProperty("erro")){
            document.getElementById("ruaClientInput").value = "Cep nao encontrado";
        }
        else{
            preencherForm(endereco);
        }


    }
};

cep.addEventListener("input", () => {
    soNumero(cep.value);
});

document.getElementById("cepClientInput").addEventListener("focusout", pesquisarCep);