let slideMenuButton = document.querySelector("#slidemenu");
let operatorMenu = document.querySelector("#operator");
let homePage = document.querySelector("#homepage");
let materialsPage = document.querySelector("#materialspage");
let materialsCard = document.querySelector("#materialscard");
let homeButton = document.querySelector(".backhome");
let root = document.querySelector("#root");
let placeHolderDiv = document.querySelector(".placeholder");
let winWidth = 1080;

window.addEventListener("resize", () => {
    winWidth = window.innerWidth;
})
    


slideMenuButton.addEventListener("click", () => {

    if(operatorMenu.style.display == "none") {

        slideMenuButton.innerHTML = "Segédpanel elrejtése"
        operatorMenu.style.display = "block";
        if(winWidth >= 640) {
        root.setAttribute("class", "row no-gutters text-left");
        } else {
            root.setAttribute("class", "row no-gutters text-center");
            placeHolderDiv.style.display = "block";
        }
    }
    else {

        slideMenuButton.innerHTML = "Segédpanel megnyitása"
        operatorMenu.style.display = "none";
        root.setAttribute("class", "row no-gutters text-center");
        placeHolderDiv.style.display = "none";
    }
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