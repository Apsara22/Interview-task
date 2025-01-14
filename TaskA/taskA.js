// script.js
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

// Function to update card positions
function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove('active', 'next', 'prev');

    if (index === currentIndex) {
      card.classList.add('active');
    } else if (index === (currentIndex + 1) % cards.length) {
      card.classList.add('next');
    } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
      card.classList.add('prev');
    }
  });
}

// Function to move to the next card
function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCards();
}

// Initialize the slider
updateCards();

// Automate the slider
setInterval(nextCard, 0.5); // Changes card every 1 seconds
