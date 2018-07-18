const options = {
    duration: 1000,
    scale: 1,
    easing: 'ease'

};

window.sr = ScrollReveal();
sr.reveal('.revealable', options);

$("#arrow").click(
    () => {
        scrollToAnchor('about')
    }
);

function scrollToID(id) {

    $('html, body').animate(
        {
            scrollTop: $("#" + id).offset().top
        },
        'slow');
}
