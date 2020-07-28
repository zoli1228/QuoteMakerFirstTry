let mainBody = document.querySelector("body");
let slideMenuButton = document.querySelector("#slidemenu");
let slideMenuText = document.querySelector("#slidemenuText");
let operatorMenu = document.querySelector("#operator");
let homePage = document.querySelector("#homepage");
let materialsPage = document.querySelector("#materialspage");
let materialsCard = document.querySelector("#materialscard");
let homeButton = document.querySelector(".backhome");
let root = document.querySelector("#root");
let placeHolderDiv = document.querySelector(".placeholder");
let menuClosedButton = document.querySelector("#mclosedbtn");
let menuOpenButton = document.querySelector("#mopenbtn");
let winWidth = window.innerWidth;
let isOperatorOpen = false;
let windowMode;

window.addEventListener("resize", () => {
    winWidth = window.innerWidth;
    checkDeviceWidth();
})

let checkDeviceWidth = () => {
    winWidth < 640 ? windowMode = "mobile" : windowMode = "pc";
    if (windowMode == "mobile") {
        slideMenuText.innerHTML = "";

        switch (isOperatorOpen) {
            case true:

                menuOpenButton.style.display = "block";
                menuClosedButton.style.display = "none";

                break;
            case false:

                menuOpenButton.style.display = "none"
                menuClosedButton.style.display = "block";
                break;
        }


    }
    else if (windowMode == "pc") {
        menuOpenButton.style.display = "none";
        menuClosedButton.style.display = "none";
        switch (isOperatorOpen) {
            case true:
                slideMenuText.innerHTML = "Operátor elrejtése";
                root.setAttribute("class", "row no-gutters text-left");
                break;
            case false:
                slideMenuText.innerHTML = "Operátor kinyitása";
                root.setAttribute("class", "row no-gutters text-center");
                break;
        }
    }
}

slideMenuButton.addEventListener("click", () => {

    if (!isOperatorOpen) {
        isOperatorOpen = true;
        operatorMenu.style.display = "block";
        placeHolderDiv.style.display = "none";
        if (windowMode == "pc") {
            
        } else if (windowMode == "mobile") {
            placeHolderDiv.style.display = "block";
        }
    }
    else if (isOperatorOpen) {
        isOperatorOpen = false;
        operatorMenu.style.display = "none";
        
        placeHolderDiv.style.display = "none";
    }
    checkDeviceWidth();
})

materialsCard.addEventListener("click", displayMaterials)

homeButton.addEventListener("click", displayHome)




function displayHome() {
    homePage.style.display = "block";
    materialsPage.style.display = "none";
}
function displayMaterials() {
    homePage.style.display = "none";
    materialsPage.style.display = "block";
}

mainBody.addEventListener("load", () => {
    checkDeviceWidth();
    displayHome();
})

