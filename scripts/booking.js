// Create variables
let costPerDay = 35; // Set the initial cost per day to $35
let numberOfDaysSelected = 0; // Set the initial number of days selected to 0
let clickedDay = null; // Store the currently clicked day element
let clickedRate = null; // Store the currently clicked rate element

// Get the relevant elements from the DOM
const dayButtons = document.querySelectorAll('.day-button'); // Assuming day buttons have a class "day-button"
const clearButton = document.getElementById('clear-button'); // Assuming clear button has an id "clear-button"
const halfDayButton = document.getElementById('half-day-button'); // Assuming half-day button has an id "half-day-button"
const fullDayButton = document.getElementById('full-day-button'); // Assuming full-day button has an id "full-day-button"
const calculatedCostElement = document.getElementById('calculated-cost'); // Assuming calculated cost element has an id "calculated-cost"

// Add event listeners to day buttons
dayButtons.forEach(dayButton => {
  dayButton.addEventListener('click', () => {
    // Check if the clicked day button is already selected
    if (!dayButton.classList.contains('clicked')) {
      // Remove clicked class from previously selected day button, if any
      if (clickedDay) {
        clickedDay.classList.remove('clicked');
      }
      // Update the clicked day element and add clicked class to the currently clicked day button
      clickedDay = dayButton;
      clickedDay.classList.add('clicked');
      // Update the numberOfDaysSelected variable
      numberOfDaysSelected = document.querySelectorAll('.day-button.clicked').length;
      // Call a function to recalculate the total cost
      recalculateCost();
    }
  });
});

// Add event listener to clear button
clearButton.addEventListener('click', () => {
  // Remove clicked class from all day buttons
  dayButtons.forEach(dayButton => {
    dayButton.classList.remove('clicked');
  });
  // Reset relevant variables
  numberOfDaysSelected = 0;
  clickedDay = null;
  // Call a function to recalculate the total cost
  recalculateCost();
});

// Add event listener to half-day button
halfDayButton.addEventListener('click', () => {
  // Update the cost per day and clicked rate element
  costPerDay = 20;
  clickedRate = halfDayButton;
  // Add clicked class to half-day button and remove it from full-day button
  halfDayButton.classList.add('clicked');
  fullDayButton.classList.remove('clicked');
  // Call a function to recalculate the total cost
  recalculateCost();
});

// Add event listener to full-day button
fullDayButton.addEventListener('click', () => {
  // Update the cost per day and clicked rate element
  costPerDay = 35;
  clickedRate = fullDayButton;
  // Add clicked class to full-day button and remove it from half-day button
  fullDayButton.classList.add('clicked');
  halfDayButton.classList.remove('clicked');
  // Call a function to recalculate the total cost
  recalculateCost();
});

// Function to recalculate the total cost
function recalculateCost() {
  const totalCost = costPerDay * numberOfDaysSelected;
  calculatedCostElement.innerHTML = `$${totalCost}`;
}
