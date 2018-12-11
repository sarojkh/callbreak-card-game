

//Setting up a new game
var game;
var currentRound;
var currentHand;
var currentPlayer;

$(document).ready(function(){
	game=new Game;
	addPlayers();
	game.newRound();
	game.rounds[0].newHand();
	updateCurrentRound();
	updateCurrentHand();
	updateCurrentPlayer();
	setDummyCalls();
	updateGameView();
	setTimeout(makeComputerMoveCard,500);	
});

function makeComputerMoveCard(){
	if (currentPlayer.type=="computer"){
		var currentPlayerId=currentPlayer.id;
		var bestMoveCard=currentHand.getBestMoveCard();
		var cardArg= bestMoveCard.numericValue+"_"+bestMoveCard.suit;
		registerMove(currentPlayerId, cardArg);
	}
}

function updateCurrentRound(){
	currentRound=game.rounds[game.rounds.length-1];
}

function updateCurrentHand(){
	currentHand=currentRound.hands[currentRound.hands.length-1];
}

function updateCurrentPlayer(){
	currentPlayer=currentHand.getCurrentPlayer();
}

function updateGame(){

	if(!currentHand.isComplete()){
		updateCurrentPlayer();
		updateGameView();
		setTimeout(makeComputerMoveCard,500);
	}else{
		if(!currentRound.isComplete()){
			updateGameView();
			currentRound.newHand();
			updateCurrentHand();
			updateCurrentPlayer();
			setTimeout(updateGameView,500);
			setTimeout(makeComputerMoveCard,500);
		}else{
			if(!game.isComplete()){
				updateGameView()
				currentRound.increaseCallCount(currentRound.getPreviousHandWinner());
				game.newRound();
				//getCallsFromPlayers();
				updateCurrentRound();
				currentRound.newHand();
				updateCurrentHand();
				updateCurrentPlayer();
				setDummyCalls();
				setTimeout(updateGameView,500);
				setTimeout(makeComputerMoveCard);
			}else{
				updateGameView();
				endGame();
			}
		}
	}

}

function endGame(){
	clearHandCardsView();
}
function getCallsFromPlayers(){
	for(var i=0; i<currentRound.players.length; i++){
		var player=currentRound.players[i];
		var callObj=new Call()
		if(player.type=="computer"){
			callObj.initialCall=player.getInitialCall();
		}else{//if player is human
			askUserForCall();
		}
		callObj.initialCall=player.getInitialCall();
		currentRound.calls[i]=callObj;
	}
	updateGameView();
}
function addPlayers(){
	var players=getPlayers();
	for(var i=0; i<players.length; i++){
		game.addPlayer(players[i]);
	}
}

function getPlayers(){
	var player1=new Player();
	player1.id=1;
	player1.name="You";
	player1.alias="You";
	player1.type="human";
	var player2=new Player();
	player2.id=2;
	player2.name="Sakuni";
	player2.alias="MamaShree";
	player2.type="computer";
	var player3=new Player();
	player3.id=3;
	player3.name="Duryodhan";
	player3.alias="Bhaanje";
	player3.type="computer";
	var player4=new Player();
	player4.id=4;
	player4.name="Karna";
	player4.alias="AngaRaj";
	player4.type="computer";

	var players=[player1, player2, player3, player4];
	return players;
}

function registerMove(playerId, cardArg){
	var cardIndex=currentPlayer.getIndexOfCard(cardArg);
	var card=currentPlayer.cards[cardIndex];
	currentHand.addMove(card)
	updateGame();
}

function setDummyCalls(){
	for(var i=0; i<4; i++){
		var callObj=new Call()
		callObj.initialCall=3;
		currentRound.calls[i]=callObj;
	}
}

function registerHumanInitialCall(){
	var initialCall=$("#human_call_option :selected").val();
	var callObj=new Call();
	callObj.initialCall=initialCall;

}


