function mascaras(mascaraInput){
    // eu chamo numa constante pra manter uma certa integridade
    //entao eu pego o elemento pelo doc né
    const tamanhoInput = document.getElementById(`${mascaraInput}Input`).maxLength;
    let valorInput = document.getElementById(`${mascaraInput}Input`).value;

    const maskTemplates = {
        cel: valorInput.replace(/[^\d]/g, "").replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3")
    };
    if (valorInput.length === tamanhoInput) {
        (document.getElementById(`${mascaraInput}Input`).value = maskTemplates[mascaraInput])
    }
};

window.mascaras = mascaras;
/* obs:
o `${}` serve para concatenar os bglhs
Input fala que é pra pegar daquele input
*/
