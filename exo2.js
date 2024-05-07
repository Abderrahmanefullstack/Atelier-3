function calculerListe(numbers) {
    const result = [];
    let produitAvant = 1;
    for (let i = 0; i < numbers.length; i++) {
        result.push(produitAvant);
        produitAvant *= numbers[i];
    }
    let produitApres = 1;
    for (let i = numbers.length - 1; i >= 0; i--) {
        result[i] *= produitApres;
        produitApres *= numbers[i];
    }
    return result;
}
const numbers = [1, 3, 4];
const newList = calculerListe(numbers);
console.log(newList); 
