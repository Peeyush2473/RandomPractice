const words = ["a random practice", "a header", "an animated text"];

let index = 0;

const animateElement = document.getElementById("animate");

function changeText() {
    animateElement.textContent = words[index];
    index = (index + 1) % words.length; // Loop back to the start when we reach the end
}

setInterval(changeText, 3000);