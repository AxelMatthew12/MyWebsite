window.onscroll = function() {
    scrollFunction();
    toggleFooterVisibility();
};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.padding = "10px 10px";
        logo.style.fontSize = "25px";
    } else {
        navbar.style.padding = "15px 10px";
        logo.style.fontSize = "35px";
    }
}

function toggleFooterVisibility() {
    const footer = document.querySelector('.footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
}
