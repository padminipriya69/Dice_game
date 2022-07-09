randomnumber1=Math.floor(Math.random()*6+1)
newsrc1="dice_images/dice"+randomnumber1+".png"
document.querySelector("img.img1").setAttribute("src",newsrc1);

randomnumber2=Math.floor(Math.random()*6+1)
newsrc2="dice_images/dice"+randomnumber2+".png"
document.querySelector("img.img2").setAttribute("src",newsrc2);

if (randomnumber1 > randomnumber2){
    document.querySelector('h1').innerHTML="🚩player 1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector('h1').innerHTML="player 2 Wins!🚩";
}
else{
    document.querySelector('h1').innerHTML="Draw!";
}