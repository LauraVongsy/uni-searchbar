function division(number1, number2){
    try{
        if(number2 === 0){
            throw new Error("Division par zéro impossible")
        }
        let result = number1 / number2;
        console.log(result);
    }catch(err){
        console.error(err);
    }
}

division(10, 2)
division(8, 0)

/**
 * Gestion d'un tableau vide
 * Ecrivez un fonction qui prend en argument un tableau et
 * renvoi le premier élément de ce tableau. Si le tableau 
 * est vide, la fonction doit générer une erreur.
 */
tableau=["fleur","abeille"];
function test (tableau){
try{
    if(tableau[0]==null){
        throw new Error("Il y a une erreur");
        
    }
    console.log(tableau[0]);
}catch(error){
    console.log(error)
   
}
}
test(tableau);

/**
 * Gestion propriété inexistante
 * Ecrivez un fonction qui prend en argument un objet et 
 * une clé, elle renvoi la valeur de la propriété.
 * Si la clé n'existe pas, la fonction génère une erreur.
 */
function test2(objet, clé){
try{
    if(objet[clé]==null){
        throw new Error("Il n'y a pas cette clé");
    }
    console.log(objet[clé]); 
}catch(error){
    console.log(error)
}
}

let fleurs={
    nom: "rose"
}

test2(fleurs,"age");