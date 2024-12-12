// Check whether two buttons belong to the same section
function areButtonsSiblings(button1, button2) {
    let parent1 = button1.parentElement.parentElement.id;
    let parent2 = button2.parentElement.parentElement.id;
    return parent1 !== parent2;
}

// Check if any button should be closed in addition to toggling button
// If a button from a new section is clicked, close all other buttons
function toggleCheck(button) {
    let allButtons = document.body.getElementsByClassName('toggle-button');
    // Check if buttons are siblings by comparing their grandparent section
    for (let myButton of allButtons){
        let notSibling = areButtonsSiblings(button, myButton);
        if (notSibling) {
            if (myButton.classList.contains('active')) {
                toggleContent(myButton);
            };
        };
    };
    toggleContent(button);
}

// Toggle a button: If it is open, then close it, otherwise open it. Switch "+" to "-" and vice-versa.
function toggleContent(button) {
    const content = button.nextElementSibling;
    button.classList.toggle("active");
    content.style.display = content.style.display === "none" || content.style.display === "" ? "block" : "none";
}

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('toggle-button')) {
        toggleCheck(event.target);
    }
})
