// The name of the user
var user_name; 

// The amount of class that user wants to monitor
var classnum;

// Price of each course monitor
const price = 0.30;

// The fee that apply to first time users
const first_time_fee = 3.0;

// The total cost
var total;

var count = 0;

// Getting the elements in the web page
var submit_button = document.getElementById("calculation-submit");
var input = document.getElementsByClassName("calculation");
var message = document.getElementsByTagName("p");
var calculation_message = document.querySelectorAll(".calculation-message");
var count_button = document.querySelector("#submit");
var count_message = document.querySelector("#count");

// Function to check if use is using the app for the first time
function First_time_user(){
    var first_time_user;
    if(input[2].value.toLowerCase() == "yes"){
        first_time_user = true;
    }
    else{
        first_time_user = false;
    }

    return first_time_user
}

// Function to display the message based on user input
function display_message(username, class_num, user_app_experience){
    if(user_app_experience == true){
        total = ((class_num * price) + first_time_fee).toFixed(2);
    }
    else{
        total = (class_num * price).toFixed(2);
    }
    
    calculation_message[0].textContent = "Hello " + username + ".";
    calculation_message[1].innerHTML = "Based on the information you provided, the total cost will be " + "<strong>" + "$" + total + "</strong>" + ".";
}

// Display message showing how many times user have submitted a suggestion
function count_number(){
    count ++;
    count_message.textContent = "Thank you for your suggestions, you have submitted " + count + " suggestions.";
}


// When the submit button of the claculator is clicked, store the value of the textfields into the variables, and display a message telling the user the cost
submit_button.onclick = () => {
    user_name = input[0].value;
    classnum = Number(input[1].value);

    // Call function to check if user has used the app before
    var user_app_experience = First_time_user();

    // Call the function to display the message based on user input
    display_message(user_name, classnum, user_app_experience);
}

// When user clicks the submit button on the help page, call the count_number function
count_button.onclick = () => {
    count_number();
}









