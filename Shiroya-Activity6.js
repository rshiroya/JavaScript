
function replaceGrades(score){
    var grade=" ";
    if((score >= 100) && (score <= 120)){
        grade="A";
    }
    else if((score >= 80) && (score <= 99)){
        grade="B";
    }
    else if((score >= 70) && (score <= 79)){
        grade="C";
    }
    else if((score >= 60) && (score <= 69)){
        grade="D";
    }
    else{
        grade="F";
    }
    return grade;
}
while(1){
    var score= prompt("Enter number grade form o through 100"+"\n"+"Or enter -1 to end entries");
    var score = parseInt( score);
    if((score <= 120) && ( score>= 0)){
        alert("Number Grade = "+String(score)+"\n"+"Letter Grade = "+replaceGrades(score));
    }
    else if(score == -1){
        break;
    }
    else{
        prompt("Enter number grade form o through 100"+"\n"+"Or enter -1 to end entries");
    }
}