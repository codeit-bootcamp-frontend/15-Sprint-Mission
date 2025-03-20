const visible = document.getElementsByClassName('visible');

function passwordVisibility (e) {
    if (e.target.getAttribute("src") === "/img/visibility_off.png") {
        e.target.setAttribute("src", "/img/visibility_on.png");
        e.target.parentElement.previousElementSibling.setAttribute("type", "text");
    } else {
        e.target.setAttribute("src", "/img/visibility_off.png");
        e.target.parentElement.previousElementSibling.setAttribute("type", "password");
    }
}

for (let icon of visible) {
    icon.addEventListener('click', passwordVisibility);
}