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


console.log("✅ PART 5 Loaded");
    console.log("✅ PART 4 Loaded");
    console.log("✅ PART 3 Loaded");
    console.log("✅ PART 2 Loaded");
    console.log("✅ PART 1 Loaded");

});
