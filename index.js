let hamburgerMenu = document.getElementById("menu")
let menu = document.getElementById("menu-lists")
let closeButton = document.getElementById("close")

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.style.display = "none"
    menu.style.display = "block"
})

closeButton.addEventListener("click", function(){
    menu.style.display = "none"  
    hamburgerMenu.style.display = "block"
})