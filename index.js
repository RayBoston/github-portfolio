
const htmlIcon = document.getElementsByClassName("fa-html5")[0];
const cssIcon = document.getElementsByClassName("fa-css3")[0];
const javascriptIcon = document.getElementsByClassName("fa-js")[0];
const gitIcon = document.getElementsByClassName("fa-git")[0];
const githubIcon = document.getElementsByClassName("fa-github")[0];
const nodeIcon = document.getElementsByClassName("fa-node-js")[0];

const htmlHeading = document.getElementsByTagName("strong")[0];
const cssHeading = document.getElementsByTagName("strong")[1]; 
const javascriptHeading = document.getElementsByTagName("strong")[2]; 
const gitHeading = document.getElementsByTagName("strong")[3]; 
const githubHeading = document.getElementsByTagName("strong")[4]; 
const nodeHeading = document.getElementsByTagName("strong")[5];  

const htmlDescription = document.getElementsByTagName("span")[0];
const cssDescription = document.getElementsByTagName("span")[1];
const javascriptDescription = document.getElementsByTagName("span")[2];
const gitDescription = document.getElementsByTagName("span")[3];
const githubDescription = document.getElementsByTagName("span")[4];
const nodeDescription = document.getElementsByTagName("span")[5];

function showLanguageDescription(targetHeading, targetDescription) {
    if (targetDescription.style.visibility === "hidden") {
        targetDescription.style.visibility = "visible";
        targetHeading.style.color = "red";

    } else {
        targetDescription.style.visibility = "hidden";
        targetHeading.style.color = "white";
    }
}

htmlIcon.addEventListener("click", function () {showLanguageDescription(htmlHeading, htmlDescription)});
cssIcon.addEventListener("click", function () {showLanguageDescription(cssHeading, cssDescription)});
javascriptIcon.addEventListener("click", function () {showLanguageDescription(javascriptHeading, javascriptDescription)});
gitIcon.addEventListener("click", function () {showLanguageDescription(gitHeading, gitDescription)});
githubIcon.addEventListener("click", function () {showLanguageDescription(githubHeading, githubDescription)});
nodeIcon.addEventListener("click", function () {showLanguageDescription(nodeHeading, nodeDescription)});
