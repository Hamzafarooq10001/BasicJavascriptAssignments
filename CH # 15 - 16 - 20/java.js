var allCourse = [];
var NumberofSubject = prompt("Enter Number of Subjects You want to Add");
for(var i=0; i<NumberofSubject; i++){
    var subjects  = prompt("Enter Name of Your Subject No. "+(i+1));
    allCourse.push(subjects);    
}
alert(allCourse);

var agreeMsg = prompt("Do you want to Edit Any Subjects Write --Yes-- or --No--");
if(agreeMsg==="Yes"){
        
        var NumberofSubjectedit = prompt("Write how many subjects do you want to Edit");
        for(j=1; j<=NumberofSubjectedit; j++){
            var subjectNumber = prompt("Write Subject Number of that Subject which you want to edit from below "+allCourse);
            --subjectNumber;
            var newsubject = prompt("Write new subject at replacement of "+allCourse[subjectNumber]);
            allCourse[subjectNumber] = newsubject; 
        }
    alert(allCourse);
        
}
else if(agreeMsg==="No"){
    alert(allCourse)
}

