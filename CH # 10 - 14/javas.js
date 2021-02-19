var a = prompt("Enter First Number");
var b = prompt("Enter Second Number");
var c = prompt("Enter Sign");
if(c==="+"){
    alert(parseFloat(a)+parseFloat(b));
}
else if(c==="-"){
    alert(a-b);
}
else if(c==="*"){
    alert(a*b);
}
else if(c==="/"){
    alert(a/b);
}
else if(c==="%"){
    alert(a%b);
}