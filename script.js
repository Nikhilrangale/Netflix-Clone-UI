// Task 3: Basic DOM Manipulation (Invisible Version)
// Demonstrates basic DOM manipulation using vanilla JavaScript

document.addEventListener("DOMContentLoaded", () => {
  console.log("Basic DOM Manipulation (invisible) script loaded successfully.");

  // Create invisible container
  const counterContainer = document.createElement("div");
  counterContainer.style.display = "none"; // hides the container

  // Create counter elements
  const countDisplay = document.createElement("h2");
  const incrementBtn = document.createElement("button");
  const decrementBtn = document.createElement("button");
  const resetBtn = document.createElement("button");

  // Initialize counter
  let count = 0;
  countDisplay.textContent = `Count: ${count}`;
  incrementBtn.textContent = "+";
  decrementBtn.textContent = "-";
  resetBtn.textContent = "Reset";

  // Append elements to container
  counterContainer.append(countDisplay, incrementBtn, decrementBtn, resetBtn);
  document.body.appendChild(counterContainer);

  // Event listeners (for formal functionality)
  incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = `Count: ${count}`;
  });

  decrementBtn.addEventListener("click", () => {
    if (count > 0) count--;
    countDisplay.textContent = `Count: ${count}`;
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = `Count: ${count}`;
  });
});

