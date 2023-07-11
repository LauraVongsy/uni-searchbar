let searchBarPays = document.createElement("input");
document.body.appendChild(searchBarPays);
searchBarPays.setAttribute("placeholder", "pays");


let btn = document.createElement("button");
document.body.appendChild(btn);
btn.textContent = "rechercher";

btn.addEventListener("click", () => {
    const pays = searchBarPays.value;
    search(pays);
});


let searchBarAutre = document.createElement("input");
document.body.appendChild(searchBarAutre);
searchBarAutre.setAttribute("placeholder", "précisez svp");
searchBarAutre.hidden = true;


let btn2 = document.createElement("button");
document.body.appendChild(btn2);
btn2.textContent = "rechercher";
btn2.hidden = true;

btn2.addEventListener("click", () => {
    const pays = searchBarPays.value;
    const autre = searchBarAutre.value;;
    search(pays, autre);
});


function search(pays, autre) {
    fetch(`http://universities.hipolabs.com/search?country=${pays}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(`Mes données : ${JSON.stringify(data)}`);
            let Ul = document.createElement("ul");
            document.body.appendChild(Ul);
            for (let item of data) {
                if (data.length < 50) {
                    let li = document.createElement("li");
                    li.textContent = item.name;
                    Ul.appendChild(li);
                } else {
                    searchBarAutre.hidden = false;
                    btn2.hidden = false;
                    fetch(`http://universities.hipolabs.com/search?name=${autre}&country=${pays}`)
                        .then(response => {
                            console.log(response);
                            return response.json();
                        })
                        .then(data=> {
                            
                            for (let item of data) {
                                let li = document.createElement("li");
                                li.textContent = item.name;
                                Ul.appendChild(li);
                            }
                            return data;
                        })
                }

            }
            return data;
        })
        .catch(error => console.log(error));
}
