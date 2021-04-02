const btnHamburger = document.getElementById("btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
    console.log("open");
    if(header.classList.contains("open")){ // Close hamburger menu
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElements.forEach((element) => {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        })
        
    }else{ // Open hamburger menu
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElements.forEach((element) => {
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
        })
        
    }
})