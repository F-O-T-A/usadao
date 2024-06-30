document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('carousel');
    let scrollAmount = 0;
    const speed = 0.5; 

    function scrollCarousel() {
        scrollAmount += speed;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'auto'
        });
        requestAnimationFrame(scrollCarousel);
    }

    scrollCarousel();
});
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isActiveView() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(href);

        if (targetElement && isElementInViewport(targetElement)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('scroll', isActiveView);