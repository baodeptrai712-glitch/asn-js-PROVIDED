/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let numberOfDays = 0;

//
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let clearButton = document.getElementById("clear-button");
let fullDay = document.getElementById("full");
let halfDay = document.getElementById("half");

//Yes, some variables need to be initialized when the page loads,
//  such as setting the number of days to 0 and a default cost per day.

//They are updated when the user selects or changes days or day types,
//  and reset when the user clicks the clear button.

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let dayButtons = [monday,tuesday,wednesday,thursday,friday];
dayButtons.forEach(function(day){
    day.addEventListener("click", function() {
        day.classList.toggle("clicked");
        if (day.classList.contains("clicked")){
            numberOfDays++;
            
        } else{
            numberOfDays--;
        }
        calculatedCost();
    })
})

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let costLabel = document.getElementById("calculated-cost");
clearButton.addEventListener("click",function() {
    dayButtons.forEach(function(day){
        day.classList.remove("clicked");
    })
    numberOfDays = 0;
    costLabel.innerHTML = 0;
})

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener("click",function(){
    costPerDay = 20;
    halfDay.classList.toggle("clicked");
    fullDay.classList.remove("clicked");
    calculatedCost();
})

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener("click",function(){
    costPerDay = 35;
    fullDay.classList.toggle("clicked");
    halfDay.classList.remove("clicked");
    calculatedCost();
})

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculatedCost() {
    let CalculatedCost = numberOfDays * costPerDay
    costLabel.innerHTML = CalculatedCost;
}

