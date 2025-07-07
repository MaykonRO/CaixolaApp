let installButton =document.getElementById("installButton");
let deferredEvent;

/* lidando com o menu hamburguer */

var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});


//vai previnir de chamar o promptzinho de baixar o app
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();

    window.deferredPrompt = e;
});

installButton.addEventListener('click', () => {
    if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
    }
    else{
        alert("O seu browser não suporta esta função!");
    }
});

