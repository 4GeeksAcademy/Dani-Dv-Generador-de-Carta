import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let simbolUp = document.getElementById('simbolUp') 
  let simbolDown = document.getElementById('simbolDown')
  let number = document.getElementById('number')
  const simbols = ["♦", "♥", "♠", "♣"]

  function randSimbol() {
    let random2 = simbols[Math.floor(Math.random()*4)]

    simbolUp.style.color = "black"
    simbolDown.style.color = "black"

    if(random2 === "♥" || random2 === "♦" ){
      simbolUp.style.color = "red"
      simbolDown.style.color = "red"
    }
    
    simbolUp.innerHTML = random2
    simbolDown.innerHTML = random2
    return random2

  }
  function randNumber(){
    let random = Math.floor(Math.random()*13)
    let randomSim = randSimbol()
    if(random == 1 || random == 0){
      if(randomSim === "♥" ){
        number.style.color = "red"
        random = "A"
      }else if(randomSim === "♦" ){
        number.style.color = "red"
        random = "A" 
      }else if(randomSim === "♠"){
        random = "A"
      }else if(randomSim === "♣"){
        random = "A"
      }
    }else if(random == 11){
      random = "👸🏼"
    } else if( random == 12){
      random = "🤴🏻"
    } 
    number.innerHTML = random
  }

  randSimbol()
  randNumber()
  


  console.log("Hello Rigo from the console!");
};
