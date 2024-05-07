function filtrer(nombres) {
    var insertednumbers = nombres.filter(numbers => numbers % 2 === 0);
    var nbrcroissant = insertednumbers.sort((a, b) => a - b);
    return nbrcroissant;
}
var nombres = [1, 8, 9, 13, 4, 6];
var filterednumbers = filtrer(nombres);
console.log(filterednumbers);
