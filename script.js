// AI Agency Website JavaScript
const words = [
    "AI Chatbots",
    "AI Automation",
    "Premium Websites",
    "Business Growth",
    "Custom AI Solutions"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");
if (!typingElement) {
    console.log("Typing element not found");
} else {
    console.log("Typing element found");
}

function typeEffect(){

    currentWord = words[wordIndex];

    if(!isDeleting){
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }else{
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if(!isDeleting && charIndex === currentWord.length + 1){
        speed = 1500;
        isDeleting = true;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#3b82f6"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#3b82f6",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.8
        }
      }
    }
  },
  retina_detect: true
});
// Initialize AOS Animation
AOS.init({
    duration: 1000,
    once: true
});
/* ===========================
   ANIMATED COUNTER
=========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }

    };

    updateCounter();

});
/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
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
/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
// EmailJS Contact Form

const contactForm = document.getElementById("contact-form");
const submitButton = contactForm.querySelector("button");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
status.textContent = ""; 
submitButton.disabled = true;
submitButton.textContent = "Sending...";
    emailjs.sendForm(
        "service_c07tlhq",
        "template_4fb3jlh",
        this
    )
    .then(() => {
        const status = document.getElementById("form-status");
status.textContent = "✅ Message sent successfully!";
status.style.color = "#22c55e";
        setTimeout(() => {
    status.textContent = "";
}, 5000);
        contactForm.reset();
        submitButton.disabled = false;
submitButton.textContent = "Send Message";
    })
    .catch((error) => {
        const status = document.getElementById("form-status");
status.textContent = "❌ Failed to send message. Please try again.";
status.style.color = "#ef4444";
        setTimeout(() => {
    status.textContent = "";
}, 5000);
        console.error(error);
        submitButton.disabled = false;
submitButton.textContent = "Send Message";
    });
});
// AI Chatbot

// AI Chatbot

const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const userMessage = document.getElementById("user-message");
const chatMessages = document.getElementById("chat-messages");


if(chatToggle && chatBox){

    chatToggle.addEventListener("click", () => {

        if (chatBox.style.display === "block") {
            chatBox.style.display = "none";
        } else {
            chatBox.style.display = "block";
        }

    });

}


// Send message

// Send message function

function sendMessage(){

    let message = userMessage.value.trim();

    if(message === ""){
        return;
    }
const visitorName = document.getElementById("visitor-name").value;
const visitorEmail = document.getElementById("visitor-email").value;
    chatMessages.innerHTML += `
    <p><b>You:</b> ${message}</p>
    `;

    userMessage.value = "";

    chatMessages.innerHTML += `
    <p id="typing-ai"><b>AI:</b> Typing...</p>
    `;
// Send chatbot lead to email

emailjs.send(
    "service_c07tlhq",
    "template_4fb3jlh",
    {
        name: visitorName,
        email: visitorEmail,
        message: message
    }
)
.then(() => {
    console.log("Chat lead sent");
})
.catch((error) => {
    console.log(error);
});
    chatMessages.scrollTop = chatMessages.scrollHeight;


    setTimeout(() => {

        const typing = document.getElementById("typing-ai");

        if(typing){
            typing.remove();
        }

        let reply = getAIReply(message);

        chatMessages.innerHTML += `
        <p><b>AI:</b> ${reply}</p>
        `;

        chatMessages.scrollTop = chatMessages.scrollHeight;

    },1000);

}


// Send button click

sendBtn.addEventListener("click", sendMessage);


// Enter key send

userMessage.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        sendMessage();
    }

});

// Basic AI Replies

function getAIReply(message){

    message = message.toLowerCase();


    if(message.includes("service")){
        return "We provide AI automation, website development, chatbot solutions and digital services 🚀";
    }

    else if(message.includes("price") || message.includes("cost")){
        return "Our pricing depends on your project requirements. Contact us for a custom quote.";
    }

    else if(message.includes("website")){
        return "We create modern, responsive and AI-powered websites for businesses.";
    }

    else if(message.includes("hello") || message.includes("hi")){
        return "Hello 👋 How can I help you today?";
    }

    else{
        return "Thanks for your message! Our AI team will help you with the best solution 🤖";
    }

}
