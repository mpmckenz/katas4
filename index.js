

function task (katanumber) {
    let kTask = document.getElementById("kataTask")
    let append = document.createTextNode(katanumber)
    let katanumber = ["1. Display an array from the cities in gotCitiesCSV."
    ,"2. Display a string separated by semi-colons instead of commas from gotCitiesCSV"
    ,"3. Display a string separated by semi-colons instead of commas from gotCitiesCSV"
    , "4. Display a CSV (comma-separated) string from the lotrCitiesArray"
    , "5. Display the first 5 cities in lotrCitiesArray"
    , "6. Display the last 5 cities in lotrCitiesArray"
    , "7. Display the 3rd to 5th city in lotrCitiesArray"
    , "8. Using splice, remove Rohan from lotrCitiesArray"
    , "9. Using splice, remove all cities after Dead Marshes in lotrCitiesArray"
    , "10. Using splice, add Rohan back to lotrCitiesArray right after Gondor"
    , "11. Using splice, rename Dead Marshes to Deadest Marshes in lotrCitiesArray"
    , "12. Using slice, display the first 14 characters from bestThing"
    , "13. Using slice, display the last 12 characters from bestThing"
    , "14. Using slice, display characters between the 23rd and 38th position of bestThing"
    , "15. Repeat #13 using substring instead of slice."
    , "16. Repeat #14 using substr instead of slice."
    , "17. Find and display the index of only in bestThing"
    , "18. Find and display the index of the last word in bestThing"
    , "19. Find and display all cities from gotCitiesCSV  that use double vowels"
    , "20. Find and display all cities from lotrCitiesArray that end with or"
    , "21. Find and display all the words in bestThing that start with a b"
    , "22. Display Yes or No if lotrCitiesArray includes Mirkwood"
    , "23. Display Yes or No if lotrCitiesArray includes Hollywood"
    , "24. Display the index of Mirkwood in lotrCitiesArray"
    , "25. Find and display the first city in lotrCitiesArray that has more than one word"
    , "26. Reverse the order in lotrCitiesArray"
    , "27. Sort lotrCitiesArray alphabetically"
    , "28. Sort lotrCitiesArray by the number of characters in each city"
    , "29. Using pop, remove the last city from lotrCitiesArray"
    , "30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array"
    , "31. Using shift, remove the first city from lotrCitiesArray"
    , "32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array"];
    for (let i = 0; i<=katanumber.length; i++)) {
        let task1 = document.createElement("div")
        task1.appendChild(append)
        kTask.appendChild(task1)
    }
}


const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


// Kata 1

task();

let result = JSON.stringify(gotCitiesCSV.split(",") );
document.getElementById("kataSolution").innerHTML = result;





// WORKING FUNCTION TO DISPLAY TASKS IF THE ABOVE DOESNT WORK

// function task (katanumber, inputstring) {
//     let kTask = document.getElementById("kataTask")
//     let task1 = document.createElement("h5")
//     let append = document.createTextNode(katanumber + ". " + inputstring)
//     for (let katanumber = 1; katanumber.length; katanumber++) {
//        (1: "Display an array from the cities in gotCitiesCSV.")
//     } 
//     task1.appendChild(append)
//     kTask.appendChild(task1)
// }


// const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

// const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

// const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


// // Kata 1

// task("1", "Display an array from the cities in gotCitiesCSV.");

// let result = JSON.stringify(gotCitiesCSV.split(",") );
// document.getElementById("kataSolution").innerHTML = result;