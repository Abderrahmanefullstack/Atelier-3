function trier(text) {
    var lines = text.split('\n');
    lines.forEach(function (line) {
        if (line.inclide('I')) {
            console.log(line.toUpperCase());
        }
    });
}
var text = "Bonjour je suis Abderrahmane" +
    "je suis entrain de ecrire  salut les amis";
trier(text);