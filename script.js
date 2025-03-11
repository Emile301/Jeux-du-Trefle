var winningCards = 25;
var totalCards = 100;
var bet;

function selectCard(button){
	const cardsFound = document.getElementById("cardsFound");

	button.style.transform = "rotateY(180deg)";
	button.style.backgroundColor = "orange";

	bet = Math.floor(Math.random() * totalCards+1);
	if(bet<=winningCards){
		setTimeout(() => {button.innerHTML = "☘︎"}, 150);
		winningCards--;
		totalCards--;
		cardsFound.innerHTML = "☘︎: " + String(25-winningCards) +"/25";
	}
	else{
		setTimeout(() => {button.innerHTML = "⠀"}, 150);
		totalCards--;
	}
	button.disabled = true;
	console.log(totalCards);
	console.log(winningCards);
	console.log(bet);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function random(){
	const button = document.getElementById("gen");
	button.innerHTML = String(getRndInteger(1,500));
}