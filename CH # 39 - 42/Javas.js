var course1 = prompt("Enter marks of course 1 out of 100");
var course2 = prompt("Enter marks of course 2 out of 100");
var course3 = prompt("Enter marks of course 3 out of 100");
var course4 = prompt("Enter marks of course 4 out of 100");
var course5 = prompt("Enter marks of course 5 out of 100");
var totalMarks = 500;
var obtainedMarks = parseInt(course1)+parseInt(course2)+parseInt(course3)+parseInt(course4)+parseInt(course5);
var percentage = (obtainedMarks*100)/totalMarks;
alert(percentage);
switch(true){
    case percentage>=90:
        alert("You Score A+");
        break;
    case percentage>=75 && percentage<90:
        alert("You Score A");
        break;
    case percentage>=60 && percentage<75:
        alert("You Score B");
        break;
    case percentage>=45 && percentage<60:
        alert("You Score C");
        break;
    case percentage>=30 && percentage<45:
        alert("You Score D");
        break;
    case percentage>=0 && percentage<30:
        alert("You Score F ");
        break;    
} 