// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.

let heading= document.getElementById("heading");
heading.innerText= "30DaysOfJs";

// Task 2: Select an HTML element by its class and change its background color.

let day= document.getElementsByClassName("day");
day[0].style.background= "blue";

// Activity 2: Creating and Appending Elements

// Task 3: Create anew div element with some text content and append it to the body.

let body= document.querySelector("body");
let topic= document.createElement("div");
topic.innerText="the above mentioned concepts are covered in Day 9.";
body.append(topic);

// Task 4: Create anew Li element and add it to an existing ul list.

let ul= document.querySelector("ul");
let li= document.createElement("li");
li.innerText= "Event Handling";
ul.append(li);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

let rem= document.querySelector(".sub");
rem.remove();

// + Task 6: Remove the last child of a specific HTML element.

ul.removeChild(ul.lastChild);

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., Src of an ing tag).

let img = document.querySelector("img");
img.setAttribute("src","https://i.pinimg.com/564x/b4/de/20/b4de205cb6d4e7cad43c2971f780cfd9.jpg");

// Task 8: Add and remove a CSS class to/from an HTML element.

let paragraph = document.createElement("p");
paragraph.innerText = "Event Listener";
body.append(paragraph);

let style = document.createElement('style');
style.innerHTML = `
  .highlight {
    background-color: yellow;
  }
`;

document.head.appendChild(style);

paragraph.classList.add("highlight"); 
paragraph.classList.remove("highlight"); 

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let button = document.createElement("button");
button.innerText = "Click Here";
body.append(button);

button.addEventListener("click", () => {
    paragraph.innerText = "Now don't Click";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.

ul.addEventListener("mouseover", () => {
    ul.style.border = "2px solid black";
    ul.style.borderRadius = "10px";
});