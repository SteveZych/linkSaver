//References to HTML elements
const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");

let linkCategories = [];
let links = [];

linkCategory.addEventListener('keydown', function(event){
    
    if(event.keyCode === 188){
        event.preventDefault();
        linkCategories.push(linkCategory.value);
        linkCategory.value = "";
        
        //Display the updated categories
        displayLinkCategories();
    }
})

function  displayLinkCategories() {
    console.log("Display link categories.")
};

submitButton.addEventListener('click', (event) => {
    
    //Stop form from submitting because the default action brings it to a new page
    event.preventDefault();

    //You can use dot notation to access the value of HTML id
    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    //With ES6, it assumes that the key and value are the same if you declare the key as a variable
    //instead of title: title, etc.
    const newLink = {
        title,
        url,
        categories
    }

    //push new link to link array
    links.push(newLink);

    //empty out values for the form
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkCategories = [];

    displayLinkCategories();
})