var number = prompt("Enter decimal Number");
alert(Math.ceil(number));

var text = "This is my dummy text";
var anotherText = text.slice(0,4);
alert(anotherText);
var reverseText = [];
var splitText = anotherText.split("");
for(var i=splitText.length; i>=0; i--){
    reverseText.push(splitText[i])
}
alert(reverseText.join(""));