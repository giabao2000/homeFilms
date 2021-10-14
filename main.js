$(document).ready(() => {
    $("#hamburger-menu").click(() => {
        $("#hamburger-menu").toggleClass("active");
        $("#nav-menu").toggleClass("active");
    });

    // settting owl carousel
    let navText = [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ];

    $("#hero-carousel").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplayHoverPause: true,
    });

    $("#showcase-slide").owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 15,
        responsive: {
            320: {
                items: 1,
            },
            500: {
                items: 3,
            },
            1280: {
                items: 4,
            },
            1600: {
                items: 6,
            },
        },
    });
});

// Handle Nav onscroll
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    const navWrapper = document.querySelector(".nav-wrapper");

    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        navWrapper.style.height = "80px";
        navWrapper.classList.add("shadow");
    } else {
        navWrapper.style.height = "100px";
        navWrapper.classList.remove("shadow");
    }
}
