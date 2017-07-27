

  myAudio = new Audio('nba.mp3');
  myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  myAudio.play();

  var Length = [];
  var teams = ["lakers", "celtics", "bulls", "heat", "cavs", "warriors", "timberwolves", "spurs", "kings", "wizards", "raptors", "hornets", "sixers", "suns", "clippers", "rockets", "jazz", "pelicans", "nets", "hawks", "knicks", "thunder", "bucks",
    "mavericks", "trailblazers", "pacers", "pistons", "nuggets", "magic", "grizzlies"];
  var wins = 0;
  var losses = 0;
  var games = 0;
  var guessed = [];

  function resetBracket() {
    guessed = [];
  }

  var random = teams[Math.floor(Math.random() * teams.length)];

  function resetLength() {
    Length = random.length;
  }

  function resetGame() {
    random = teams[Math.floor(Math.random() * teams.length)];
  }

  resetLength();


  document.onkeyup = function(event) {


    if (guessed.length === random.length) {
      resetBracket();
      resetGame();
      resetLength();
      games++;
    }

    var player = String.fromCharCode(event.keyCode).toLowerCase();
    guessed.push(player);


    function getUserVisibleString() {
      var output = [];

      for (var i = 0; i < random.length; i++) {
        if (guessed.length && guessed.indexOf(random[i]) !== -1) {
          output.push(random[i]);
          resetLength();
        }
        else {
          output.push("-");
          resetLength();
        }
      }
      return output.join(" ");
    }


    var html =
      "<p>Guessed Characters: " + guessed + "</p>" + "<br>" +
      "<p>You get as many tries as the length of the word</p>" + "<br>" +
      "<p>Theme: NBA Basketball Teams! </p>" + "<br>" +
      "<p>Length of word: " + Length + "</p>" +
      "<p>Games Played: " + games + "</p>";

    document.querySelector("#game").innerHTML = html;
    document.querySelector("#game1").innerHTML = getUserVisibleString();

    console.log(guessed);
    console.log(Length);
    console.log(random);

  }
