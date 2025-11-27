// Establishes <ul> variable and its position on the web page.
const companyLogos = document.getElementById("company-logos");
let position = 0;

// Moves the <ul> to the left.
function moveLogos() {
    position += 0.7;
    companyLogos.style.right =`${position}px`;
}
// Continuously runs this function every 15 milliseconds.
let logosAnimation = setInterval(moveLogos, 15);

// Stops the interval from running when the mouse hovers over the ul.
companyLogos.addEventListener("mouseenter", () => {
    clearInterval(logosAnimation);
});
//Starts the interval again after the mouse is no longer over the ul.
companyLogos.addEventListener("mouseleave", () => {
    logosAnimation = setInterval(moveLogos, 15);
});

// Turns the <li> elements in the above <ul> element into an array and stores it in a variable.
let logo1Containers = Array.from(document.querySelectorAll(".logo1-containers"));

function conveyorBelt() {
// Checks if the ul element is 400px off screen before it repositions the li element
    if(position > 400) {

// Stores the lead <li> element in a variable.
    let leadLogo = logo1Containers.shift();

// Takes the width of the lead <li> element and stores that amount of space  in a variable.
    let leadLogoSpace = leadLogo.offsetWidth;

//Removes the lead <li> element from the DOM.
    leadLogo.remove();

// Moves the <ul> element to the left by the same distance as the width of the lead <li> to compensate for its removal.
    position -= leadLogoSpace;

// Uses the number in the position variable inside a string so that style.right can read it in pixels
    companyLogos.style.right =`${position}px`;

// Pushes the lead <li> to the back of the array.
    logo1Containers.push(leadLogo);

// Adds that element to the back of the DOM off screen.
    companyLogos.appendChild(leadLogo);
    }
}
//Continuously runs this function evey 1 second.
setInterval(conveyorBelt, 1000);



const demoScreenshots1 = document.getElementById("demo-screenshots-1");
const demoScreenshots2 = document.getElementById("demo-screenshots-2");
let placement1 = -50;
let placement2 = 0;

let themeArray1 = Array.from(document.querySelectorAll(".demo-screenshot1"));

// Moves the <ul> to the right.
function moveThemes1() {
    placement1 += 0.43;
    demoScreenshots1.style.left =`${placement1}px`;
}

let theme1Animation = setInterval(moveThemes1, 10);

// Stops the interval from running when the mouse hovers over the ul.
demoScreenshots1.addEventListener("mouseenter", () => {
    clearInterval(theme1Animation);
});
//Starts the interval again after the mouse is no longer over the ul.
demoScreenshots1.addEventListener("mouseleave", () => {
    theme1Animation = setInterval(moveThemes1, 10);
});

function conveyorTheme1() {
 if(placement1 > -25) {

// Stores the end <li> element in a variable.
    let endTheme = themeArray1.pop();

// Takes the width of the lead <li> element and stores that amount of space  in a variable.
    let endThemeSpace = endTheme.offsetWidth + 19;

//Removes the back <li> element from the DOM.
    endTheme.remove();

// Moves the <ul> element to the right by the same distance as the width of the end <li> to compensate for its removal.
    placement1 -= endThemeSpace;

// Uses the number in the position variable inside a string so that style.left can read it in pixels
    demoScreenshots1.style.left =`${placement1}px`;

// Pushes the lead <li> to the front of the array.
    themeArray1.unshift(endTheme);

// Adds that element to the front of the DOM off screen.
    demoScreenshots1.prepend(endTheme);
    }
}
setInterval(conveyorTheme1, 1000);


let themeArray2 = Array.from(document.querySelectorAll(".demo-screenshot2"));

// Moves the <ul> to the left.
function moveThemes2() {
    placement2 += 0.35;
    demoScreenshots2.style.right =`${placement2}px`;
}
let theme2Animation = setInterval(moveThemes2, 10);

// Stops the interval from running when the mouse hovers over the ul.
demoScreenshots2.addEventListener("mouseenter", () => {
    clearInterval(theme2Animation);
});
//Starts the interval again after the mouse is no longer over the ul.
demoScreenshots2.addEventListener("mouseleave", () => {
    theme2Animation = setInterval(moveThemes2, 10);
});

function conveyorTheme2() {
 if(placement2 > 536) {

// Stores the lead <li> element in a variable.
    let leadTheme = themeArray2.shift();

// Takes the width of the lead <li> element and stores that amount of space  in a variable.
    let leadThemeSpace = leadTheme.offsetWidth + 19;

//Removes the lead <li> element from the DOM.
    leadTheme.remove();

// Moves the <ul> element to the left by the same distance as the width of the lead <li> to compensate for its removal.
    placement2 -= leadThemeSpace;

// Uses the number in the position variable inside a string so that style.right can read it in pixels
    demoScreenshots2.style.right =`${placement2}px`;

// Pushes the lead <li> to the back of the array.
    themeArray2.push(leadTheme);

// Adds that element to the back of the DOM off screen.
    demoScreenshots2.appendChild(leadTheme);
    }
}
setInterval(conveyorTheme2, 1000);



// Establishes <ul> variable and its position on the web page.
const companyLogos2 = document.getElementById("main-4-box-mobile");
let position2 = 0;

// Moves the <ul> to the left.
function moveLogos2() {
     if (window.innerWidth <= 767) {
    position2 += 0.8;
    companyLogos2.style.right =`${position2}px`;
     }
}

// Continuously runs this function every 15 milliseconds.
let logosAnimation2 = setInterval(moveLogos2, 15);

// Stops the interval from running when the mouse hovers over the ul.
companyLogos2.addEventListener("mouseenter", () => {
    clearInterval(logosAnimation2);
});
//Starts the interval again after the mouse is no longer over the ul.
companyLogos2.addEventListener("mouseleave", () => {
    logosAnimation2 = setInterval(moveLogos2, 15);
});

// Turns the <li> elements in the above <ul> element into an array and stores it in a variable.
let logo2Containers = Array.from(document.querySelectorAll(".logo-2"));

function conveyorBelt2() {
     if (window.innerWidth <= 767) {
        // Checks if the ul element is 400px off screen before it repositions the li element
        if(position2 > 400) {

        // Stores the lead <li> element in a variable.
        let leadLogo2 = logo2Containers.shift();

        // Takes the width of the lead <li> element and stores that amount of space  in a variable.
        let leadLogoSpace2 = leadLogo2.offsetWidth;

        //Removes the lead <li> element from the DOM.
        leadLogo2.remove();

        // Moves the <ul> element to the left by the same distance as the width of the lead <li> to compensate for its removal.
        position2 -= leadLogoSpace2;

        // Uses the number in the position variable inside a string so that style.right can read it in pixels
        companyLogos2.style.right =`${position2}px`;

        // Pushes the lead <li> to the back of the array.
        logo2Containers.push(leadLogo2);

        // Adds that element to the back of the DOM off screen.
        companyLogos2.appendChild(leadLogo2);
        }
    }
}

//Continuously runs this function evey 1 second.
setInterval(conveyorBelt2, 1000);

//These are my wordpress theme screenshots, and its child elements stored as arrays from their class names
const filterTriggers = Array.from(document.getElementsByClassName("filter-trigger"));
const screenshotFilters = Array.from(document.getElementsByClassName("screenshot-filters"));
const screenshotLinks1 = Array.from(document.getElementsByClassName("screenshot-links-1"));
const screenshotLinks2 = Array.from(document.getElementsByClassName("screenshot-links-2"));


// This for loop adds an event listener to all of my screenshots so that the filter and links can appear when I hover a mouse over them
for(let sF = 0; sF < filterTriggers.length; sF++) {
    filterTriggers[sF].addEventListener("mouseenter", () => {
         screenshotFilters[sF].style.visibility = "visible";
         if (screenshotFilters[sF].style.visibility === "visible") {
            screenshotFilters[sF].style.opacity = "1";
            screenshotLinks1[sF].style.transform = "translateY(0px)";
            screenshotLinks2[sF].style.transform = "translateY(0px)";
         }
    });
    filterTriggers[sF].addEventListener("mouseleave", () => {
        screenshotFilters[sF].style.opacity = "0";
        if (screenshotFilters[sF].style.opacity === "0") {
            screenshotFilters[sF].style.visibility = "hidden";
            screenshotLinks1[sF].style.transform = "translateY(5px)";
            screenshotLinks2[sF].style.transform = "translateY(5px)";
        }
    });
}