//création des élements de la page

let titre=document.createElement("h1");
document.body.appendChild(titre);
titre.textContent="Search University API"

let searchBarPays = document.createElement("input");
document.body.appendChild(searchBarPays);
searchBarPays.setAttribute("placeholder", "pays");

let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "rechercher";

let searchBarVille = document.createElement("input");
document.body.appendChild(searchBarVille);
searchBarVille.setAttribute("placeholder", "soyez plus précis");
searchBarVille.hidden = true;

let btn2 = document.createElement("button");
document.body.appendChild(btn2);
btn2.textContent = "rechercher";
btn2.hidden = true;

let nbrOfUni=document.createElement("h1");
document.body.appendChild(nbrOfUni);

//gestion des écoutes

btn.addEventListener("click", () => {
    const ville=searchBarVille.value;
    const pays = searchBarPays.value;
    search(ville, pays);
    searchBarVille.value="";//remet à 0 l'input ville si je change de pays
    emptyUl(Ul);//clear le ul quand je clique
    nbrOfUni.textContent="";
    
});

btn2.addEventListener("click", () => {
    const ville = searchBarVille.value;
    const pays = searchBarPays.value;
    search(ville, pays);
    emptyUl(Ul);
    
});

//création du ul
let Ul = document.createElement("ul");
document.body.appendChild(Ul);

//fonction qui clear le contenu du ul
function emptyUl(ul){
    ul.innerHTML='';
}

//gestion des doublons
function dupes(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(array[j], 1);
            }
        }
    }

    return array;
}


function search(ville, pays) {

    fetch(`http://universities.hipolabs.com/search?name=${ville}&country=${pays}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {

            console.log(data);
            console.log(`Mes données : ${JSON.stringify(data)}`);
            
            dupes(data);
            for (let item of data) {
                
                if (data.length > 50) {
                    searchBarVille.hidden = false;
                    btn2.hidden = false;
                    
                } else {
                    nbrOfUni.textContent=`il y a ${data.length} universités`;
                    let li = document.createElement("li");
                    li.textContent = item.name;
                    Ul.appendChild(li);
                }
            }
            return data;

        }

        )
        .catch(error => console.log(error));
        
}
