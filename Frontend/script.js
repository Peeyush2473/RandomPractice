const words = ["a random practice", "a header", "some animated text"];
let index = 0;  // To track the current word
let currentWord = ""; // To build the current word
let isDeleting = false; // To track if we are deleting text
let textIndex = 0; // To track the current position in the word

const animateElement = document.getElementById("animate");

function type() {
    // Handle deleting
    if (isDeleting) {
        currentWord = currentWord.slice(0, -1);
    } 
    // Handle typing
    else {
        currentWord = words[index].slice(0, textIndex + 1);
    }

    // Update the content of the element
    animateElement.textContent = currentWord;

    // If we are typing and the word is not fully typed, continue typing
    if (!isDeleting && textIndex < words[index].length) {
        textIndex++;
    } 
    // If we are deleting and the word is not fully deleted, continue deleting
    else if (isDeleting && textIndex > 0) {
        textIndex--;
    }

    // If we just finished typing, wait for a second before starting to delete
    if (!isDeleting && textIndex === words[index].length) {
        setTimeout(() => {
            isDeleting = true; // Start deleting
        }, 1000); // Wait 1 second before starting to delete
    } 
    // If the word is fully deleted, go to the next word
    else if (isDeleting && textIndex === 0) {
        setTimeout(() => {
            isDeleting = false; // Start typing the next word
            index = (index + 1) % words.length; // Move to the next word
            // Reset textIndex before starting to type the next word
            textIndex = 0;
        }, 500); // Wait 0.5 second before typing the next word
    }

    // Call the type function recursively with a delay
    setTimeout(type, isDeleting ? 100 : 150); // Slow down the deleting process
}

// Start the typing effect when the page loads
window.addEventListener('load', () => {
    type(); // Start the animation
});
