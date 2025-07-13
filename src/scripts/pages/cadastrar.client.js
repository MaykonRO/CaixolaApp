/* explicando essas informações, documentar para explicar */

function mascaras(mascaraInput){
    // eu chamo numa constante pra manter uma certa integridade
    //entao eu pego o elemento pelo doc né
    const tamanhoInput = document.getElementById(`${mascaraInput}Input`).maxLength;
    /*
    `${mascaraInput}Input` > isso ta concatenando pra colocar uma variavel numa string, 
    que no caso é o nome que vai la no input que ta isso ai, ou seja, ele vai adicionar o 
    nome que vai na variavel nessa string e juntar

    entao ficaria tipo 'cel'Input, é pra ajudar a fazer isso ser mais reaplicavel
    ai ele desce la pra função de mask templates 
    */
    let valorInput = document.getElementById(`${mascaraInput}Input`).value;

    //isso aqui é uma outra função, poderia chamar isso de um objeto? por enquanto chamarei assim
    const maskTemplates = {
        //falo que o objeto cel, vai substituir tudo que nao for digito por um espaço 
        // vazio (o espaço vazio é a ausencia de caracteres), e depois recoloca pela 
        // quantidade de digitos, 2 digitos, 4 digitos e 4 digitios, quando eu termino 
        // de separar os caracteres iniciado com / e terminado com / vai ser separado 
        // por fim coloca a virgula pra acabar dizer que terminou de passar o pararmetro 
        // da funcao replace, e depois vai organizar né coloca "", dentro dele coloca o 
        // formato que 
        cel: valorInput.replace(/[^\d]/g, "").replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
    };
    if (valorInput.length === tamanhoInput) {
        //
        (document.getElementById(`${mascaraInput}Input`).value = maskTemplates[mascaraInput])
    }
};


/* obs:
o `${}` serve para concatenar os bglhs
Input fala que é pra pegar daquele input
*/


//cadastro