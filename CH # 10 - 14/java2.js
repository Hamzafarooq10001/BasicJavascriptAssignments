var a = prompt("Enter Marks of English out of 100");
var b = prompt("Enter Marks of Urdu out of 100");
var c = prompt("Enter Marks of Maths out of 100");
var d = prompt("Enter Marks of Chemistry out of 100");
var e = prompt("Enter Marks of Physics out of 100");
var totalObtain = parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e);
var Total = 500;
var Percentage = ((totalObtain*100)/Total)+"%";
alert(Percentage);