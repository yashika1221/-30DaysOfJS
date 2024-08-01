// Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

let heading= document.querySelector("#heading");
let button= document.querySelector("#changeHeading");
button.addEventListener('click',()=> heading.innerText= "30DaysOfJS");

// Task 2: Add a double-click event listener to an image that toggles its visibility.

let img= document.querySelector("#image");
img.addEventListener('dblclick',()=> img.style.visibility= img.style.visibility=== "hidden"? "visible": "hidden");

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.

let para= document.querySelector("#para");
para.addEventListener('mouseover',()=> para.style.background= "green");

//  Task 4: Add a mouseout event listener to an element that resets its background color.

para.addEventListener('mouseout', () => para.style.background="yellow");

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let textbox= document.querySelector("#textbox");
let output= document.querySelector("#output");
textbox.addEventListener('keydown', (event)=> output.textContent= `you entered ${event.key}`);

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

let paragraph= document.querySelector("#paragraph");
textbox.addEventListener('keyup', (event)=> paragraph.innerText=`entered value is ${event.target.value}`);

// Activity 4: Form Events

// + Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let form = document.querySelector("form");
let _name = document.getElementById("name");
let college = document.getElementById("college");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(_name,college);
});

// « Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let select = document.querySelector("select");
let select_para = document.querySelector("#select");
select.addEventListener('change',()=>{
    select_para.innerText = `selected value = ${select.value}`;
});

// Activity 5: Event Delegation

// + Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let itemList = document.getElementById("item-list");
let p = document.querySelector('#list');
itemList.addEventListener('click',(event)=>{
    if (event.target && event.target.matches("li.list-item")) {
        console.log("Clicked on: " + event.target.textContent);
        p.innerText = "Clicked on: " + event.target.textContent;
    }
});

// + Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

let add = document.querySelector("#add-item");
add.addEventListener('click',()=>{
    const newitem = document.createElement("li");
    newitem.classList.add("list-item");
    newitem.textContent = "new item";
    itemList.appendChild(newitem);
})