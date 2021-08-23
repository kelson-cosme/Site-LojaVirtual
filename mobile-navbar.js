const mobileMenu = document. getElementById("mobileMenu");
const navList = document.getElementById("navList");
const listaMenu = document.getElementById("listaMenu");



function clicara(){
    if (listaMenu.className == "") {
        listaMenu.classList.add("active");
        console.log(listaMenu.className)
    
    } else if (listaMenu.className == "active"){

            listaMenu.classList.remove("active");
        
    }

}

mobileMenu.addEventListener("click", clicara)