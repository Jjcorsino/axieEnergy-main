var counterc = document.getElementById("cartasQuantity");
counterc = 6;
var counter = document.getElementById("energyQuantity");
counter = 3;
var round = document.getElementById("roundNumber");
round = 1;

function subtractc(){
  counterc -= 1;
  if (counterc <= 0) {
    counterc = 0;
  }
  
  document.getElementById("cartasQuantity").innerHTML = counterc;
}

function addc(){
  counterc += 1;
  if (counterc >= 15) {
    counterc = 15;
  }
  document.getElementById("cartasQuantity").innerHTML = counterc;
}

function subtract(){
  counter -= 1;
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("energyQuantity").innerHTML = counter;
}

function add(){
  counter += 1;
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("energyQuantity").innerHTML = counter;
}

function reset(){
  counter = 3;
  //counterc = 6;
  round = 1;
  document.getElementById("energyQuantity").innerHTML = counter;
  //document.getElementById("cartasQuantity").innerHTML = counterc;
  document.getElementById("roundNumber").innerHTML = round;
}

function nextRound(){
  round += 1;
  counter += 2;
  counterc += 3;
  if (counter >= 10) {
    counter = 10;
  }
  if (counterc >=15){
      counterc = 15;
  }
  
  document.getElementById("roundNumber").innerHTML = round;
  document.getElementById("energyQuantity").innerHTML = counter;
  document.getElementById("cartasQuantity").innerHTML = counterc;
}


document.addEventListener('keypress', function (event) {
    if (event.key === 's') {
        add();
    }
    if (event.key === 'a') {
      subtract();
    }
    if (event.key === 'x') {
        addc();
    }
    if (event.key === 'z') {
      subtractc();
    }
    if (event.key === 'r') {
        reset();
    }
    if (event.key === 'd') {
      nextRound();
    }

  });
  