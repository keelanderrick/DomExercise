document.getElementById("container"); // Select the section with an id of container without using querySelector
document.querySelector("#container"); // Select the section with an id of container using querySelector
document.getElementsByClassName("second"); // Select all of the list items with a class of “second”.
document.querySelector("ol .third"); // Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("#container").appendChild(document.createTextNode("Hello!")); // Give the section with an id of container the text “Hello!”.
document.querySelector("div.footer").classList.add ("main"); // Add the class main to the div with a class of footer.
document.querySelector("div.footer").classList.remove ("main"); // Remove the class main on the div with a class of footer.
obj = document.createElement("li"); // Create a new li element.
obj.innerText = "four"; // Give the li the text “four”.
document.querySelector("ul").appendChild(obj); // Append the li to the ul element.
for(let li of document.querySelectorAll("ol li")) { // Loop over all of the lis inside the ol tag and give them a background color of “green”.
    li.style.backgroundColor = "green";
}
document.querySelector(".footer").remove(); // Remove the div with a class of footer