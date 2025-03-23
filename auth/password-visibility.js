const passwordToggleButton = document.getElementsByClassName('visible');

function passwordVisibility (e) {
    const toggleButton = e.target;
    const input = e.target.parentElement.previousElementSibling;
    
    if (toggleButton.getAttribute("src") === "/img/visibility_off.png") {
        toggleButton.setAttribute("src", "/img/visibility_on.png");
        input.setAttribute("type", "text");
    } else {
        toggleButton.setAttribute("src", "/img/visibility_off.png");
        input.setAttribute("type", "password");
    }
}

for (const icon of passwordToggleButton) {
    icon.addEventListener('click', passwordVisibility);
}