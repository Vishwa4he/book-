// Selecting popup box, popup overlay, and buttons
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Selecting cancel button
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Selecting container and input elements
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Add book event listener
addbook.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new book container div
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Set the inner HTML with the input values
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-button">Delete</button>
    `;

    // Append the new book container to the main container
    container.append(div);

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // Hide the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Add functionality to the delete button
    var deleteButton = div.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        container.removeChild(div);
    });
});


