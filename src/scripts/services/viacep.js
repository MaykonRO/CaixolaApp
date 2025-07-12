//capturo todos os inputs que preciso da pagina
const cep = document.getElementById("cepClientInput")
const rua = document.getElementById("ruaClientInput");
const bairro = document.getElementById("bairroClientInput");
const cidade = document.getElementById("cidaClientInput");
const estado = document.getElementById("estadoClientInput");

function mascaraCep(mascaraInput) {
    // eu chamo numa constante pra manter uma certa integridade
    //entao eu pego o elemento pelo doc né
    const tamanhoInput = document.getElementById(`${mascaraInput}ClientInput`).maxLength;
    let valorInput = document.getElementById(`${mascaraInput}ClientInput`).value;

    const maskTemplates = {
        cep: valorInput.replace(/[^\d]/g, "").replace(/(\d{5})(\d{3})/, "$1-$2")
    };
    if (valorInput.length === tamanhoInput) {
        (document.getElementById(`${mascaraInput}ClientInput`).value = maskTemplates[mascaraInput])
    }
};

//limpa as informações do input de cep
const soNumero = (numero) => {
    let valor = /^[0-9]+$/.test(numero);
    return valor;
};

//verifica se o cep é válido(vou tirar isso depois)
const cepValido = (cep) => cep.length == 8 && soNumero(cep);

//limpar os campos de formulario.... é bom tirar ou modificar futuramente
const limpaForm = () => {
    document.getElementById("ruaClientInput").value = "";
    document.getElementById("bairroClientInput").value = "";
    document.getElementById("cidaClientInput").value = "";
    document.getElementById("estadoClientInput").value = "";
};

//pesquisar o cep né fi
const pesquisarCep = async () => {

    //quando eu pesquiso um cep ele limpa os campos ja
    limpaForm();

    //capturando o valor do cep no input e retiro o - (mudar isso com mascara depois)
    const cep = document.getElementById("cepClientInput").value.replace("-", "");

    //uso a api (botar o try catch aqui ne paizao)
    const viacep = `https://viacep.com.br/ws/${cep}/json/`;

    //se vier um cep valido ele faz isso ai
    if (cepValido(cep)) {

        //consulta os campos e faz a linha
        const dados = await fetch(viacep);

        //bom ele pede ja pegar as informações e deixar pre pronta...

        /* 
        pensando num exemplo, é como se dissesse pra pegar os dados e 
        empilhar um em cima do outro como se fosse um prédio com vários
        andares.
        aí ele vai deixar pronto para eu pegar os campos que estao escritos
        la preenche form (é o que vai depois do endereco.)
        por exemplo: 
            endereco.estado
        */
        const endereco = await dados.json();

        //um if para caso ocorra um erro e insira um cep invalido
        if (endereco.hasOwnProperty("erro")) {
            document.getElementById("ruaClientInput").value = "Cep nao encontrado";
        }
        else {
            //aqui eu seto todas as informações que eu quero em seus respectivos campo
            rua.value = endereco.logradouro;
            bairro.value = endereco.bairro;
            cidade.value = endereco.localidade;
            estado.value = endereco.estado;
        }
    }

    console.log(estado.attributes);
};

//vai ouvir o cep pra pegar o numero ne
cep.addEventListener("input", () => {
    soNumero(cep.value);
});

//aqui é o evento de focusout
document.getElementById("cepClientInput").addEventListener("focusout", pesquisarCep);

