//Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

/*
TASK, CREARE UNA FUNZIONE CHE DOPO UNA CHIAMATA AJAX CREAI LE CARD IN AUTONOMIA
    -la funzione dovrà ciclare all'interno dell ajax 
    -ogni ciclo crea una polaroid tramite funzione
        -usare createElement per rendere le card nodi della Dom
*/

//AGGIUNTA DI 1 FUNZIONI GLOBALE DA USARE NELLA CHIAMATA AJAX

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
        id: 1,
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
