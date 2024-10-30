/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

var movies = ["Dune", "Home alone", "Dark knight"];
var links = ["https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"
	, "https://cdn.wikimg.net/en/strategywiki/images/9/95/Home_Alone_snes_manual.jpg",
	"https://th.bing.com/th/id/R.25ff8011460c45c1915622098ef31414?rik=l9Xi%2fCHM%2baB7fQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fen%2f1%2f1c%2fThe_Dark_Knight_(2008_film).jpg&ehk=iubdcJ2MUAHOhWSUsi65QSdOqO30TPuZ3ofEMSik37I%3d&risl=&pid=ImgRaw&r=0"
];
var html_link = ["dune.html", "#", "#"];

var rating = [3, 4, 5];






/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/

var movie_card = document.querySelectorAll(".movie-card");

for(var i = 0; i < movie_card.length; i++){
	var cards = movie_card[i];

	cards.querySelector('.movie-image').src = links[i];
	cards.querySelector('.movie-image').alt = movies[i];

	cards.querySelector('.movie-link').src = html_link[i];
	cards.querySelector('.movie-link').textContent = movies[i];

	var rate = cards.querySelector('div.rating');
	var temp = "";

	for(var j = 0; j < 5; j++){
		if(j >= rating[i]){
			temp += "☆";
		}
		else{
			temp += "★";
		}
	}

	rate.textContent = temp;
}