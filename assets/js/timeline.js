let slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
    SlideShow((slidePosition = n));
}

function SlideShow(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-box");
    let circles = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slidePosition = 1;
    }
    if (n < 1) {
        slidePosition = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" dot--fill", "");
    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " dot--fill";
}



function name(params) {
    
}


//**********Animation Timeline*****************/

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for (i = 0; i < allRonds.length; i++) {

        if (allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {

            let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 })

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
                .setTween(tween)
                // .addIndicators()
                .addTo(controller)

        }

    }

})

//**********Animation Timeline*****************/

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

const $card = document.querySelector('.card');
let bounds;

function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 6 + center.y ** 6);

    $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
    ${center.y / 100},
    ${-center.x / 100},
    0,
      ${Math.log(distance) * 2}deg
    )`;


}

$card.addEventListener('mouseenter', () => {
    bounds = $card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    $card.style.transform = '';
    $card.style.background = '';
});




