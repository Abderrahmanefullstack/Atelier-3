function maximum(liste) {
    if (liste.length == 0) {
        console.log("La liste est vide");
    }
    var nbrmax = liste[0];
    for (var i = 1; i < liste.length; i++) {
        if(liste[i]>nbrmax){
            nbrmax = liste[i];
        }
    }
    return nbrmax;
}
var numbers = [12,845,210,96420,11875];
var NombreMaximum = maximum(numbers);
console.log("le nombre maximum est : " + NombreMaximum);