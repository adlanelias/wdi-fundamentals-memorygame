var cards = [{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},
];

var cardsInPlay = [];
var result = document.getElementById("result");
var resetButton = document.getElementById("reset");

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		result.innerHTML = "Congratulations, you got a match!";
	} else {
		result.innerHTML = "No Match :( <br> Hit 'Play Again' for another go."
	};
};

function flipCard() {
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

function createBoard() {
	var board = document.getElementById("game-board");
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		board.appendChild(cardElement);
	}
};

function playAgain() {
	location.reload();
}
resetButton.addEventListener("click", playAgain);

createBoard();

