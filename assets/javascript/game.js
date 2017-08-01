
myAudio = new Audio('nba.mp3');
myAudio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
myAudio.play();

var guess = [];

var names = ["lakers", "celtics", "bulls", "heat", "cavs", "warriors", "timberwolves", "spurs", "kings", "wizards", "raptors", "hornets", "sixers", "suns", "clippers", "rockets", "jazz", "pelicans", "nets", "hawks", "knicks", "thunder", "bucks",
  "mavericks", "trailblazers", "pacers", "pistons", "nuggets", "magic", "grizzlies"];

var randomWord = names[Math.floor(Math.random()*names.length)];

var guessesLeft = 10;

var wins = 0;

var losses = 0;

function lose(){

 if(guessesLeft < 1){
   losses++;
   reset();
}

}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function reset(){
  randomWord = names[Math.floor(Math.random()*names.length)];
  guessesLeft = 10;
  guess = [];
}

function getUserString(){
  var output = [];

  for(var i = 0; i < randomWord.length; i++){
      if(guess.indexOf(randomWord[i]) !== -1){
        output.push(randomWord[i]);

        if(output.length === randomWord.length && isLetter(output[i])){
          randomWord = names[Math.floor(Math.random()*names.length)];
          wins++;
          reset();
        }
      }
      else{
        output.push("-");

      }

  }
  return output.join(" ");
}

document.onkeyup = function(event){
lose();
var player = String.fromCharCode(event.keyCode).toLowerCase();
guess.push(player);
guessesLeft--;

getUserString();
console.log(randomWord);
  var html =
  "<p>Guessed Characters: " + guess + "</p>" + "<br>" +
  "<p>Guesses Left:" + " " + guessesLeft + "</p>" +
  "<p> wins:" + " " + wins + "</p>" +
  "<p> losses:" + " " + losses + "</p>";

document.querySelector("#game").innerHTML = html;
document.querySelector("#game1").innerHTML = getUserString();


}
