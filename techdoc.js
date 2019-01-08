

const getSection = function (sectionID) {

    const mainDoc = document.getElementById("main-doc");

    return [...mainDoc.children].find(section => section.id === sectionID);
}

/*
const applyToAll = function (CSSKey, CSSValue, optionalSection, opKey, opValue) {

    //console.log(optionalSection);
    const mainContentContainer = document.getElementById("main-content-container");

    [...mainContentContainer.children].forEach(section => {

        if (section === optionalSection) {
            // section.style.setProperty(opKey, opValue);
            section.classList.remove("hide");
        } else {
            // section.style.setProperty(CSSKey, CSSValue);
            section.classList.add("hide");
        }
    });
}
*/
//first, hide all sections except for the intro text

const mainDoc = document.getElementById("main-doc");

const sectionDisplayContainer = document.getElementById("main-content-container");

[...mainDoc.children].forEach(section => {
    if (section != sectionDisplayContainer) {
        section.classList.add("hide");
    }
});

//sectionDisplayContainer.appendChild(getSection("intro-text"));

const displaySection = function (section) {
    //console.log(section);
    const displayContainer = document.getElementById("main-content-container");

    if (displayContainer.hasChildNodes) {
        [...displayContainer.children].forEach(child => {
            displayContainer.removeChild(child);
        });
    }

    const duplicatedSection = section.cloneNode(true);
    duplicatedSection.classList.remove("hide");
    duplicatedSection.id = "duplicate";

    displayContainer.appendChild(duplicatedSection);
};

displaySection(getSection("intro-text"));

[...document.getElementsByClassName("nav-link")].forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const sectionID = event.target.hash.match(/[^\#]/g).join('');
        // console.log(sectionID);

        displaySection(getSection(sectionID));
    });
});

/*
const breakText = function (event) {
    //console.log(window.innerWidth);

    if (window.innerWidth < 1200 && window.innerWidth > 900) {
        const navBar = document.getElementById("navbar");
        const navBarHeader = document.getElementById("navBarHeader");

        const navBarWidth = navBar.offsetWidth;
        const headerWidth = navBarHeader.offsetWidth;

        let headerLinkInnerHTML = navBarHeader.firstElementChild.innerHTML;
        //console.log("bar: ", navBarWidth, " header: ", headerWidth);
        // debugger;

        if (navBarWidth < headerWidth + 10) {
            headerLinkInnerHTML = headerLinkInnerHTML.replace(/\s/, "<br>");
            //console.log(navBarHeader.firstChild.innerHTML);
            //console.log(headerLinkInnerHTML);
        } else {
            headerLinkInnerHTML = headerLinkInnerHTML.replace(/<br>/, " ");
            //console.log("false");
        }

        navBarHeader.firstElementChild.innerHTML = headerLinkInnerHTML;
    }
}
window.onresize = breakText;
*/