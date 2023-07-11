// API fetch 


// catch qui capture les erreurs potentiel de la requête

/**
 * D'utiliser cette api et réaliser un outil de recherche. 
 * Un recherche par Pays et par ville par formulaire.
 * affichage sous forme de liste. 
 */
let searchBarVille = document.createElement("input");
document.body.appendChild(searchBarVille);
searchBarVille.setAttribute("placeholder", "ville");

let searchBarPays = document.createElement("input");
document.body.appendChild(searchBarPays);
searchBarPays.setAttribute("placeholder", "pays");

let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "rechercher";

btn.addEventListener("click", () => {
  const ville = searchBarVille.value;
  const pays = searchBarPays.value;
  search(ville, pays);
});

function search(ville, pays) {
  fetch(`http://universities.hipolabs.com/search?name=${ville}&country=${pays}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`Mes données : ${JSON.stringify(data)}`);
      let Ul = document.createElement("ul");
      document.body.appendChild(Ul);
      for (let item of data) {
        let li = document.createElement("li");
        li.textContent = item.name; 
        Ul.appendChild(li);
      }
      return data;
    })
    .catch(error => console.log(error));
}
