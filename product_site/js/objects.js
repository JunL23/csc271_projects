// Create the news object
function news(title, content, catagory, image){
    this.title = title;
    this.content = content;
    this.catagory = catagory;
    this.image = image;
    this.likes = 0;
    this.dislikes = 0;

    // Method to increase the like of the post
    this.liked = function(){
        return ++this.likes;
    };

    // Method to increase the dislike of the post
    this.disliked = function() {
        return ++this.dislikes;
    };
}

// Create all the post objects for the news page of the website
var news1 = new news('Update version 1.0.2', 'Updates are here', 'Update', 'images/news.png');
var news2 = new news('Talk on the app\'s future development.', 'Lets\'s talk about our app\'s future development!', 'Event', 'images/news.png');
var news3 = new news('Confirm student status', 'All users now needs to show proof of current school enrollment', 'Notice', 'images/news.png');
var news4 = new news('App improvement', 'Monthly news on the improvement on the app.', 'News', 'images/news.png');
var news5 = new news('October app maintenance', 'On October we will start a maintenance of our server.', 'Maintenance', 'images/news.png');
var news6 = new news('App first version release', 'Release of our first version of the app.', 'Update', 'images/news.png');
var news7 = new news('New events!', 'New events!', 'Event', 'images/news.png');
var news8 = new news('New Updates!', 'Updates available', 'Update', 'images/news.png');

// Get the div element that contains the news
var new_news = document.querySelector('#main-content');

// Function to create new news
function add_news(object, title, content, catagory, image, likes, dislikes){

    // Create new div element and add the correct attributes
    var new_div = document.createElement('div');
    new_div.className = 'news-content';

    // Create new img element and add the correct attributes
    var new_image = document.createElement('img');
    new_image.src = image;
    new_image.alt = 'image of the news';
    new_image.className = 'news-image';

    // Create new paragraph element for the title of the news and add the correct attributes
    var content1 = document.createElement('p');
    content1.className = 'description';
    content1.textContent = title;

    // Create new paragraph element for the content of the news and add the correct attributes
    var content2 = document.createElement('p');
    content2.className = 'news_content';
    content2.textContent = content;

    // Create new paragraph element for the likes of the news and add the correct attributes
    var content3 = document.createElement('p');
    content3.className = 'like';
    content3.textContent = '👍' + likes; 

    // Add event listener to the thumbs up to call the function to increase likes of the news.
    content3.addEventListener('click', function(){
        var like_count = object.liked();
        content3.textContent = '👍' + like_count; 
    })

    // Create new paragraph element for dislike of the news and add the correct attributes
    var content4 = document.createElement('p');
    content4.className = 'dislike';
    content4.textContent = '👎' + dislikes; 

    // Add event listener to the thumbs down to call the function to increase dislikes of the news.
    content4.addEventListener('click', function(){
        var dislike_count = object.disliked();
        content4.textContent = '👎' + dislike_count; 
    })

    // Create new h3 element for the catagory of the news and add the correct attributes
    var news_type = document.createElement('h3');
    news_type.className = 'catagory';
    news_type.textContent = catagory;

    // Append all the elements into the div elements
    new_div.append(new_image, content1, content2, content3, content4, news_type);

    // Append the div element to the div element that contain all the news
    new_news.append(new_div);
}

// Create the news objects
add_news(news1, news1.title, news1.content, news1.catagory, news1.image, news1.likes, news1.dislikes);
add_news(news2, news2.title, news2.content, news2.catagory, news2.image, news2.likes, news2.dislikes);
add_news(news3, news3.title, news3.content, news3.catagory, news3.image, news3.likes, news3.dislikes);
add_news(news4, news4.title, news4.content, news4.catagory, news4.image, news4.likes, news4.dislikes);
add_news(news5, news5.title, news5.content, news5.catagory, news5.image, news5.likes, news5.dislikes);
add_news(news6, news6.title, news6.content, news6.catagory, news6.image, news6.likes, news6.dislikes);
add_news(news7, news7.title, news7.content, news7.catagory, news7.image, news7.likes, news7.dislikes);
add_news(news8, news8.title, news8.content, news8.catagory, news8.image, news8.likes, news8.dislikes);

