const Navrela = document.getElementById("relative");
const Navbar = document.getElementById("fixed");

document.addEventListener("scroll",()=>{
    Navbar.classList.replace("unfixdown","fixdown");
    if(document.documentElement.scrollTop < 20){
        Navbar.classList.replace("fixdown","unfixdown"); 
    };
});

Navbar.addEventListener("mouseover",()=>{
    Navbar.classList.replace("brown","browntran");
    Navrela.classList.replace("brown","browntran");
})

Navrela.addEventListener("mouseover",()=>{
    Navbar.classList.replace("brown","browntran");
    Navrela.classList.replace("brown","browntran");
})

Navbar.addEventListener("mouseout",()=>{
    Navbar.classList.replace("browntran","brown");
    Navrela.classList.replace("browntran","brown");
})

Navrela.addEventListener("mouseout",()=>{
    Navbar.classList.replace("browntran","brown");
    Navrela.classList.replace("browntran","brown");
})