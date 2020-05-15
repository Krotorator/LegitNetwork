import Swiper from "swiper";

window.addEventListener("DOMContentLoaded", () => {
    let swiperOptions = {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 10000,
        },
        effect: "fade",
        // observeParents: true,
        on: {
            slideChange: function () {
                let bg = this.slides[this.activeIndex].querySelector(".banner__bg");
                let prevBg = this.slides[this.previousIndex].querySelector(".banner__bg");
                let text = this.slides[this.activeIndex].querySelector(".banner__text");
                let prevText = this.slides[this.previousIndex].querySelector(".banner__text");

                bg.classList.add("banner__bg_animate");
                setTimeout(() => {
                    prevBg.classList.remove("banner__bg_animate");
                }, 200);
                text.classList.add("banner__text_fadeInOut");
                prevText.classList.remove("banner__text_fadeInOut");
                console.log("change");
            },
        },
    };
    var mySwiper = new Swiper(".swiper-container", swiperOptions);

    console.log(window.innerWidth);

    function getMousePos(xRef, yRef) {
        let panelRect = scene.getBoundingClientRect();
        return {
            x:
                (Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left)) *
                scene.offsetWidth,
            y:
                (Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top)) *
                scene.offsetHeight,
        };
    }

    let scene = document.querySelector("#scene");
    const parallaxElems = [...document.querySelectorAll(".layer_forParallax")];
    const mouseTargetElem = document.querySelector(".layer_mouseTarget");

    if (window.innerWidth > 768) {
        parallaxElems.forEach((elem, ind) => {
            let maxMove = scene.offsetWidth / 60;
            let boxerCenterX = elem.offsetLeft + elem.offsetWidth / 2;
            let boxerCenterY = elem.offsetTop + elem.offsetHeight / 2;
            document.body.addEventListener("mousemove", function (e) {
                scene.classList.remove("scene_mouseIsNotMove");
                let mousePos = getMousePos(e.clientX, e.clientY),
                    distX = mousePos.x - boxerCenterX,
                    distY = mousePos.y - boxerCenterY;

                elem.style.transform =
                    "translate(" +
                    (-1 * distX) / (170 * (ind + 0.8)) +
                    "px," +
                    (-1 * distY) / (170 * (ind + 0.8)) +
                    "px)";
            });
        });
    }

    /// language translate

    let arrLang = {
        ru: {
            title1: "",
        },
    };
});
