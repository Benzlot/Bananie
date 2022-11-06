const Navbar = document.getElementById("fixed");

document.addEventListener("scroll",()=>{
    Navbar.classList.replace("unfixdown","fixdown");
    if(document.documentElement.scrollTop < 20){
        Navbar.classList.replace("fixdown","unfixdown"); 
    };
});