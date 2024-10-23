var sign = "Leo";
var birth_month = "July";
var birth_day = 25;
var lucky_number = 7.0;
var description = "Leos are known for their natural leadership abilities, creativity, self confidence, dominance and a strong presence that is hard to resist.";
var believe = false;

var my_sign = document.getElementById("sign");
my_sign.innerHTML = sign;

var birthday = document.getElementsByClassName("birthday");
birthday[0].innerHTML += birth_month + " " + birth_day + "th";

var luckynum = document.getElementsByClassName("luckyNum");
luckynum[0].innerHTML +=  lucky_number;

var tag = document.getElementsByTagName('p');
tag[0].innerHTML = description;
tag[1].innerHTML += "<strong>" + believe + "</strong>"; 

var leo_mood = 3;
var aries_mood = 3.7;
var sagittarius_mood = 3.2;

var average = ((leo_mood + aries_mood + sagittarius_mood) / 3).toFixed(2);

tag[2].innerHTML = "Today's mood rating for Leo: " + leo_mood + 
" out of 5." + " The average mood rating of Leo, Aries, and Sagittarius is: " 
+ average + ".";

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var mysign = signs[7];

var Aries_sign = signs[3];

var Sagittarius_sign = signs[11];

tag[3].innerHTML = "My zodiac sign is: " + mysign + ".";
tag[4].innerHTML = "Riley's zodiac sign is: " + Aries_sign + ".";
tag[5].innerHTML = "Ethan's zodiac sign is: " + Sagittarius_sign + ".";

var description_list = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices.",
];

var my_description = description_list[7];
var Aries_description = description_list[2];
var Sagittarius_description = description_list[11];

tag[3].innerHTML += "<br>" + "Leo Horoscope: " + my_description + ".";
tag[4].innerHTML += "<br>" + "Aries Horoscope: " + Aries_description + ".";
tag[5].innerHTML += "<br>" + "Sagittarius Horoscope: " + Sagittarius_description + ".";
