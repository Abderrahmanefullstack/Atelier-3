var produits = [
    { nom: "pomme", prix: 71 },
    { nom: "banane", prix: 25 },
    { nom: "fraise", prix: 93 }
];
function calculerprixtotal(produits) {
    var totalttc = 0;

    produits.forEach(produit => {

        var prixttc = produit.prix * 1.25;
        totalttc += prixttc;
    });
    return totalttc;
}
var prixtotal = calculerprixtotal(produits);
console.log("le prix total est : " + prixtotal);