/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/

var user = ['Jun', 'James', 'Jay'];
var date = ['2024-10-30', '2024-10-29', '2024-09-30'];
var review = ["The movie is great!", "I really like the story of this movie.",
	"The movie is not very good, but not bad either."
];

var rate = [5, 4, 3];

/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
	  - Select the current review rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the review rating element's text to display the generated stars.
	  - Set the review rating element's attribute to current rating from the array. 

	  - Select the current review username element.
	  - Set its text to the username from the array and add a space to separate it from the date.

	  - Select the current review date element.
	  - Set its markup to the date from the array.

	  - Select the current review text element.
	  - Set its text to the review text from the array.
 
*/

var review_card = document.querySelectorAll('.review-card');

var i;

for(i = 0; i < review_card.length; i++){
	var cur_review = review_card[i];
	var temp = cur_review.querySelector('.review-rating');


	var t = "";
	for(var j = 0; j < 5; j++){
		if(j >= rate[i]){
			t += '☆';
		}
		else{
			t += '★';
		}
	}

	temp.textcontent += t;

	temp.setAttribute('data-rating', rate[i]);

	cur_review.querySelector('.review-username').firstChild.textContent = user[i];

	cur_review.querySelector('.review-date').textContent = date[i];

	cur_review.querySelector('.review-text').textContent = review[i];

}



// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;


    /* TO DO:

		- Loop through each card:
		  - Select the current review rating element.
		  - Get its rating attribute value.

		  - Check if the selected rating is 'All' or matches the card's rating.
		  	- If it matches, display the card.
		  	- Otherwise, hide the card

	*/

	for(i = 0; i < review_card.length; i++){
		var cur_review = review_card[i].querySelector('.review-rating');

		const temp = cur_review.getAttribute('data-rating');

		if(selected_rating === 'All' || selected_rating == temp){
			review_card[i].style.display = "block";
		}

		else{
			review_card[i].style.display = "none";
		}

	}
});



