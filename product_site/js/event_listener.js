// Get all the text fields elements
var feedback = document.querySelector('#feedback');
var email = document.querySelector('#email');
var email_valid = false

var username = document.querySelector('#name');
var name_valid = false;

var reason = document.querySelector('#reason');
var reason_valid = false;

var message = document.querySelector('#message');
var message_valid = false;

var submit_form = document.querySelector('#suggestion');

// Function to display updated message when user click into the email text field
function email_initial(){
    feedback.textContent = 'Please enter an email address.';
}

// Function to display updated message (based on different criteria) when user leave the email text field
function email_check(){
    let email_domain = email.value.split('.');

    // If value is empty
    if(email.value == ''){
        email.style.backgroundColor = 'red';
        feedback.textContent = 'You did not enter an email address, please try again.';
    }
    // If value does not have . or have more than 2 .
    else if(email_domain.length != 2 && email_domain.length != 3){
        email.style.backgroundColor = 'red';
        feedback.textContent = 'Invalid email address format, please try again.';
    }
    // If the email does not contain a valid domain
    else if(email_domain[1] != 'com' && email_domain[2] != 'edu' && email_domain[1] != 'org' && email_domain[1] != 'net' 
            && email_domain[1] != 'co')
    {
        email.style.backgroundColor = 'red';
        feedback.textContent = 'Invalid email domains, please try again.';
    }
    else{
        email.style.backgroundColor = 'white';
        feedback.textContent = '';
        email_valid = true;
    }
}

// Add event listener to the email text field on both clicking into and out of the text field element
email.addEventListener('focus', email_initial, false);

email.addEventListener('blur', function(){
    email_check();
});

// Function to display updated message when user click into the name text field
function name_initial(){
    feedback.textContent = 'Please enter your name.';
}

// Function to display updated message (based on different criteria) when user leave the name text field
function name_check(){
    // If value is empty
    if(username.value == ''){
        username.style.backgroundColor = 'red';
        feedback.textContent = 'You did not enter a name, please try again.';
    }
    else{
        name_valid = true;
        username.style.backgroundColor = 'white';
        feedback.textContent = '';
    }
}

// Add event listener to the name text field on both clicking into and out of the text field element
username.addEventListener('focus', name_initial, false);

username.addEventListener('blur', function(){
    name_check();
});

// Function to display updated message when user click into the reason text field
function reason_initial(){
    feedback.textContent = 'Please enter the reason for this message.';
}

// Function to display updated message (based on different criteria) when user leave the reason text field
function reason_check(){
    // If value is empty
    if(reason.value == ''){
        reason.style.backgroundColor = 'red';
        feedback.textContent = 'You did not enter a reason, please try again.';
    }
    else{
        reason_valid = true;
        reason.style.backgroundColor = 'white';
        feedback.textContent = '';
    }
}

// Add event listener to the reason text field on both clicking into and out of the text field element
reason.addEventListener('focus', reason_initial, false);

reason.addEventListener('blur', function(){
    reason_check();
});

// Function to display updated message when user click into the message text field
function message_initial(){
    feedback.textContent = 'Please enter the your message.';
}

// Function to display updated message (based on different criteria) when user leave the message text field
function message_check(){
    // If value is empty
    if(message.value == ''){
        message.style.backgroundColor = 'red';
        feedback.textContent = 'You did not enter a message, please try again.';
    }
    // If input value has length of greater than 300
    else if(message.value.length > 300){
        message.style.backgroundColor = 'red';
        feedback.textContent = 'Your message is more than 300 characters, please revise it and try again';
    }
    else{
        message_valid = true;
        message.style.backgroundColor = 'white';
        feedback.textContent = '';
    }
}

// Add event listener to the message text field on both clicking into and out of the text field element
message.addEventListener('focus', message_initial, false);

message.addEventListener('blur', function(){
    message_check();
});

// Function to check if all validation for the form is meet
function form_check(event){
    // If one or more part of the form is not correct
    if(email_valid != true || name_valid != true || message_valid != true || reason_valid != true){
        event.preventDefault();
        feedback.textContent = 'Submission failed, one or more of the require field of the form are incorrect. Please try again.';
    }
    else{
        feedback.textContent = '';
        alert('Hello ' + username.value + ' , thank you for your message, we will take a look at it as soon as we can!');
    }
}

// Add event listener to the form element, and add it to the submit event
submit_form.addEventListener('submit', function(event){
    form_check(event);
})














