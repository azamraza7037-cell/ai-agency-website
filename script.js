/*=========================================
    AZAM AI - Premium Script
=========================================*/

"use strict";

/*=========================================
    AOS INITIALIZATION
=========================================*/

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out"
});

/*=========================================
    PARTICLES JS
=========================================*/

particlesJS("particles-js", {

    particles: {

        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#00d4ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#00d4ff",

            opacity: 0.2,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {

                distance: 160,

                line_linked: {
                    opacity: 0.6
                }

            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});

/*=========================================
      HERO TYPING EFFECT
=========================================*/

const typingElement = document.getElementById("typing");

const words = [

    "AI Chatbots",

    "AI Automation",

    "Premium Websites",

    "Business Solutions",

    "AI Agents"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 90
    );

}

typingEffect();
/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*=========================================
      ACTIVE NAVIGATION LINK
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/*=========================================
      SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.createElement("div");

progressBar.id = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
     NAVBAR SHADOW ON SCROLL
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});
/*=========================================
        ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        const speed = 80;

        let count = 0;

        function updateCounter() {

            const increment = Math.ceil(target / speed);

            count += increment;

            if (count >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*=========================================
            FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*=========================================
          SCROLL REVEAL EFFECT
=========================================*/

const revealElements = document.querySelectorAll(

    ".service-card, .project-card, .about-card, .testimonial-card, .tech-card"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => {

    revealObserver.observe(el);

});


/*=========================================
         MAGNETIC BUTTON EFFECT
=========================================*/

const buttons = document.querySelectorAll(

".btn-primary, .btn-secondary"

);

buttons.forEach(button => {

button.addEventListener("mousemove", e => {

const rect = button.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const moveX = (x - rect.width / 2) / 8;

const moveY = (y - rect.height / 2) / 8;

button.style.transform =

`translate(${moveX}px, ${moveY}px)`;

});

button.addEventListener("mouseleave", () => {

button.style.transform = "translate(0,0)";

});

});
