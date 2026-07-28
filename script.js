/* ==================================================
   AZAM AI - PROFESSIONAL SCRIPT
   PART 1 : MOBILE MENU + SAFE INITIALIZATION
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }

    console.log("✅ PART 1 Loaded Successfully");

});
    /* ==========================
       PREMIUM STICKY NAVBAR
    ========================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        const handleNavbar = () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        };

        handleNavbar();

        window.addEventListener("scroll", handleNavbar);

    }

    console.log("✅ PART 2 Loaded Successfully");
    /* ==========================
       SMOOTH SCROLL + ACTIVE NAVIGATION
    ========================== */

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

    const sections = document.querySelectorAll("section");

    const activateNav = () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }

        });

    };

    window.addEventListener("scroll", activateNav);

    activateNav();

    console.log("✅ PART 3 Loaded Successfully");
    /* ==========================
       SCROLL REVEAL ANIMATION
    ========================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .about-content, .contact-container"
    );

    const revealOnScroll = () => {

        const triggerPoint = window.innerHeight * 0.85;

        revealElements.forEach((element) => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {
                element.classList.add("show");
            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    console.log("✅ PART 4 Loaded Successfully");    /* ==========================
       PROFESSIONAL COUNTER
    ========================== */

    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {

        const target = Number(counter.dataset.target);
        let current = 0;

        const increment = Math.ceil(target / 100);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.textContent = target + "+";
                return;

            }

            counter.textContent = current + "+";

            requestAnimationFrame(updateCounter);

        };

        updateCounter();

    };

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });
    /* ==========================
       MAGNETIC BUTTON EFFECT
    ========================== */

    const magneticButtons = document.querySelectorAll(".btn");

    magneticButtons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translate(0, 0)";

        });

    });
    /* ==========================
       SCROLL PROGRESS BAR
    ========================== */

    const progressBar = document.querySelector(".scroll-progress");

    const updateProgressBar = () => {

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / pageHeight) * 100;

        if (progressBar) {

            progressBar.style.width = `${progress}%`;

        }

    };

    window.addEventListener("scroll", updateProgressBar);

    updateProgressBar();

    console.log("✅ PART 7 Loaded Successfully");
    console.log("✅ PART 6 Loaded Successfully");
    console.log("✅ PART 5 Loaded Successfully");
