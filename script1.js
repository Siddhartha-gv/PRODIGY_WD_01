window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
