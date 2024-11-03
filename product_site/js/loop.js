// Get the filter dropdown element and the message element that display the message 
var catagory = document.querySelector('#filter');
var message = document.querySelector('#content-message');

// Add eventlistener to execute the following operation when the dropdown value is changed
catagory.addEventListener('change', () => {

    // Get all the news div elements and the value of the dropdown
    var doc = document.querySelectorAll('.news-content');
    var catagory_value = catagory.value;

    // Change message displayed with the updated value
    message.textContent = 'Catagory of contents: ' + catagory_value;

    // Check if there are any new div elements exist and dropdown value is not all
    if(doc.length >= 1 && catagory_value != 'All'){

        // Use a for loop to loop though all the news div elements and check if their catagory are the same as dropdown value
        // If not, change their display to none
        // I use a for loop because I know the length of the news div elements. And I am constanly calculating the length
        // of the news div elements to ensure that it is the most up to date. 
        var i;
        for(i = 0; i < doc.length; i++){
            var temp = doc[i].querySelector('h3').textContent;

            if(temp != catagory_value){
                doc[i].style.display = 'none';
            }

            else{
                doc[i].style.display = 'inline-block';
            }
        }
    }
    else{

        // Use for loop to return all new div elements to display as a block 
        // I also use a for loop because I know the amount of new div element I have on the page. 
        var i;
        for(i = 0; i < doc.length; i++){
            doc[i].style.display = 'inline-block'
        }
    }
})