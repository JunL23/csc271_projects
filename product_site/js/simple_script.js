// The name of the user
var user_name; 

// The amount of class that user wants to monitor
var classnum;

// Price of each course monitor
const price = 0.30;

// The fee that apply to first time users
const first_time_fee = 3.0;

// boolean variable to see if user is using the service for the first time
var first_time_user;

// The total cost
var total;

// Getting the elements in the web page
var submit_button = document.getElementById("calculation-submit");
var input = document.getElementsByClassName("calculation");
var message = document.getElementsByTagName("p");
var calculation_message = document.querySelectorAll(".calculation-message");

// When the submit button of the claculator is clicked, store the value of the textfields into the variables, and display a message telling the user the cost
submit_button.onclick = () => {
    user_name = input[0].value;
    classnum = Number(input[1].value);
    
    if(input[2].value.toLowerCase() == "yes"){
        first_time_user = true;
    }
    else{
        first_time_user = false;
    }
    
    total = (classnum * price).toFixed(2);

    
    if(first_time_user == true){
        total += first_time_fee;
    }
    
    calculation_message[0].textContent = "Hello " + user_name + ".";
    calculation_message[1].innerHTML = "Based on the information you provided, the total cost will be " + "<strong>" + "$" + total + "</strong>" + ".";
}










