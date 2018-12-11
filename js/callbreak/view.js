
function updateGameView(){
    updatePlayerCardsView();
    updatePointsTableView();
    updateMessageView();
    updateHandCardsView();
}

function clearPointsTableView(){
    $("#points_table").empty()
}

function clearHandCardsView(){
    $("#hand_stack").empty();
}

function clearPlayerCardsView(){
    for (var i=0; i<4; i++){
        $("#player"+(i+1)+"_cards").empty();
    }
}

function clearMessageView(){
    $("#message").empty();
}

function updateHandCardsView(){
    clearHandCardsView();
    for (var i=0; i<currentHand.cards.length; i++){
        var imageFile="img/cards/"+currentHand.cards[i].imageFile;
        $("#hand_stack").append("<div class='card' id='card_"+(i+1)+"'><img src='"+imageFile+"'></div>");
    }
}

function updateMessageView(){
    clearMessageView();
    $("#message").append("Current Player: "+currentPlayer.name);
}

function updatePointsTableView(){

    clearPointsTableView();



    $("#points_table").append("<tr><th colspan='5'>Points-Table</th></tr>");
    for(var i=0; i<game.rounds.length; i++){

        if(i==0){
            var player1Name=game.rounds[i].players[0].name;
            var player2Name=game.rounds[i].players[1].name;
            var player3Name=game.rounds[i].players[2].name;
            var player4Name=game.rounds[i].players[3].name;
            $("#points_table").append("<tr><td></td><td>"+player1Name+"</td><td>"+player2Name+"</td><td>"+player3Name+"</td><td>"+player4Name+"</td></tr>");
        }  
        if(game.rounds[i].isComplete()){
            var callArgs=[];
            for(var j=0; j<4; j++){
                var playerInitialCall=game.rounds[i].calls[j].initialCall;
                var playerFinalCallCount=game.rounds[i].calls[j].callCount;
                var difference=playerFinalCallCount - playerInitialCall;
                var callArg;
                if(difference>=0){
                    callArg=playerInitialCall+"."+difference;
                }else{
                    callArg="<span style=\"color:red\">"+playerInitialCall+"</span>";
                }
                callArgs.push(callArg);
            }

            $("#points_table").append("<tr><td>Round"+(i+1)+"</td><td>"+callArgs[0]+"</td><td>"+callArgs[1]+"</td><td>"+callArgs[2]+"</td><td>"+callArgs[3]+"</td></tr>");     


            //CALCULATE GRAND TOTAL. DISPLAY RANKING
            if(game.rounds.length==5){
                var totalCallCountOfPlayers=[];
                for(var j=0; j<4; j++){
                    //TODO
                }
                //$("#points_table").append("<tr><td>Total</td><td>"+totalCallCountOfPlayers[0]+"</td><td>"+totalCallCountOfPlayers[1]+"</td><td>"+totalCallCountOfPlayers[2]+"</td><td>"+totalCallCountOfPlayers[3]+"</td></tr>");     
            }
        }else{
            var playerCalls=[]
            for(var m=0; m<4; m++){
                if(m<game.rounds[i].calls.length){
                    playerCalls[m]=game.rounds[i].calls[m].initialCall;
                }else{
                    playerCalls[m]=""
                }
            }

            $("#points_table").append("<tr><td>Round"+(i+1)+"</td><td>"+playerCalls[0]+"</td><td>"+playerCalls[1]+"</td><td>"+playerCalls[2]+"</td><td>"+playerCalls[3]+"</td></tr>");     
        }


    }
}

function updatePlayerCardsView(){
    clearPlayerCardsView();
    for (var i=0; i<currentRound.players.length; i++){
        var playerStack="player"+(i+1)+"_cards";
        for (var j=0; j<currentRound.players[i].cards.length; j++){
            var player=currentRound.players[i];
            var card=player.cards[j];
            var suit=card.suit;
            var faceValue=card.faceValue;
            var numericValue=card.numericValue;
            var imageFile=card.imageFile;

            if(player.type=="human" && player==currentPlayer){
                var onclickFunction="onclick=registerMove("+player.id+",'"+numericValue+"_"+suit+"')";                
            }else{
                var onclickFunction="";
            }

            if(player.type=="computer"){
                imageFile="b.gif";
            }
            
            if(i==0 || i==2){
                if(j==0){
                    $("#"+playerStack).append("<div><img class=\"card\" id=\"test\" "+onclickFunction+" src=\"img/cards/"+imageFile+"\" style=\"margin-left:0%\"></div>");
                }
                else{
                    $("#"+playerStack).append("<div><img class=\"card\" "+onclickFunction+" src=\"img/cards/"+imageFile+"\"></div>");
                }
            }
            if(i==1 || i ==3){
                if(j==0){
                    $("#"+playerStack).append("<div><img class=\"card\" id=\"test\" "+onclickFunction+" src=\"img/cards/"+imageFile+"\" style=\"margin-top:0%\"></div>");
                }
                else{
                    $("#"+playerStack).append("<div><img class=\"card\" "+onclickFunction+" src=\"img/cards/"+imageFile+"\"></div>");
                }
            }
        }
    }
}

function askUserForCall(){
    $("#user_call").append("<p>Make a call</p><div id='user_call_option'><select class='input-mini' id='human_call_option' onchange='registerHumanInitialCall()'>"+
        "<option></option>"+
        "<option>1</option>"+
        "<option>2</option>"+
        "<option>3</option>"+
        "<option>4</option>"+
        "<option>5</option>"+
        "<option>6</option>"+
        "<option>7</option>"+
        "<option>8</option>"+
        "<option>9</option>"+
        "<option>10</option>"+
        "<option>11</option>"+
        "<option>12</option>"+
        "<option>13</option>"+
        "</select></div>");
}









