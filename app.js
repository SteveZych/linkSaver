//References to HTML elements
const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = dcoument.querySelector("#cancelButton");
const addLinkPanel = dcoument.querySelector("#addLinkPanel");


let linkCategories = [];
let links = [];

addBtn.addEventListener('click', (event) => {
    console.log("add button clicked");
    showFormPanel();
})

cancelButton.addEventListener('click', (event) => {
    //we don't actually want this to submit anything
    event.preventDefault();
    console.log("cancel button clicked");
    hideFormPanel();
})

function showFormPanel(){
    addLinkPanel.classList.remove('hidden');
}

function hideFormPanel(){
    addLinkPanel.classList.remove('hidden');
}

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

    //hide addLinkPanel form
    hideFormPanel();
})