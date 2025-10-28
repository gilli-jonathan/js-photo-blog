//AGGIUNTA DI 1 FUNZIONI GLOBALE DA USARE NELLA CHIAMATA AJAX

//prendo i vari elementi che mi serviranno creando dei nodi
const closedEL = document.getElementById("closed-btn");
const overlayEl = document.getElementById("overlay");

//creazione del nodo principale per funzionamento della funzione
const board = document.createElement("div");
board.classList.add(
  "row",
  "row-cols-1",
  "row-cols-md-2",
  "row-cols-lg-3",
  "row-cols-xl-3",
  "container"
);

//FUNZIONE PER CREARE LE POLAROID
function create_polaroid(obj) {
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
  the_img.src = obj.url;
  the_img.setAttribute("id", obj.id);

  const card_text = document.createElement("div");
  card_text.classList.add("card-text");

  const p = document.createElement("p");
  p.textContent = obj.date;

  const h3 = document.createElement("h3");
  h3.textContent = obj.title;

  //matrioska dei vari elementi html tramite .appendChild
  //col contiene:
  col.appendChild(polaroid);

  //polaroid contiene:
  polaroid.appendChild(pin);
  polaroid.appendChild(pol_img);
  pol_img.appendChild(the_img);
  polaroid.appendChild(card_text);

  //card_text contiene
  card_text.appendChild(p);
  card_text.appendChild(h3);

  //aggiungere l'evento di click per mettere l'immagine scelta in over

  the_img.addEventListener("click", function () {
    //accendere il div Overlay
    overlayEl.classList.remove("spento");

    //mettere l'immagine corrispondente nell'overlay
    const over_imgEl = document.getElementById("over-img");
    over_imgEl.src = obj.url;
  });

  return col;
}

//CHIAMATA AJAX
fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((res) => res.json())
  .then((info) => {
    //ciclo dentro l'array di oggetti (info)
    info.forEach((obj) => {
      console.log(create_polaroid(obj));

      const all_photo = create_polaroid(obj);
      board.appendChild(all_photo);
    });
  })

  .catch((err) => {
    const error_obj = [
      {
        id: "sorry",
        title: "MI DISPIACE :(",
        date: "ERRORE DI CARICAMENTO",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mRIGY1YWkktGM9N25bbLzNg7UQfW4e-kvw&s",
      },
    ];

    error_obj.forEach((obj) => {
      console.log(create_polaroid(obj));

      const all_photo = create_polaroid(obj);
      board.appendChild(all_photo);
    });
  });

document.getElementById("div-container").appendChild(board);

//FUNZIONE PER CHIUDERE L'OVER

closedEL.addEventListener("click", function () {
  overlayEl.classList.add("spento");
});
