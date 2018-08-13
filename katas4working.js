

function task (katanumber, inputstring) {
    let kTask = document.getElementById("kataTask")
    let task1 = document.createElement("h5")
    let append = document.createTextNode(katanumber + ". " + inputstring)
    for (let katanumber = 1; katanumber.length; katanumber++) {
       (1: "Display an array from the cities in gotCitiesCSV.")
    } 
    task1.appendChild(append)
    kTask.appendChild(task1)
}


const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


// Kata 1

task("1", "Display an array from the cities in gotCitiesCSV.");

let result = JSON.stringify(gotCitiesCSV.split(",") );
document.getElementById("kataSolution").innerHTML = result;

// task(Display an array of words from the sentence in bestThing