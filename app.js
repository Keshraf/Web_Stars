const nav = document.querySelector('.nav-column');
const overlay = document.querySelector('.overlay');

document.querySelector('.but-nav').addEventListener("click", function(){
    nav.classList.add("nav2-column");
    overlay.classList.add("overlay2")
})

document.querySelector('.close-nav').addEventListener("click",function(){
    nav.classList.remove("nav2-column");
    overlay.classList.remove("overlay2");
})

document.querySelector(".overlay").addEventListener("click",function(){
    nav.classList.remove("nav2-column");
    overlay.classList.remove("overlay2");
})

