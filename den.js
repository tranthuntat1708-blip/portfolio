const carousel = document.getElementById("carousel");

carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
});
