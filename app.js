// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });



function mouseFollower() {
    window.addEventListener("mousemove", function (e) {
        let bubble = document.querySelector('.bubble');
        bubble.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
}

mouseFollower();