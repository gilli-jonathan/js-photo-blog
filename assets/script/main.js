//Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

/*
TASK, CREARE UNA FUNZIONE CHE DOPO UNA CHIAMATA AJAX CREAI LE CARD IN AUTONOMIA
    -la funzione dovrà ciclare all'interno dell ajax e usare i dati per creare la card
    -anche se più complesso preferibile usare createElement per rendere le card veri e propri nodi della Dom così da renderle più facilmente interagibili domani 
*/

//creazione di elementi tramite document.createElement + assegnazione classe da mettere nella funzione

const col = document.createElement("div");
col.classList.add("col");

const polaroid = document.createElement("div");
polaroid.classList.add("polaroid");

const pin = document.createElement("img");
pin.scr = "./assets/img/pin.svg";

const pol_img = document.createElement("div");
pol_img.classList.add("polaroid-img");

const img = document.createElement("img");
img.src = pol_img.appendChild(img);

const card_text = document.createElement("div");
card - text.classList.add("card-text");

const p = document.createElement("p");
p.textContent;

const title = document.createElement("h3");
title.textContent;
