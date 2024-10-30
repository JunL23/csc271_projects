/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var favorite_movie = ["Dune", "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg", 3,
    "The movie is a sci-fi movie, the story is about a revenge and power of a person."
 ];

var title = document.querySelector(".movie-image");
title.src = favorite_movie[1];
title.alt = favorite_movie[0];

var moviename = document.querySelector(".movie-name");
moviename.textContent = favorite_movie[0];

var description = document.querySelector(".description");
description.textContent = favorite_movie[3];

var rate = document.querySelector('.rating');

for(var i = 0; i < 5; i++){
    if(i >= favorite_movie[2]){
        rate.textContent += "☆";
    }
    else{
        rate.textContent += "★";
    }

}
