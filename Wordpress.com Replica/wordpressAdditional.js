// I stored the header elements in seperate variables to use later
const productsHeader = document.getElementById("Products-header");
const featuresHeader = document.getElementById("Features-header");
const resourcesHeader = document.getElementById("Resources-header");
const companyHeader = document.getElementById("Company-header");

// I stored all of the headers in a single variables
const allHeaders = document.querySelectorAll(".list-span");

// These are the li elements underneath each header stored in seperate variables
const listItemsP = document.querySelectorAll(".list-itemP");
const listItemsF = document.querySelectorAll(".list-itemF");
const listItemsR = document.querySelectorAll(".list-itemR");
const listItemsC = document.querySelectorAll(".list-itemC");

// These are the li elements underneath each header all stored in one variable
const listItems = document.querySelectorAll(".list-item");

let headerClickP = false;
let headerClickF = false;
let headerClickR = false;
let headerClickC = false;

function displayListP() {
    if(window.innerWidth <= 1151) {
        headerClickP = !headerClickP;
        listItemsP.forEach( p => {
            if(headerClickP === false) {
                p.style.display = "none";
            } else {
                p.style.display = "list-item";

                headerClickF = false;
                if(headerClickF === false) {
                    listItemsF.forEach( f => {
                    f.style.display = "none"});
                }

                headerClickR = false;
                if(headerClickR === false) {
                    listItemsR.forEach( r => {
                    r.style.display = "none"});
                }

                headerClickC = false;
                if(headerClickC === false) {
                    listItemsC.forEach( c => {
                    c.style.display = "none"});
                }
              }
        });
    } else {
        listItemsP.forEach( p => {
            p.style.display = "list-item";
        });
      }
}

function displayListR() {
    if(window.innerWidth <= 1151) {
        headerClickR = !headerClickR;
        listItemsR.forEach( r => {
            if(headerClickR === false) {
                r.style.display = "none";
            } else {
                r.style.display = "list-item";

                headerClickF = false;
                if(headerClickF === false) {
                    listItemsF.forEach( f => {
                    f.style.display = "none"});
                }

                headerClickP = false;
                if(headerClickP === false) {
                    listItemsP.forEach( p => {
                    p.style.display = "none"});
                }

                headerClickC = false;
                if(headerClickC === false) {
                    listItemsC.forEach( c => {
                    c.style.display = "none"});
                }

              }
        });
    } else {
        listItemsR.forEach( r => {
            r.style.display = "list-item";
        });
      }
}

function displayListF() {
    if(window.innerWidth <= 1151) {
        headerClickF = !headerClickF;
        listItemsF.forEach( f => {
            if(headerClickF === false) {
                f.style.display = "none";
            } else {
                f.style.display = "list-item";

                headerClickP = false;
                if(headerClickP === false) {
                    listItemsP.forEach( p => {
                    p.style.display = "none"});
                }

                headerClickR = false;
                if(headerClickR === false) {
                    listItemsR.forEach( r => {
                    r.style.display = "none"});
                }

                headerClickC = false;
                if(headerClickC === false) {
                    listItemsC.forEach( c => {
                    c.style.display = "none"});
                }

              }
        });
    } else {
        listItemsF.forEach( f => {
            f.style.display = "list-item";
        });
      }
}

function displayListC() {
    if(window.innerWidth <= 1151) {
        headerClickC = !headerClickC;
        listItemsC.forEach( c => {
            if(headerClickC === false || headerClickP === true) {
                c.style.display = "none";
            } else {
                c.style.display = "list-item";

                headerClickF = false;
                if(headerClickF === false) {
                    listItemsF.forEach( f => {
                    f.style.display = "none"});
                }

                headerClickR = false;
                if(headerClickR === false) {
                    listItemsR.forEach( r => {
                    r.style.display = "none"});
                }

                headerClickP = false;
                if(headerClickP === false) {
                    listItemsP.forEach( p => {
                    p.style.display = "none"});
                }

              }
        });
    } else {
        listItemsC.forEach( c => {
            c.style.display = "list-item";
        });
      }
}

function windowResize() {
    if(window.innerWidth > 1151) {
         listItemsP.forEach( p => {
            p.style.display = "list-item";
        });
    } else if (window.innerWidth < 1151 && headerClickP === false) {
        listItemsP.forEach( p => {
            p.style.display = "none";
        });
    }

    if(window.innerWidth > 1151) {
         listItemsF.forEach( f => {
            f.style.display = "list-item";
        });
    } else if (window.innerWidth < 1151 && headerClickF === false) {
        listItemsF.forEach( f => {
            f.style.display = "none";
        });
    }

    if(window.innerWidth > 1151) {
         listItemsR.forEach( r => {
            r.style.display = "list-item";
        });
    } else if (window.innerWidth < 1151 && headerClickR === false) {
        listItemsR.forEach( r => {
            r.style.display = "none";
        });
    }

    if(window.innerWidth > 1151) {
         listItemsC.forEach( c => {
            c.style.display = "list-item";
        });
    } else if (window.innerWidth < 1151 && headerClickC === false) {
        listItemsC.forEach( c => {
            c.style.display = "none";
        });
    }
}

productsHeader.addEventListener("click", displayListP);
featuresHeader.addEventListener("click", displayListF);
resourcesHeader.addEventListener("click", displayListR);
companyHeader.addEventListener("click", displayListC);

window.addEventListener("resize", windowResize);

// The section below is for handling my header mobile menu

const menuButton = document.getElementById("fa-bars");
const closeButton = document.getElementById("x-mark");
const headerMenu = document.getElementById("header-mobile-menu");
const menuFilter = document.getElementById("header-menu-filter");

function openMenu() {
    headerMenu.style.display = "initial";
    menuFilter.style.display = "initial";
}

function closeMenu() {
    headerMenu.style.display = "none";
    menuFilter.style.display = "none";
}

function closeMenu2() {
    if(window.innerWidth > 768) {
        if(window.scrollY >= 764) {
        headerMenu.style.display = "none";
        menuFilter.style.display = "none";
        }
    } else {
        if(window.scrollY >= 696) {
        headerMenu.style.display = "none";
        menuFilter.style.display = "none";
    }
    }
}

menuButton.onclick = openMenu;
closeButton.onclick = closeMenu;
menuFilter.onclick = closeMenu;
window.onscroll = closeMenu2;


// The section below is for handling my menu dropdowns at the top of the page.

const dropdownP = document.getElementById("dropdown-products");
const dropdownF = document.getElementById("dropdown-features");
const dropdownR = document.getElementById("dropdown-resources");

const menuP = document.getElementById("products-options");
const menuF = document.getElementById("features-options");
const menuR = document.getElementById("resources-options");

function displayDropdownP() {
    menuP.style.visibility = "visible";
    if (menuP.style.visibility === "visible") {
        menuP.style.opacity = "1";
        menuP.style.transform = "translateY(0px)";
    }
}

function hideDropdownP() {
    menuP.style.opacity = "0";
    if (menuP.style.opacity === "0") {
            menuP.style.visibility = "hidden";
            menuP.style.transform = "translateY(-7px)";
    }
}

dropdownP.addEventListener("mouseover", displayDropdownP);
dropdownP.addEventListener("mouseout", hideDropdownP);
menuP.addEventListener("mouseover", displayDropdownP);
menuP.addEventListener("mouseout", hideDropdownP);

function displayDropdownF() {
    menuF.style.visibility = "visible";
    if (menuF.style.visibility === "visible") {
        menuF.style.opacity = "1";
        menuF.style.transform = "translateY(0px)";
    }
}

function hideDropdownF() {
    menuF.style.opacity = "0";
    if (menuF.style.opacity === "0") {
            menuF.style.visibility = "hidden";
            menuF.style.transform = "translateY(-7px)";
    }
}

dropdownF.addEventListener("mouseover", displayDropdownF);
dropdownF.addEventListener("mouseout", hideDropdownF);
menuF.addEventListener("mouseover", displayDropdownF);
menuF.addEventListener("mouseout", hideDropdownF);

function displayDropdownR() {
    menuR.style.visibility = "visible";
    if (menuR.style.visibility === "visible") {
        menuR.style.opacity = "1";
        menuR.style.transform = "translateY(0px)";
    }
}

function hideDropdownR() {
    menuR.style.opacity = "0";
    if (menuR.style.opacity === "0") {
        menuR.style.visibility = "hidden";
        menuR.style.transform = "translateY(-7px)";
    }
}

dropdownR.addEventListener("mouseover", displayDropdownR);
dropdownR.addEventListener("mouseout", hideDropdownR);
menuR.addEventListener("mouseover", displayDropdownR);
menuR.addEventListener("mouseout", hideDropdownR);


//This section handles the input element in the "Claim your home on the web section of the page."

//My input element is stored in the domainText variable
const domainInput = document.getElementById("domain-finder");

//This is an array of all of the placeholder domain names that I'll need stored in a variable.
const domainPlaceholders = ["gluten-free-gutenberg.com", "pool-request.com", "ssh-pls.com", "hash-salts-bbq-malts.com","splash-cache.com","blue-sky-api.com",
                            "java-script-coffee-sip.com","upload-down-code.com","browser-powder.com","install-de-stijl.com","full-stack-lipstick.com",
                            "artificial-eloquence.com","electric-utopia.com","machine-kerning.com","open-sauce.com","web-three-one-four.com","four-oh-four.com",
                            "place-hodler.com"];

// These two variables will represent the index of my array item (i), and the index of each item in each array item (j)
let i = 0;
let j = 0;

// This varaible represents the current item in the domainPlaceholders array that the startInterval function is iterating over.
let currentPlaceholder;

//This variable will be used as the interval id in the startInterval function.
let intervalId = null;

//After a 1050 ms timeout, this interval will iterate through each letter in each array item and display it as placeholder text one item at a time.
function startInterval() {
    if (intervalId) return;
        intervalId = setInterval(() => {
        currentPlaceholder = domainPlaceholders[i];
        domainInput.placeholder += domainPlaceholders[i][j];
        j += 1;
        if (j > currentPlaceholder.length) {
            domainInput.placeholder = " ";
            clearInterval(intervalId);
            intervalId = null;
            setTimeout(startInterval, 1000);
            i += 1
            j = 0
        } else if (j === currentPlaceholder.length) {
            pauseInterval();
        } 
        if (i === domainPlaceholders.length) {
            i = 0;
        }
        }, 85);
}

//This function stops and clears the interval.
function stopInterval() {
    clearInterval(intervalId);
    intervalId = null;
}

//This function pauses the interval temporarily.
function pauseInterval() {
    clearInterval(intervalId);
    intervalId = null;
    setTimeout(startInterval, 1800);
}



//Stops and restarts the interval when the input element is scrolled out of and back into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(startInterval, 1050);
        } else {
            stopInterval();
            // reset placeholder when offscreen
            domainInput.placeholder = "";
            i = 0;
            j = 0;
        }
    });
});

//Targets the domainInput variable as the element to be observed
observer.observe(domainInput);
