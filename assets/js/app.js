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
