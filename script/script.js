
//menu bar
let menu_bars = document.querySelector("#menu_bars");
let navbar = document.querySelector(".navbar");
menu_bars.addEventListener("click", ()=> {
    menu_bars.classList.toggle("fa-times");
    navbar.classList.toggle("active-menu");
});

//product search form close-btn
/*
let product_search_button = document.querySelector("#product_search_button");
let search_form = document.querySelector("#search-form");
let close_btn = document.querySelector("#close-btn");
product_search_button.addEventListener("click", ()=>{
    search_form.classList.add("active_product_form");
})
close_btn.addEventListener("click", ()=>{
    search_form.classList.remove("active_product_form");
})

*/

//favorite modal control
//fav conainer
let fav_container = document.querySelector("#fav_container");
let favorite_modal_button = document.querySelector("#favorite_modal_button");
let favorite_container = document.querySelector("#favorite_container");

favorite_modal_button.addEventListener("click", ()=>{
    favorite_container.classList.add("active_favorite_box");
    displayFavItems()
})
let close_fav_bt = document.querySelector("#close-fav-btn");
close_fav_bt.addEventListener("click", ()=>{
    favorite_container.classList.remove("active_favorite_box");
})

//navs
let section = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("header .navbar a");

//on window scroll
window.onscroll= () => {
    menu_bars.classList.remove("fa-times");
    navbar.classList.remove("active-menu");

    section.forEach((sect) => {
        let top = window.scrollY;
        let height = sect.offsetHeight;
        let offset = sect.offsetTop-150
        let id = sect.getAttribute("id");
        if(top => offset && top < offset + height){
            navLinks.forEach((links)=> {
                links.classList.remove("active");
                document.querySelector("header .navbar  a[href*="+id+"]").classList.add("active");
            })
        }
    })
}

//get favorite item from localstorage
 const getFavItems = () => {
     const favs = localStorage.getItem("favorites-items");
     return favs;
 }
 
 //display favorite item 
 const displayFavItems = () => {
     const favorites = getFavItems();
     if (favorites) {
         console.log(favorites)
         //grab where to display the favorites list
         //use forEach to display it
     }else{
         console.log("You do not have any favorite at the moment");
         let content = "<h1>You do not have any favorite at the moment<h1>"
         fav_container.innerHTML= content;
     }
 }

