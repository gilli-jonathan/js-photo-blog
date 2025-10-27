//Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

/*
TASK, CREARE UNA FUNZIONE CHE DOPO UNA CHIAMATA AJAX CREAI LE CARD IN AUTONOMIA
    -la funzione dovrà ciclare all'interno dell ajax 
    -ogni ciclo crea una polaroid tramite funzione
        -usare createElement per rendere le card nodi della Dom
*/

//FUNZIONE PER CREARE LE POLAROID
function create_polaroid() {
  //creazione di tutti gli elementi html tramite document.createElement + assegnazione classe
  const col = document.createElement("div");
  col.classList.add("col");

  const polaroid = document.createElement("div");
  polaroid.classList.add("polaroid");

  const pin = document.createElement("img");
  pin.src = "./assets/img/pin.svg";

  const pol_img = document.createElement("div");
  pol_img.classList.add("polaroid-img");

  const the_img = document.createElement("img");
  img.src;

  const card_text = document.createElement("div");
  card_text.classList.add("card-text");

  const p = document.createElement("p");
  p.textContent;

  const h3 = document.createElement("h3");
  title.textContent;

  //matrioska dei vari elementi html tramite .appendChild
  //col contiene:
  col.appendChild(polaroid);
  col.appendChild(card_text);

  //polaroid contiene:
  polaroid.appendChild(pin);
  polaroid.appendChild(pol_img);
  pol_img.appendChild(the_img);

  //card_text contiene
  card_text.appendChild(p);
  card_text.appendChild(h3);

  return col;
}

//CHIAMATA AJAX
fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((res) => res.json())
  .then((info) => {
    console.log(info);
  });
