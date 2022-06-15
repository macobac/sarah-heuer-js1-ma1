const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



//Question 1:

const cat = {
    complain: function() {
        console.log("Meow!")}
};



//Question 2:

var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";



//Question 3:

heading.style.fontSize = "2em";



//Question 4:

heading.classList.add("subheading");



//Question 5:

let paragraphs = document.querySelectorAll("p");

for (p of paragraphs) {
    p.style.color = "red"
};



//Question 6:

var resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = "<p>" + "New paragraph" + "<p>";
resultsContainer.style.backgroundColor = "yellow";



//Question 7: Create a function that has one parameter called list.
//Inside the function, loop through the list parameter and console log the name property in each object.
//Call the function and pass in the cats variable in the script.js file in the repo.

function thisFunction(list) {
    for (let i = 0; i < list.length, i++;) {
        console.log(list.name)
    }
};

thisFunction(cats);


//Question 8: Create a function called createCats. The function will have one parameter called cats.
// Inside the function loop through the value passed in as cats and create HTML for each object in the array.
// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
// If the age property is missing, it should display “Age unknown” instead.
// Return the HTML from the function.
// Call the function and pass in the cats array as the argument.
// Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.

function createCats(cats) {
    
}