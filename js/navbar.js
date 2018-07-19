const NAVBAR_ID = "navbar";

const NAVBAR = document.getElementById(NAVBAR_ID);

window.onscroll = function () {

    var scrollThreshold = document.getElementById("landing").offsetHeight;

    if (document.body.scrollTop >= scrollThreshold || document.documentElement.scrollTop >= scrollThreshold) {
        NAVBAR.style.top = "0";
    }

    else {
        NAVBAR.style.top = "-" + scrollThreshold + "px";
    }
}

$(document).ready(

    function () {

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function () {

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");

        });
    }
);