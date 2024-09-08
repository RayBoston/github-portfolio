const email = document.getElementById("contact-email");
const emailAddress = document.getElementById("contact-email-address");
const emailDownCaret = document.getElementById("caret-down");
const emailRightCaret = document.getElementById("caret-right");


function showEmail() {
        emailAddress.style.visibility = "visible";
        emailDownCaret.style.display = "initial";
        emailRightCaret.style.display = "none";
}

    email.onclick = showEmail;
    emailRightCaret.onclick = showEmail;
    email.removeEventListener(click, showEmail);
