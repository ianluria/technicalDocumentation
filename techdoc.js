
const getSection = function (sectionID) {

    const mainContentContainer = document.getElementById("main-content-container");

    return [...mainContentContainer.children].find(section => section.id === sectionID);
}

const applyToAll = function (CSSKey, CSSValue, optionalSection, opKey, opValue) {

    console.log(optionalSection);
    const mainContentContainer = document.getElementById("main-content-container");

    [...mainContentContainer.children].forEach(section => {

        // if(arguments[2] != null){
        if (section === optionalSection) {
            section.style.setProperty(opKey, opValue);
        } else {
            section.style.setProperty(CSSKey, CSSValue);
        }
        // }
    });
}
const testSection = getSection("intro-text");
applyToAll("background-color", "red", testSection, "background-color", "green");