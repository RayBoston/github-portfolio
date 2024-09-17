const email = document.getElementById("contact-email");
const emailAddress = document.getElementById("contact-email-address");
const emailDownCaret = document.getElementById("caret-down");
const emailRightCaret = document.getElementById("caret-right");


function showEmail() {
        if (emailAddress.style.visibility !== "visible") {  
                emailAddress.style.visibility = "visible";
                emailDownCaret.style.display = "initial";
                emailRightCaret.style.display = "none";
        } else {
                emailAddress.style.visibility = "hidden";
                emailDownCaret.style.display = "none";
                emailRightCaret.style.display = "initial";
        }
}

    email.onclick = showEmail;
    emailRightCaret.onclick = showEmail;
