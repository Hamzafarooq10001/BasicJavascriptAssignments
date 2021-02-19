var valueinput = prompt("Enter the value for factorialization");
if(valueinput==0){
    alert(0);
}
else if(valueinput>0){
    factorelize(valueinput);
}

function factorelize(valueEnter){ 
var result = 1;
for(var i=1; i<=valueEnter; i++){
    result = result * i;
}
alert(result);
}
