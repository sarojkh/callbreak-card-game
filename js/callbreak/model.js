

//CARD Model
function Card(){
	this.suit;
	this.faceValue;
	this.numericValue;
	this.imageFile;
	this.visibility;
}

//PLAYER Model
function Player(){
	this.id;
	this.name;
	this.alias;
	this.avatar;
	this.type;
	this.cards=[];
	this.getIndexOfCard=function(cardArg){
		//syntax of cardArg: <numericValue>_<suit>
		var indexOfUnderscore=cardArg.indexOf("_");
		var numericValue=parseInt(cardArg.slice(0, indexOfUnderscore));
		var suit=cardArg.slice(indexOfUnderscore+1);
		for(var i=0; i<this.cards.length; i++){
			if (this.cards[i].suit==suit && this.cards[i].numericValue==numericValue){
				return i;
			}
		}
		return -1;
	};
	this.getInitialCall=function(){
		if(this.type=="computer"){
			return 3;
		}
		return -1;
	};
}

//CALL Model
function Call(){
	this.initialCall=0;
	this.callCount=0;
}

//POINTSTABLE Model
function PointsTable(){
	this.rounds=[];
	this.players=[];
}

//HAND Model
function Hand(){
	this.TOTAL_CARDS=4;
	this.players=[];
	this.cards=[];
	this.currentPlayer;
	this.setCurrentPlayer=function(player){
		this.currentPlayer=player;
	};
	this.getCurrentPlayer=function(){
		return this.currentPlayer;
	};
	this.setPlayers=function(players){
		this.players=players;
	};
	this.isComplete=function(){
		return this.cards.length ==this.TOTAL_CARDS;
	};
	this.getWinner=function(){
		var baseSuit=this.getBaseSuit();
		var winningCard;
		var winnerPlayer;
		if(this.handHasSuit("spade")){
			winningCard=this.getBiggestCardInHand("spade");
		}else{
			winningCard=this.getBiggestCardInHand(baseSuit);
		}
		var indexOfWinningCard=this.cards.indexOf(winningCard);
		var indexOfWinnerPlayer=indexOfWinningCard;
		winnerPlayer=this.players[indexOfWinnerPlayer];
		return winnerPlayer;
	};
	this.addMove=function(card){
		var validMoves=this.getValidMoves();
		if (validMoves.indexOf(card) == -1){
			return false;
		}
		this.cards.push(card);
		this.currentPlayer.cards.splice(this.currentPlayer.cards.indexOf(card),1);
		this.setCurrentPlayer(this.players[(this.players.indexOf(this.currentPlayer)+1) % this.TOTAL_CARDS ]);
		return true;
	};

	this.getBaseSuit=function(){
		if(this.cards.length==0){
			return -1;
		}
		return this.cards[0].suit;
	};
	this.getBestMoveCard=function(){
		var currentPlayer=this.currentPlayer;
		var validMoves=this.getValidMoves();
		var baseSuit=this.getBaseSuit();
		//TODO
		return validMoves[0];
	};
	this.getValidMoves=function(){

		var validMoves=[];
		var currentPlayer=this.currentPlayer;

		if(this.cards.length==0){
			validMoves=currentPlayer.cards;
			return validMoves;
		}

		var baseSuit=this.getBaseSuit();
		var biggestCardOfBaseSuitInHand=this.getBiggestCardInHand(baseSuit);

		if(this.playerHasSuit(currentPlayer, baseSuit)){
			if(this.handHasSuit("spade") && baseSuit!="spade"){
				validMoves=this.getPlayerCardsOfSuit(currentPlayer, baseSuit);
			}else{
				if(this.getPlayerCardsBiggerThan(currentPlayer, baseSuit, biggestCardOfBaseSuitInHand).length>0){
					validMoves=this.getPlayerCardsBiggerThan(currentPlayer, baseSuit, biggestCardOfBaseSuitInHand);
				}else{
					validMoves=this.getPlayerCardsSmallerThan(currentPlayer, baseSuit, biggestCardOfBaseSuitInHand);
				}	
			}
		}else{
			if(this.handHasSuit("spade")){
				var biggestCardOfSpadeInHand=this.getBiggestCardInHand("spade");
				if(this.getPlayerCardsBiggerThan(currentPlayer, "spade", biggestCardOfSpadeInHand).length>0){
					validMoves=this.getPlayerCardsBiggerThan(currentPlayer, "spade", biggestCardOfSpadeInHand);
				}else{
					//playAnyOtherCardOfAnySuitIncludingSpade
					validMoves=currentPlayer.cards;
				}
			}else{
				if(this.playerHasSuit(currentPlayer, "spade")){
					validMoves=this.getPlayerCardsOfSuit(currentPlayer, "spade");
				}else{
					//playCardOfAnyOtherSuit
					validMoves=currentPlayer.cards;
				}
			}
		}
		return validMoves;
	};
	this.playerHasSuit=function(player, suit){
		for(var i=0; i<player.cards.length; i++){
			if(player.cards[i].suit==suit){
				return true;
			}
		}
		return false;
	};
	this.handHasSuit=function(suit){
		for(var i=0; i< this.cards.length; i++){
			if(this.cards[i].suit == suit){
				return true;
			}
		}
		return false;
	};
	this.getBiggestCardInHand=function(suit){
		var suitCards=[];
		for(var i=0; i<this.cards.length; i++){
			if(this.cards[i].suit==suit){
				suitCards.push(this.cards[i]);
			}
		}
		var suitCardsSorted=suitCards.sort(function(cardA, cardB){
			return cardA.numericValue-cardB.numericValue;
		});
		var biggestCard=suitCardsSorted[suitCards.length-1];
		return biggestCard;
	};
	this.getPlayerCardsBiggerThan=function(player, suit, card){
		var biggerCards=[];
		for(var i=0; i<player.cards.length; i++){
			if(player.cards[i].suit == suit && player.cards[i].numericValue > card.numericValue){
				biggerCards.push(player.cards[i]);
			}
		}
		return biggerCards;
	};
	this.getPlayerCardsSmallerThan=function(player, suit, card){
		var smallerCards=[];
		for(var i=0; i<player.cards.length; i++){
			if(player.cards[i].suit == suit && player.cards[i].numericValue < card.numericValue){
				smallerCards.push(player.cards[i]);
			}
		}
		return smallerCards;
	};
	this.getPlayerCardsOfSuit=function(player, suit){
		var suitCards=[];
		for(var i=0; i<player.cards.length; i++){
			if(player.cards[i].suit == suit){
				suitCards.push(player.cards[i]);
			}
		}
		return suitCards;
	};

}

//ROUND Model
function Round(){
	this.TOTAL_HANDS=13;
	this.players=[];
	this.hands=[];
	this.calls=[];
	this.currentDealer;
	this.newHand=function(){
		var newHand= new Hand();
		newHand.setPlayers(this.getPlayersSortedForHand());
		newHand.setCurrentPlayer(this.getPreviousHandWinner());
		if(this.hands.length != 0){
			this.increaseCallCount(this.getPreviousHandWinner());
		}
		this.hands.push(newHand);
	};
	this.getPreviousHandWinner=function(){
		var previousWinner;
		if(this.hands.length==0){
			previousWinner= this.players[(this.players.indexOf(this.currentDealer)+1) % 4];
		}else{
			previousWinner=this.hands[this.hands.length-1].getWinner();
		}
		return previousWinner;
	};
	this.getPlayersSortedForHand=function(){
		var handPlayersSorted=[];
		var previousHandWinner=this.getPreviousHandWinner();
		var indexOfPreviousHandWinner=this.players.indexOf(previousHandWinner);
		handPlayersSorted.push(previousHandWinner);
		handPlayersSorted.push(this.players[(indexOfPreviousHandWinner+1)%4]);
		handPlayersSorted.push(this.players[(indexOfPreviousHandWinner+2)%4]);
		handPlayersSorted.push(this.players[(indexOfPreviousHandWinner+3)%4]);
		return handPlayersSorted;
	};
	this.updateCalls=function(){
		var indexOfPlayer=this.indexOfPlayer(this.getPreviousHandWinner());
		this.calls[indexOfPlayer].callCount++;
	};
	this.isComplete=function(){
		return this.hands.length == this.TOTAL_HANDS && this.hands[this.TOTAL_HANDS-1].isComplete();
	};
	this.setPlayers=function(players){
		this.players=players;
	};
	this.setInitialCall=function(player, call){
		var indexOfPlayer=this.indexOfPlayer(player);
		var callObj=new Call();
		callObj.initialCall=call;
		this.calls[indexOfPlayer]=callObj;
	};
	this.getInitialCall=function(player){
		var indexOfPlayer=this.indexOfPlayer(player);
		return this.calls[indexOfPlayer].initialCall;
	};
	this.increaseCallCount=function(player){
		var indexOfPlayer=this.indexOfPlayer(player);
		this.calls[indexOfPlayer].callCount++;
	};
	this.getCallCount=function(player){
		var indexOfPlayer=this.indexOfPlayer(player);
		return this.calls[indexOfPlayer].callCount;
	};
	this.setCurrentDealer=function(player){
		this.currentDealer=player;
	};
	this.indexOfPlayer=function(player){
		return this.players.indexOf(player);
	};
	this.deal=function(){
		var deck=new Deck();
		deck.serialize()
		deck.shuffle();
		for(var i=0; i<deck.cards.length;i=i+4){
			this.players[0].cards.push(deck.cards[i]);
			this.players[1].cards.push(deck.cards[i+1]);
			this.players[2].cards.push(deck.cards[i+2]);
			this.players[3].cards.push(deck.cards[i+3]);
		}
		this.players[0].cards=this.serializeCards(this.players[0].cards);
		this.players[1].cards=this.serializeCards(this.players[1].cards);
		this.players[2].cards=this.serializeCards(this.players[2].cards);
		this.players[3].cards=this.serializeCards(this.players[3].cards);
	};
	this.serializeCards=function(cards){
		cards=cards.sort(function(cardA,cardB){
			var cardASuit=cardA.suit;
			var cardBSuit=cardB.suit;
			var multiplicationFactor=0;
			this.getMultiplicationFactor=function(suit){
				switch(suit){
					case "spade":
					return 10000;
					break;
					case "diamond":
					return 1000;
					break;
					case "club":
					return 100;
					break;
					case "heart":
					return 10;
					break;
					default:
					return 0;
				}
			};
			var cardATempNumericValue=cardA.numericValue * this.getMultiplicationFactor(cardA.suit);
			var cardBTempNumericValue=cardB.numericValue * this.getMultiplicationFactor(cardB.suit);
			return cardATempNumericValue-cardBTempNumericValue;
		});
		return cards;
	};
}

//GAME Model
function Game(){
	this.TOTAL_ROUNDS=5;
	this.rounds=[];
	this.players=[];
	this.pointsTable;
	this.newRound=function(){
		var newRound=new Round();
		newRound.setPlayers(this.players);
		newRound.setCurrentDealer(this.getCurrentDealer());
		newRound.deal();
		this.rounds.push(newRound);
	};
	this.isComplete=function(){
		return this.rounds.length == this.TOTAL_ROUNDS && this.rounds[this.TOTAL_ROUNDS-1].isComplete();
	};
	this.getPlayers=function(){
		return this.players;
	};
	this.getCurrentDealer=function(){
		if (this.rounds.length==0){
			return this.players[0];
		}
		return this.players[(this.rounds.length) % this.TOTAL_ROUNDS];
	};
	this.addPlayer=function(player){
		this.players.push(player);
	};
	this.getPlayerOfId=function(id){
		for(var i=0; i<this.players.length; i++){
			if(this.players[i].id == id){
				return player;
			}
		}
		return -1;
	};
}

//DECK Model
function Deck(){

	this.cards=[];

	this.serialize=function(){
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
 		 {// code for IE6, IE5
 		 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 		 }
 		 xmlhttp.open("GET","xml/deck.xml",false);
 		 xmlhttp.send();
 		 xmlDoc=xmlhttp.responseXML;
 		 var tempCards=[];
 		 $(xmlDoc).find("card").each(function(){
 		 	var card=new Card();
 		 	card.suit=$(this).find("suit").text();
 		 	card.faceValue=$(this).find("faceValue").text();
 		 	card.numericValue=parseInt($(this).find("numericValue").text());
 		 	card.imageFile=$(this).find("imageFile").text();
 		 	tempCards.push(card);
 		 });
 		 this.cards=tempCards;
 		};
 		this.shuffle=function(){
 			for(var i=this.cards.length-1; i>=0; i--){
 				var j = Math.floor( Math.random() * ( i + 1 ) );
 				var tempi = this.cards[i];
 				var tempj = this.cards[j];
 				this.cards[i] = tempj;
 				this.cards[j] = tempi;
 			}
 		};
 	}








