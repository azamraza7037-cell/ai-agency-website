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
