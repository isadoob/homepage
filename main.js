const blinkiesrunner = document.querySelectorAll(".blinkiesrunner");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    addAnimation();
}

function addAnimation(){
    blinkiesrunner.forEach((blinkiesrunner) => {
        blinkiesrunner.setAttribute("data-animated", true);
    });
}