const getSection = function (sectionID) {

    const mainDoc = document.getElementById("main-doc");

    return [...mainDoc.children].find(section => section.id === sectionID);
}

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

//Display introductory text when page launches
displaySection(getSection("intro-text"));

//Click functionality for navBar links
[...document.getElementsByClassName("nav-link")].forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
       const sectionID = event.target.hash.match(/[^\#]/g).join('');
   
        displaySection(getSection(sectionID));
    });
});