// Get the label elements from the document
const year = document.querySelector('#college_year');
const gpa = document.querySelector('#GPA');
const income = document.querySelector('#income');
const time = document.querySelector('#time');

// Get the radio button elements 
var year_yes = document.querySelector('#year-yes');
var time_yes = document.querySelector('#time-yes');
var year_no = document.querySelector('#year-no');
var time_no = document.querySelector('#time-no');
var gpa_yes = document.querySelector('#gpa-yes');
var gpa_no = document.querySelector('#gpa-no');
var income_yes = document.querySelector('#income-yes');
var income_no = document.querySelector('#income-no');

// Get the div element that contain the form and buttons
var message = document.querySelector('#comments');

// If a click happen in this div element, do the following
document.querySelector('#eligibility').addEventListener('click', () => {

    // Note: These conditionals are lined up in such way to ensure the funciontality of the calculator
    // If user is a college freshman and it is their first time using the app, they are eligible for discount
    if(year_yes.checked && time_yes.checked){
        message.textContent = 'You are eligible for a discount!';
        gpa.style.display = 'none';
        income.style.display = 'none';
        return;
    }

    // If not, they are not eligible, and the next prompt appear
    if(year_no.checked || time_no.checked){
        message.textContent = 'You are not eligible for a discount.';
        gpa.style.display = 'table';
    }

    // If their GPA is lower than 3.0, new prompt appear 
    if(gpa_no.checked){
        income.style.display = 'table';
        message.textContent = 'You are not eligible for a discount.';
    }
    
    // Else, they will be eligible
    if(gpa_yes.checked){
        message.textContent = 'You are eligible for a discount!';
        income.style.display = 'none';
    }

    // If they did not exceed the specific income, they are eligible
    else if(income_no.checked){
        message.textContent = 'You are eligible for a discount!';
    }

    // Else, they are not 
    else if(income_yes.checked){
        message.textContent = 'You are not eligible for a discount.';
    }
    else{
        // Do nothing
    }

})







