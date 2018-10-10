const kataResults = document.getElementById("kata-results")

let gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

let lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

let bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

let kataDescription = ["1. Display an array from the cities in gotCitiesCSV",
"2. Display an array of words from the sentence in bestThing",
"3. Display a string separated by semi-colons instead of commas from gotCitiesCSV",
"4. Display a CSV (comma-separated) string from the lotrCitiesArray",
"5. Display the first 5 cities in lotrCitiesArray",
"6. Display the last 5 cities in lotrCitiesArray",
"7. Display the 3rd to 5th city in lotrCitiesArray",
"8. Using splice, remove Rohan from lotrCitiesArray",
"9. Using splice, remove all cities after Dead Marshes in lotrCitiesArray",
"10. Using splice, add Rohan back to lotrCitiesArray right after Gondor",
"11. Using splice, rename Dead Marshes to Deadest Marshes in lotrCitiesArray",
"12. Using slice, display the first 14 characters from bestThing",
"13. Using slice, display the last 12 characters from bestThing",
"14. Using slice, display characters between the 23rd and 38th position of bestThing",
"15. Repeat #13 using substring instead of slice",
"16. Repeat #14 using substr instead of slice",
"17. Find and display the index of only in bestThing",
"18. Find and display the index of the last word in bestThing",
"19. Find and display all cities from gotCitiesCSV  that use double vowels",
"20. Find and display all cities from lotrCitiesArray that end with or",
"21. Find and display all the words in bestThing that start with a b",
"22. Display Yes or No if lotrCitiesArray includes Mirkwood",
"23. Display Yes or No if lotrCitiesArray includes Hollywood",
"24. Display the index of Mirkwood in lotrCitiesArray",
"25. Find and display the first city in lotrCitiesArray that has more than one word",
"26. Reverse the order in lotrCitiesArray",
"27. Sort lotrCitiesArray alphabetically",
"28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)",
"29. Using pop, remove the last city from lotrCitiesArray",
"30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array",
"31. Using shift, remove the first city from lotrCitiesArray",
"32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array"]

function createKataContainer(kata) {
    let container = document.createElement("div");
    let header = document.createElement("h3");
    let resultNode = document.createTextNode(kata.result);
    let description = document.createTextNode(kata.description)
    header.appendChild(description);
    container.appendChild(header);
    container.appendChild(resultNode);
    kataResults.appendChild(container);
}

const gotCities = {
    description: "Game of Throne Cities",
    result: gotCitiesCSV
}
createKataContainer(gotCities)

const lotrCities = {
    description: "Lord of the Ring Cities",
    result: lotrCitiesArray
}
createKataContainer(lotrCities)

const DMGsentence = {
    description: "DMG sentence",
    result: bestThing
}
createKataContainer(DMGsentence)



// Katas!
const kata1 = {
    description: kataDescription[0],
    result: JSON.stringify(gotCitiesCSV)
}
createKataContainer(kata1)

const kata2 = {
    description: kataDescription[1],
    result: JSON.stringify(bestThing.split(" "))
}
createKataContainer(kata2);

const kata3 = {
    description: kataDescription[2],
    result: gotCitiesCSV.split(",").join("; ")
}
createKataContainer(kata3);

const kata4 = {
    description: kataDescription[3],
    result: lotrCitiesArray.join(", ")
}
createKataContainer(kata4);

const kata5 = {
    description: kataDescription[4],
    result: lotrCitiesArray.slice(0, 5)
}
createKataContainer(kata5);

const kata6 = {
    description: kataDescription[5],
    result: lotrCitiesArray.slice(3, 8)
}
createKataContainer(kata6);

const kata7 = {
    description: kataDescription[6],
    result: lotrCitiesArray.slice(2, 5)
}
createKataContainer(kata7);

console.log(lotrCitiesArray.splice(2, 1))
const kata8 = {
    description: kataDescription[7],
    result: lotrCitiesArray
}
createKataContainer(kata8);

console.log(lotrCitiesArray.splice(5, 2))
const kata9 = {
    description: kataDescription[8],
    result: lotrCitiesArray
}
createKataContainer(kata9);

console.log(lotrCitiesArray.splice(2, 0, "Rohan"))
const kata10 = {
    description: kataDescription[9],
    result: lotrCitiesArray
}
createKataContainer(kata10);

console.log(lotrCitiesArray.splice(5, 1, "Deadest Marshes"))
console.log(lotrCitiesArray.push("Rhun", "Harad"))
const kata11 = {
    description: kataDescription[10],
    result: lotrCitiesArray
}
createKataContainer(kata11);

const kata12 = {
    description: kataDescription[11],
    result: bestThing.slice(0, 15)
}
createKataContainer(kata12);

const kata13 = {
    description: kataDescription[12],
    result: bestThing.slice(-12)
}
createKataContainer(kata13);

const kata14 = {
    description: kataDescription[13],
    result:bestThing.slice(23, 38)
}
createKataContainer(kata14);

const kata15 = {
    description: kataDescription[14],
    result: bestThing.substring(bestThing.length -12)
}
createKataContainer(kata15);

const kata16 = {
    description: kataDescription[15],
    result: bestThing.substr(23, 15)
}
createKataContainer(kata16);

const kata17 = {
    description: kataDescription[16],
    result: bestThing.indexOf("only")
}
createKataContainer(kata17);

const kata18 = {
    description: kataDescription[17],
    result: bestThing.lastIndexOf(bestThing.split(" ").slice(-1))
}
createKataContainer(kata18);

// gotCitiesCSV is a string, we split it into an array of strings and used filter to create/display our substring of the double vowel cities. Using a .includes in a function to find the matching cities.
const kata19 = {
    description: kataDescription[18],
    result: gotCitiesCSV.split(",").filter(function (word) {
        return word.includes("aa") 
        || word.includes("ee") 
        || word.includes("ii") 
        || word.includes("oo") 
        || word.includes("uu")
    })
}
createKataContainer(kata19);

const kata20 = {
    description: kataDescription[19],
    result: lotrCitiesArray.filter(function (word) {
        return word.endsWith("or")
    }
)
}
createKataContainer(kata20);

const kata21 = {
    description: kataDescription[20],
    result: bestThing.split(" ").filter( function (word) {
        return word.startsWith("b")
    }
)
}
createKataContainer(kata21);

const kata22 = {
    description: kataDescription[21],
    result: lotrCitiesArray.includes("Mirkwood")
    }
createKataContainer(kata22);

const kata23 = {
    description: kataDescription[22],
    result: lotrCitiesArray.includes("Hollywood")
}
createKataContainer(kata23);

const kata24 = {
    description: kataDescription[23],
    result: lotrCitiesArray.indexOf("Mirkwood")
}
createKataContainer(kata24);

const kata25 = {
    description: kataDescription[24],
    result: lotrCitiesArray.filter(i => i.includes(" "))
}
createKataContainer(kata25);

const kata26 = {
    description: kataDescription[25],
    result: lotrCitiesArray.reverse()
}
createKataContainer(kata26);

const kata27 = {
    description: kataDescription[26],
    result: lotrCitiesArray.sort()
}
createKataContainer(kata27);

console.log(function arrangeCities(a, b) {
    return a.length - b.length
})
const kata28 = {
    description: kataDescription[27],
    result: lotrCitiesArray.sort(function arrangeCities(a, b) {
        return a.length - b.length
    })
}
createKataContainer(kata28);

console.log(lotrCitiesArray.pop())
const kata29 = {
    description: kataDescription[28],
    result: lotrCitiesArray
}
createKataContainer(kata29);

console.log(lotrCitiesArray.push("Deadest Marshes"))
const kata30 = {
    description: kataDescription[29],
    result: lotrCitiesArray
}
createKataContainer(kata30);

console.log(lotrCitiesArray.shift())
const kata31 = {
    description: kataDescription[30],
    result: lotrCitiesArray
}
createKataContainer(kata31);

console.log(lotrCitiesArray.unshift("Rhun"))
const kata32 = {
    description: kataDescription[31],
    result: lotrCitiesArray
}
createKataContainer(kata32);