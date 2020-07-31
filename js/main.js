window.addEventListener("resize", () => {
    winWidth = window.innerWidth;
    checkDeviceWidth();
})

let checkDeviceWidth = () => {
    winWidth < 640 ? windowMode = "mobile" : windowMode = "pc";
    if (windowMode == "mobile") {
        slideMenuText.innerHTML = "";
        menuClosedButton.style.display = "block";
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
                slideMenuText.innerHTML = "Operátor megnyitása";
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

materialsCard.addEventListener("click", displayMaterials);
contactsCard.addEventListener("click", displayCalculator);
accessoriesCard.addEventListener("click", displayAccessories);
invoiceCard.addEventListener("click", displayInvoicePage); /*?*/



homeButton.addEventListener("click", displayHome);






function displayHome() {
    homePage.style.display = "block";
    materialsPage.style.display = "none";
    accessoriesPage.style.display ="none";
    calcPage.style.display = "none";
    invoicePage.style.display = "none";
    hideHomeBtn(true);
}
function displayMaterials() {
    homePage.style.display = "none";
    materialsPage.style.display = "block";
    accessoriesPage.style.display ="none";
    calcPage.style.display = "none";
    invoicePage.style.display = "none";
    hideHomeBtn(false);
}
function displayCalculator() {
    homePage.style.display = "none";
    materialsPage.style.display = "none";
    accessoriesPage.style.display ="none";
    calcPage.style.display = "block";
    invoicePage.style.display = "none";
    hideHomeBtn(false);
}
function displayAccessories() {
    homePage.style.display = "none";
    materialsPage.style.display = "none";
    accessoriesPage.style.display ="block";
    calcPage.style.display = "none";
    invoicePage.style.display = "none";
    hideHomeBtn(false);
}
function displayInvoicePage() {
    homePage.style.display = "none";
    materialsPage.style.display = "none";
    accessoriesPage.style.display ="none";
    calcPage.style.display = "none";
    invoicePage.style.display = "block";
    hideHomeBtn(false);
}

mainBody.addEventListener("load",
    checkDeviceWidth(),
    displayHome()
)



function hideHomeBtn(bool) {
    bool == true ? homeButton.style.display = "none" : homeButton.style.display = "block";
    return;
}

