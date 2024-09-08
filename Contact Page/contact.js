
const emailAddress = document.getElementById("contact-email-address");
const emailDownCaret = document.getElementById("caret-down");
const emailRightCaret = document.getElementById("caret-right");

function showEmail() {
    emailAddress.style.display = "initial";
    emailDownCaret.style.display = "initial";
    emailRightCaret.style.display = "none";
}
function hideEmail() {
    emailAddress.style.display = "none";
    emailDownCaret.style.display = "none";
    emailRightCaret.style.display = "initial";
}

