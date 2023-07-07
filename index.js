// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu_1");
const bar = document.querySelector(".bar");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    navMenu.classList.toggle("active");
    bar.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu)); 
function closeMenu() {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    bar.classList.remove("active")
}

// dropdown 
const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((d) => d.addEventListener("click", dropDown));
function dropDown() {
    if (this.classList.contains("active")) {
        this.classList.remove("active")
    } else {
            let j;
            const closedropdown = document.getElementsByClassName("dropdown active")
            for (j = 0; j < closedropdown.length; j++) {
                closedropdown[j].classList.remove("active")
    }
    this.classList.add("active")
}
}

// const dropdown = document.getElementsByClassName("dropdown")
// let i;
// for (i = 0; i < dropdown.length; i++) {
//     dropdown[i].addEventListener("click", dropDown);
//     function dropDown() {
//         if(this.classList.contains("active")) {
//             this.classList.remove("active")
//         }
//         else {
//             let j;
//             const closedropdown = document.getElementsByClassName("dropdown active")
//             for (j = 0; j < closedropdown.length; j++) {
//                 closedropdown[j].classList.remove("active")
//             }
//             this.classList.add("active")
//         }
//     }
// }