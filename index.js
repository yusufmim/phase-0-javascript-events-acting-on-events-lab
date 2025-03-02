// Grab the dodger element
const dodger = document.getElementById('dodger');

// Function to move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if the dodger's right edge is within the game field
  if (left < 360) { // 400px (width of game field) - 40px (dodger width)
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener to listen for keydown events
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
