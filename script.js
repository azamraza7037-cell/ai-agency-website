/* ==================================================
   AZAM AI - PROFESSIONAL SCRIPT V3
   PART 1 : SAFE INITIALIZATION
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* ==========================
       GLOBAL ELEMENTS
    ========================== */

    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");

    const sections = document.querySelectorAll("section[id]");
    const buttons = document.querySelectorAll(".btn");
    const counters = document.querySelectorAll(".counter");
    const images = document.querySelectorAll("img");

    let lastScroll = 0;
    let ticking = false;
    /* ==========================
       PART 2 : MOBILE MENU ENGINE
    ========================== */

    if (menuBtn && navLinks) {

        const toggleMenu = () => {
            navLinks.classList.toggle("active");
            menuBtn.classList.toggle("active");
        };

        const closeMenu = () => {
            navLinks.classList.remove("active");
            menuBtn.classList.remove("active");
        };

        menuBtn.addEventListener("click", toggleMenu);

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", (event) => {

            const isMenuClick = menuBtn.contains(event.target);
            const isNavClick = navLinks.contains(event.target);

            if (!isMenuClick && !isNavClick) {
                closeMenu();
            }

        });

    }
       /* ==========================
       PART 3 : PREMIUM NAVBAR ENGINE
    ========================== */

    const updateNavbar = () => {

        if (!navbar) return;

        // Sticky Background
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Hide / Show Navbar
        if (window.scrollY > 120) {

            if (window.scrollY > lastScroll) {
                navbar.classList.add("hide");
            } else {
                navbar.classList.remove("hide");
            }

        } else {

            navbar.classList.remove("hide");

        }

        lastScroll = window.scrollY;

    };

    updateNavbar();
    /* ==========================
       PART 4 : SMOOTH SCROLL ENGINE
    ========================== */

    const navItems = document.querySelectorAll(".nav-links a");

    if (navItems.length > 0) {

        navItems.forEach(link => {

            link.addEventListener("click", (e) => {

                const targetId = link.getAttribute("href");

                if (targetId && targetId.startsWith("#")) {

                    const targetSection = document.querySelector(targetId);

                    if (targetSection) {

                        e.preventDefault();

                        targetSection.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }

            });

        });

    }
/* ==========================
   PART 5 : ACTIVE NAVIGATION ENGINE
========================== */

const sectionsList = document.querySelectorAll("section[id]");
const navLinksList = document.querySelectorAll(".nav-links a");


const updateActiveNav = () => {

    let currentSection = "";

    sectionsList.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinksList.forEach(link => {

        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active");

        }

    });

};


updateActiveNav();

/* ==========================
   PART 6 : SCROLL REVEAL ENGINE
========================== */

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .service-card, .project-card, .about-content, .contact-box"
);


const revealOnScroll = () => {

    const triggerPoint = window.innerHeight - 100;


    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < triggerPoint){

            element.classList.add("show");

        }

    });

};


revealOnScroll();

/* ==========================
   PART 7 : COUNTER ANIMATION ENGINE
========================== */

const startCounters = () => {

    counters.forEach(counter => {

        counter.innerText = "0";

        const target = Number(
            counter.getAttribute("data-target")
        );


        const updateCounter = () => {

            const current = Number(counter.innerText);


            const increment = Math.ceil(
                target / 100
            );


            if(current < target){

                counter.innerText = current + increment;

                setTimeout(updateCounter, 30);

            } 
            else {

                counter.innerText = target;

            }

        };


        updateCounter();

    });

};


let counterStarted = false;


const checkCounters = () => {

    if(!counters.length) return;


    const counterSection = document.querySelector(".counter-section");


    if(!counterSection) return;


    const sectionTop = counterSection.getBoundingClientRect().top;


    if(
        sectionTop < window.innerHeight - 100 &&
        !counterStarted
    ){

        startCounters();

        counterStarted = true;

    }

};


checkCounters();

/* ==========================
   PART 8 : MASTER SCROLL CONTROLLER
========================== */


window.addEventListener("scroll", () => {

    if(!ticking){

        window.requestAnimationFrame(() => {


            updateNavbar();

            updateActiveNav();

            revealOnScroll();

            checkCounters();


            ticking = false;


        });


        ticking = true;

    }

});

/* ==========================
   PART 9 : EMAILJS CONTACT ENGINE
========================== */


const contactForm = document.querySelector("#contact-form");


if(contactForm){


    contactForm.addEventListener("submit", function(e){


        e.preventDefault();


        emailjs.sendForm(

            "YOUR_SERVICE_ID",

            "YOUR_TEMPLATE_ID",

            this

        )

        .then(() => {


            alert("✅ Message sent successfully!");

            contactForm.reset();


        })

        .catch((error) => {


            console.log(
                "EmailJS Error:",
                error
            );


            alert(
                "❌ Message failed. Please try again."
            );


        });


    });


}

/* ==========================
   PART 10 : PAGE LOAD ENGINE
========================== */


window.addEventListener("load", () => {


    document.body.classList.add("loaded");


    console.log("✅ PAGE LOADED");


});/* ==========================
   PART 11 : MOBILE PERFORMANCE + ERROR PROTECTION
========================== */


window.addEventListener("error", (error) => {


    console.warn(
        "⚠️ JS Warning:",
        error.message
    );


});


const optimizeMobile = () => {


    const isMobile = window.innerWidth <= 768;


    if(isMobile){


        document.body.classList.add(
            "mobile-device"
        );


        console.log(
            "📱 Mobile Optimization Enabled"
        );


    }


};


optimizeMobile();


window.addEventListener(
    "resize",
    optimizeMobile
);
/* ==========================
   PART 12 : ANALYTICS + PRODUCTION TRACKING
========================== */


const trackEvent = (eventName, data = {}) => {


    console.log(
        "📊 Event:",
        eventName,
        data
    );


};


const buttonsTrack = document.querySelectorAll(
    ".btn"
);


buttonsTrack.forEach(button => {


    button.addEventListener(
        "click",
        () => {


            trackEvent(
                "Button Click",
                {
                    text: button.innerText
                }
            );


        }
    );


});


const contactTrack = document.querySelector(
    "#contact-form"
);


if(contactTrack){


    contactTrack.addEventListener(
        "submit",
        () => {


            trackEvent(
                "Contact Form Submit"
            );


        }
    );


}
/* ==========================
   PART 16 : DARK MODE ENGINE
========================== */

const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.toggle(
        "dark-theme",
        savedTheme === "dark"
    );
} else if (
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.body.classList.add("dark-theme");
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-theme")
                ? "dark"
                : "light"
        );

    });

}

console.log("✅ PART 16 Loaded");
/* ==========================
   PART 14 : BUTTON RIPPLE
========================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.className = "ripple";

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

    });

});

console.log("✅ PART 14 Loaded");
console.log(
    "✅ PART 12 Loaded"
);

console.log(
    "✅ PART 11 Loaded"
);
console.log("✅ PART 9 Loaded");
console.log("✅ PART 8 Loaded");
console.log("✅ PART 7 Loaded");
console.log("✅ PART 6 Loaded");
console.log("✅ PART 5 Loaded");
    console.log("✅ PART 4 Loaded");
    console.log("✅ PART 3 Loaded");
    console.log("✅ PART 2 Loaded");
    console.log("✅ PART 1 Loaded");

});
