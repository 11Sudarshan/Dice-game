var RandomNum1 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImage = "images/dice" + RandomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , RandomDiceImage);

var RandomNum2 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImage2 = "images/dice" + RandomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , RandomDiceImage2);


if(RandomNum1 > RandomNum2){
    document.querySelector("h1").innerHTML = "PLAYER1 WINS";
}
else if(RandomNum1 < RandomNum2){
    document.querySelector("h1").innerHTML = "PLAYER2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "DRAW" ;
}