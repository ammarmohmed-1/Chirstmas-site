// style the cloud

let content = document.querySelector(".content");
let mountain = document.querySelector(".mountain");
let moon = document.querySelector(".moon");
let cloud_1 = document.querySelector(".cloud-1");
let cloud_2 = document.querySelector(".cloud-2");



window.onscroll = function(){
    let scrol = scrollY;
    moon.style.top = - scrol * 2.5 + 'px' ;
    cloud_1.style.left = scrol * 3 + 'px' ;
    cloud_2.style.left = scrol * -2 + 'px' ;
    content.style.top = - scrol * 2.2 + 'px' ;
    mountain.style.bottom =- scrol * 2.5 + 'px' ;
    
    
    console.log(scrol);
    // style is navbar
    var header = document.querySelector(".header");
    if(window.scrollY > 600){
        header.style.display = "flex"
    }else{header.style.display = "none"}


    navbar.classList.remove("nav_block")
    menu_btn.classList.remove("fa-xmark")

    search_btn.classList.remove("fa-xmark");
    search_form.classList.remove("search-form_none")

}
//   ///    ///   ///   ///   ///   ///   ///   ///   ///

// ///  //  ///  style programing the navbar menue // ///  //  ///  // /// 

const menu_btn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menu_btn.addEventListener("click", ()=>{
    navbar.classList.toggle("nav_block")
    menu_btn.classList.toggle("fa-xmark")
})

// style search

const search_btn = document.getElementById("search-btn");
const search_form = document.querySelector(".search-form");

search_btn.addEventListener("click", ()=>{
    search_btn.classList.toggle("fa-xmark");
    search_form.classList.toggle("search-form_none")

})