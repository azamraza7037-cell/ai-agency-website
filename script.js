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

    console.log("✅ PART 2 Loaded");
    console.log("✅ PART 1 Loaded");

});
