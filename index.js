
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 to 6 (any no. b/w them)

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png to images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎲 Player 1 Win!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Win! 🎲";
}
//If no one player wins
else {
  document.querySelector("h1").innerHTML = "Draw!!!";
}