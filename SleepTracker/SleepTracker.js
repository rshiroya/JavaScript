var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var duration = [5,6,7,8,4,5,5];

var $ = function(id) { return document.getElementById(id); };
function updateSleep()
{
    var day = document.getElementById("Day").value;
    var hours = document.getElementById("duration").value;
    if(hours == "")
    {
        alert("Enter a valid number");

    }
    else {
        days.push(day);
        duration.push(hours);
        alert("Your updated sleep duration is "+hours+" hrs on " + day);
    }
}

function showAverageSleep()
{
    var avg = document.getElementById("result");
    var total = "";
    for(var i = 0; i < duration.length; i++)
    {
        total = total + duration[i];
    }
    var average = total / duration.length;
    alert(average);
    avg.innerHTML = average;
}

function displaySleepDuration()
{
    var track = document.getElementById("sleep_table")
    var sleep = "";
    sleep = sleep + "<p> Hey You slept less than 7 hours on the following days</p><br><br>";
    for(var i = 0; i < duration.length; i++)
    {
        if(i<7)
        {
            sleep+= "<tr><td>" + days[i] + "</td><td>" + duration[i] + "</td></tr>";
        }

    }

    track.innerHTML = sleep;
}

window.onload = function() {
    //event handlers
    $("update").onclick = updateSleep;
    $("avgSleep").onclick = showAverageSleep;
    $("track").onmouseover = displaySleepDuration;
};

