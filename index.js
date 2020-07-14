var randomNumber1 = Math.round(Math.random()*5)+1;

if (randomNumber1===1){
  document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
}
if (randomNumber1===2){
  document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
}
if (randomNumber1===3){
  document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
}
if (randomNumber1===4){
  document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
}
if (randomNumber1===5){
  document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
}

var randomNumber2 = Math.round(Math.random()*5)+1;

if (randomNumber2===1){
  document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
}
if (randomNumber2===2){
  document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
}
if (randomNumber2===3){
  document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
}
if (randomNumber2===4){
  document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
}
if (randomNumber2===5){
  document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
}

// Getting Out Results

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
