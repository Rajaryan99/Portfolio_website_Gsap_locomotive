// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });



function mouseFollower() {
    window.addEventListener("mousemove", function (e) {
        let bubble = document.querySelector('.bubble');
        bubble.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    });
}

mouseFollower();

document.querySelector('.viewbtn').addEventListener('click', () => {
    document.querySelector('#project').scrollIntoView({
        behavior: "smooth"
    })
});
let tl = gsap.timeline();

gsap.from('.port', {
    opacity: 0,
    y: 40,
    duration: 0.5,
    delay: .5
})

gsap.from('.navLinks a', {
    opacity: 0,
    y: 40,
    duration: 0.5,
    delay: .5,
    stagger: .3,
    ease: 'easeInOut'

})


tl.from('.hero-details h1', {
    opacity: 0,
    y: 100,
    duration: .3,
    delay: 1,
    ease: 'easeInOut'
})

tl.from('.hero-details h2', {
    opacity: 0,
    y: 100,
    duration: .3,
    ease: 'easeInOut'

})

tl.from('.hero-details p', {
    opacity: 0,
    y: 100,
    duration: .3,
    ease: 'easeInOut'

})

tl.from('.viewwork', {
    opacity: 0,
    y: 100,
    duration: .3,

})


tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.about .h1text h1 ',
        scroller: 'body',
        start: 'top 80%',
        end: "top 30%",
        toggleActions: 'play none none reverse', // controls when it plays/reverses
        // time for animation // start earlier so you see the animation
        scrub: 2, // uncomment if you want scroll-linked animation

    }
});

tl.from('.about .h1text h1', {
    opacity: 0,
    x: -400,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.divimg', {
    scrollTrigger: {
        trigger: '.divimg',
        start: 'top 80%',
        end: "top 50%",
        scroller: 'body',
        toggleActions: 'play none none reverse', // controls when it plays/reverses
        // time for animation // start earlier so you see the animation
        scrub: 2,
    },
    opacity: 0,
    x: -400,
    duration: 0.8,
    ease: 'power3.out'
});

tl.from('.techStack', {
    opacity: 0,
    x: 70,
})


tl.from('.aboutText', {
    opacity: 0,
    x: 400,
})




tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects-section .proHeading',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
        scrub: 2,

    }
})


tl.from('.projects-section .proHeading span', {
    opacity: 0,
    y: -30,
    duration: 0.5,
    delay: 0.5


})


tl.from('.projects-section .proHeading h1', {
    opacity: 0,
    y: 30,
    duration: 0.5,


})

tl.from('.projects-section .proHeading p', {
    opacity: 0,
    y: 30,
    duration: 0.5,


})

// tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.showProjects projects',
//         scroller: 'body',
//         start: 'top 40%',
//         // end: 'top 30%',
//         // toggleActions: 'play none none reverse',
//     }
// })


// tl.form('.showProjects', {
//     opacity: 0,
//     y: 80,
//     duration: 0.5
// })


tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contack-section .contact_heading',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
        scrub: 0.5,

    }
})

tl.from('.contack-section', {
    opacity: 0,
    y: -100,
    duration: 1,
    // delay: 0.5


})


tl.from('.contact-links', {
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger: {
        each: 0.1,
        from: "start",
        grid: "auto"
    }
})

