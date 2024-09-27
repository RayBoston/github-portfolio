const htmlBox = document.getElementById("html-icon-box");
const cssBox = document.getElementById("css-icon-box");
const javascriptBox = document.getElementById("javascript-icon-box");
const gitBox = document.getElementById("git-icon-box");
const githubBox = document.getElementById("github-icon-box");
const nodeBox = document.getElementById("node-icon-box");

const htmlIcon = document.getElementsByClassName("fa-html5")[0];
const cssIcon = document.getElementsByClassName("fa-css3")[0];
const javascriptIcon = document.getElementsByClassName("fa-js")[0];
const gitIcon = document.getElementsByClassName("fa-git")[0];
const githubIcon = document.getElementsByClassName("fa-github")[0];
const nodeIcon = document.getElementsByClassName("fa-node-js")[0];

function defineLanguage(targetBox) {
    if (targetBox.style.border !== "3px solid red") {
        targetBox.style.border = "3px solid red";
        targetBox.style.width = "250px";
        targetBox.style.height = "500px";

    } else {
        targetBox.style.border = "0px";
        targetBox.style.width = "initial";
        targetBox.style.height = "initial";
    }
}

htmlIcon.addEventListener("click", function () {defineLanguage(htmlBox)});
cssIcon.addEventListener("click", function () {defineLanguage(cssBox)});
javascriptIcon.addEventListener("click", function () {defineLanguage(javascriptBox)});
gitIcon.addEventListener("click", function () {defineLanguage(gitBox)});
githubIcon.addEventListener("click", function () {defineLanguage(githubBox)});
nodeIcon.addEventListener("click", function () {defineLanguage(nodeBox)});