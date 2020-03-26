//create initial vars needed

var questioncount = 0;
var answerArray = new Array(10)

//Choice Class to hold answers and Value for which roomie you are
function Choice(text,emmy,holly,lauren,maddie){
    this.text = text;
    this.emmyValue = emmy;
    this.hollyValue = holly;
    this.laurenValue = lauren;
    this.maddieValue = maddie;
}

//global variable for which roommate you end up being
var howemmy = 0;
var howholly = 0;
var howlauren = 0;
var howmaddie = 0;


//Array to hold questions
var questionArray = new Array(
    "You walk into Blarney's and see the pole near the front of the room, what is your go to action?", 
    "Which of these is the most ideal way to spend your afternoon?",
    "You get to choose where to eat out with the pals tonight - what do you choose?",
    "What kind of clothes make you feel truly in your element?",
    "Your friend Dan goes up to you and tells you about a truly unfortunate but funny story that happened to him. What is your first response?",
    "How do you pack for a vacation?",
    "Which one of these shows sounds best to sit down and watch right now?",
    "Shawn goes up to you and starts talking about some real nerdy shit. What do you do??",
    "Hurry! You need to drink something to get ready for a pregame real fast!",
    "What is the first type of vacation you'll go on post-covid?"
)

//Create 4 Arrays to cycle through choices consisting of Choice objs,
//if there were more, look into moving into external DB
var choice1Array = new Array();
choice1Array.push(new Choice("I'm going to go get a drink and then watch people dance there LOL",3,3,0,2));
choice1Array.push(new Choice("Doing some cycle or yoga at Lifetime!",0,2,6,1));
choice1Array.push(new Choice("Let's stay home and make something simple like pasta!",4,2,1,1));
choice1Array.push(new Choice("Let's get a crop top or some beach wear in here!",2,3,3,5));
choice1Array.push(new Choice("You know, I don't really understand what Dan says half the time...",1,2,4,2));
choice1Array.push(new Choice("Lay everything out and see how my outfits look",3,2,4,1));
choice1Array.push(new Choice("The Office",2,3,1,1));
choice1Array.push(new Choice("Tell him he's a nerd! omg what a sweaty boy",4,2,3,1));
choice1Array.push(new Choice("A nice mixed drink",2,4,4,3));
choice1Array.push(new Choice("I'm going straight to the beach!",1,2,2,5));

var choice2Array = new Array();
choice2Array.push(new Choice("IT'S TIME TO GO DANCE ON THAT POLE ALL NIGHT",0,1,5,2));
choice2Array.push(new Choice("Hanging out with my sisters (sorority or biological)!",5,0,0,5));
choice2Array.push(new Choice("I heard of this cool new place with really different food we could go to!",0,3,5,3));
choice2Array.push(new Choice("Workout clothes - never know when I may need to work out!",3,3,5,1));
choice2Array.push(new Choice("BOI SMH I'm sorry dang :/ ",5,2,0,2));
choice2Array.push(new Choice("I already have spreadsheets with all my outfits in place for my trip",4,2,3,1));
choice2Array.push(new Choice("New Girl",1,1,3,3));
choice2Array.push(new Choice("Try to understand what he's saying... it may make sense?",2,4,3,1));
choice2Array.push(new Choice("A nice cold beer?",1,2,2,1));
choice2Array.push(new Choice("I have a few trips planned with my family that are really fun!",4,2,3,3));

var choice3Array = new Array();
choice3Array.push(new Choice("Go near there and try not to get to close to the gross people at Blarn's",3,4,1,2));
choice3Array.push(new Choice("Try to see my boyfriend unless he is already busy",4,0,4,0));
choice3Array.push(new Choice("There are two must go to places for Japanese or Italian",1,2,4,2));
choice3Array.push(new Choice("Something simple, but cute! I'm a versatile person",4,3,2,2));
choice3Array.push(new Choice("Laugh cause it's funny",2,2,1,3));
choice3Array.push(new Choice("I usually pack at the last minute and look great anyways",0,2,1,4));
choice3Array.push(new Choice("One Tree Hill",3,1,2,2));
choice3Array.push(new Choice("Oh maybe I can just walk away and he won't notice...",2,2,2,4));
choice3Array.push(new Choice("Wine of any kind!",0,4,1,4));
choice3Array.push(new Choice("There are some cool cities with nice hikes and good food!",2,3,4,3));

var choice4Array = new Array();
choice4Array.push(new Choice("LMAO get to Blarn's? I passed out before I even got in!",2,2,3,3));
choice4Array.push(new Choice("See my family including any cute cousins or nephews I have!",5,2,3,4));
choice4Array.push(new Choice("I want to go have something that looks really nice on an Insta Story :)",2,2,2,4));
choice4Array.push(new Choice("Something bougie. I am a classy person after all",2,4,2,2));
choice4Array.push(new Choice("I know just the right thing to say! That happened to me before too!",2,1,3,1));
choice4Array.push(new Choice("I have to pack multiple times because I need to get it right!",2,4,2,1));
choice4Array.push(new Choice("Blacklist",1,2,3,1));
choice4Array.push(new Choice("Find someone who CAN talk to him about this type of thing cause I can't",2,2,4,2));
choice4Array.push(new Choice("Let's get some cheap vodka and MiO in here - does the job!",5,2,4,2));
choice4Array.push(new Choice("There are a lot of cool foreign countries that I haven't been to yet!",2,5,1,4));

//add eventlisteners for the 4 choices
function addListeners(){
document.getElementById("choice1").addEventListener("click",choice1Select);
document.getElementById("choice2").addEventListener("click",choice2Select);
document.getElementById("choice3").addEventListener("click",choice3Select);
document.getElementById("choice4").addEventListener("click",choice4Select);
}

//4 functions to keep track of which choice was selected
function choice1Select(){
    howemmy += choice1Array[questioncount].emmyValue
    howholly += choice1Array[questioncount].hollyValue
    howlauren += choice1Array[questioncount].laurenValue
    howmaddie += choice1Array[questioncount].maddieValue
    roomieQuiz()
}

function choice2Select(){
    howemmy += choice2Array[questioncount].emmyValue
    howholly += choice2Array[questioncount].hollyValue
    howlauren += choice2Array[questioncount].laurenValue
    howmaddie += choice2Array[questioncount].maddieValue
    roomieQuiz()
}

function choice3Select(){
    howemmy += choice3Array[questioncount].emmyValue
    howholly += choice3Array[questioncount].hollyValue
    howlauren += choice3Array[questioncount].laurenValue
    howmaddie += choice3Array[questioncount].maddieValue
    roomieQuiz()
}

function choice4Select(){
    howemmy += choice4Array[questioncount].emmyValue
    howholly += choice4Array[questioncount].hollyValue
    howlauren += choice4Array[questioncount].laurenValue
    howmaddie += choice4Array[questioncount].maddieValue
    roomieQuiz()
}

//
function roomieQuiz(){
    questioncount += 1; 
    if (questioncount < 10) {
    document.getElementById("question").innerHTML = questionArray[questioncount];
        
    document.getElementById("choice1").innerHTML = choice1Array[questioncount].text;
    document.getElementById("choice2").innerHTML = choice2Array[questioncount].text;
    document.getElementById("choice3").innerHTML = choice3Array[questioncount].text;
    document.getElementById("choice4").innerHTML = choice4Array[questioncount].text;
    }
    
    //we are done with the quiz
    else{
        calculateResults()
    }
}

function calculateResults(){
    //make everything hidden
    document.getElementById("question").style.visibility = 'hidden';
    document.getElementById("choice1").style.visibility = 'hidden';
    document.getElementById("choice2").style.visibility = 'hidden';
    document.getElementById("choice3").style.visibility = 'hidden';
    document.getElementById("choice4").style.visibility = 'hidden';
    
    document.getElementById("answer").style.visibility = 'visible';
    
    //you are Emmy!
    if (howemmy > howholly && howemmy > howlauren && howemmy > howmaddie){
        document.getElementById("whoareyou").innerHTML = "You are an Emmy!"
        document.getElementById("whoareyoudescription").innerHTML = "You are fiercely loyal and have relationships with friends and family that you know you can count on. Although it may seem a bit basic, you are definitely midwestern so most people tend to really like you when they first meet you. A picky boy who isn't really that picky anymore because you are still always growing!"
    }
    //you are Holly!
    else if (howholly > howemmy && howholly> howlauren && howholly > howmaddie){
        document.getElementById("whoareyou").innerHTML = "You are a Holly!"
        document.getElementById("whoareyoudescription").innerHTML = "Definitely the COOLEST of the crowd. You are an individual of many talents that seem to not have any boundaries. From athletics to leadership to intelligence you bring something to any group you're a part of! Though you may seem intimidating at first, people who get to know you will definitely know you are the COOLEST"
    }
    //you are Lauren!
    else if (howlauren > howholly && howlauren > howemmy && howlauren > howmaddie){
        document.getElementById("whoareyou").innerHTML = "You are a Lauren!"
        document.getElementById("whoareyoudescription").innerHTML = "You are someone who has the essentials of life really down. You are constantly trying to go past your boundaries and not afraid of the unknown. You can come of really carefree, but those who know you would know that you just have your priorities set straight. On the other side you still know how to get Litty City and nothing can stop you from doing that"
    }
    //you are Maddie!
    else if (howmaddie > howholly && howmaddie > howlauren && howmaddie> howemmy){
        document.getElementById("whoareyou").innerHTML = "You are a Maddie!"
        document.getElementById("whoareyoudescription").innerHTML = "DAMN IS THAT MADDIE? People tend to flock to you because you give off an approachable but unique vibe. You are really easy to get along with because you know how to enjoy everything and live your life! There is always going to be a bigger and better step for you to take whenever you want"
    }
    
    
    
}
//switch visibilities and create first question
function roomieQuizInit(){
    document.getElementById("quiz-button").style.display = "none";
    document.getElementById("question").style.visibility = 'visible';
    document.getElementById("choice1").style.visibility = 'visible';
    document.getElementById("choice2").style.visibility = 'visible';
    document.getElementById("choice3").style.visibility = 'visible';
    document.getElementById("choice4").style.visibility = 'visible';
    document.getElementById("question").innerHTML = questionArray[questioncount];
    
    document.getElementById("choice1").innerHTML = choice1Array[questioncount].text;
    document.getElementById("choice2").innerHTML = choice2Array[questioncount].text;
    document.getElementById("choice3").innerHTML = choice3Array[questioncount].text;
    document.getElementById("choice4").innerHTML = choice4Array[questioncount].text;
}
