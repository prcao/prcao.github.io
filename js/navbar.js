const NAVBAR_ID = "navbar";

const NAVBAR = document.getElementById(NAVBAR_ID);

window.onscroll = () => {

    var scrollThreshold = document.getElementById("landing").offsetHeight;

    if (document.body.scrollTop >= scrollThreshold || document.documentElement.scrollTop >= scrollThreshold) {
        NAVBAR.style.top = "0";
    } 
    
    else {
        NAVBAR.style.top = "-" + scrollThreshold + "px";
    }
}