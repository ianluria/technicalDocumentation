const getSection = function (sectionID) {

    const mainDoc = document.getElementById("main-doc");

    return [...mainDoc.children].find(section => section.id === sectionID);
}

//first, hide all sections except for the intro text

const mainDoc = document.getElementById("main-doc");

const sectionDisplayContainer = document.getElementById("main-content-container");

//consider adding hide class directly on each section first then removing as needed???
[...mainDoc.children].forEach(section => {
    if (section != sectionDisplayContainer) {
        section.classList.add("hide");
    }
});

const displaySection = function (section) {

    const displayContainer = document.getElementById("main-content-container");

    if (displayContainer.hasChildNodes) {
        [...displayContainer.children].forEach(child => {
            displayContainer.removeChild(child);
        });
    }

    const duplicatedSection = section.cloneNode(true);
    duplicatedSection.classList.remove("hide");
    duplicatedSection.classList.add("duplicate");

    displayContainer.appendChild(duplicatedSection);
};

displaySection(getSection("intro-text"));

[...document.getElementsByClassName("nav-link")].forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionID = event.target.hash.match(/[^\#]/g).join('');

        displaySection(getSection(sectionID));
    });
});