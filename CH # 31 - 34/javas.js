var Name = prompt("Enter your Name");
var DateofBirth = new Date();
var DOBDay = prompt("Enter your Day of Date of Birth"); 
DateofBirth.setDate(DOBDay);
var DOBmonth = prompt("Enter your Date of Birth Month");
DOBmonth = DOBmonth-1;
DateofBirth.setMonth(DOBmonth);
var DOByear = prompt("Enter your Date of Birth Year");
DateofBirth.setFullYear(DOByear);
DateofBirth.setHours(0);
DateofBirth.setMinutes(0);
DateofBirth.setSeconds(0);
alert("Hello "+Name+", Good Morning"); 
alert("You DOB is "+DateofBirth);
var Currenttime = new Date();
var timeDifference = Currenttime.getTime() - DateofBirth.getTime()
alert(timeDifference);
var timeinDay = 24*60*60*1000;
alert(timeinDay);
var days = timeDifference/timeinDay;
alert(days);





