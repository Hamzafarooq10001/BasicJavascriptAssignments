
CapitalizationFun();

function CapitalizationFun(){
var text = prompt("Enter your Paragraph");
var Words = text.split(" ");
for(var j=0; j<Words.length; j++){
var Letters = Words[j].split("");
Letters[0] = Letters[0].toUpperCase();
for(var i=1; i<Letters.length; i++){
    Letters[i] = Letters[i].toLowerCase();
}
Words[j] = Letters.join("");
}
var CapitalizeWords = Words.join(" ");
alert(CapitalizeWords);
}