let opened = false;
const menu = document.querySelector(".drop-menu");
const button = document.querySelector(".navigation-button");
const buttonStripes = document.querySelector(".navigation-button-line");

window.addEventListener("load", (event) => {
    listenToButton();
    console.log("Page is fully loaded");
})


function listenToButton() {
    button.addEventListener("click", () => {
            toggleMenu(opened);
    });
}


function toggleMenu(state) {
    if (state == false) {
        button.style.width = "100%";
        button.style.height = "100%";
        button.style.top = 0;
        button.style.right = 0;
        button.style.borderRadius = "0";
        buttonStripes.style.display = "none";
        menu.style.display = "block";
        menu.style.position = "fixed";
        opened = true;
        
    } else {
        button.style.width = "45px";
        button.style.height = "45px";

        button.style.top = "15px";
        button.style.right = "15px";
        button.style.borderRadius = "50%";
        buttonStripes.style.display = "block";
        
        menu.style.display = "none";
        
        opened = false;
    }

}