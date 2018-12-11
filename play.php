  <script src="js/callbreak/model.js"></script>
  <script src="js/callbreak/view.js"></script>
  <script src="js/callbreak/controller.js"></script>
  <link href="css/play.css" rel="stylesheet" media="screen">

  <div class="row">
  	<div class="span10" id="game_table">

  		<div clas="row">

  			<!-- COLUMN LEFT -->
  			<div class="span6" id="column_left" style="height:30em; border:.1em solid">

  				<div class="row">
  					<!-- PLAYER 1 CARD STACK -->
  					<div class="span3 offset1 horizontal_stack" id="player1_cards">
  					</div>
  				</div>

  				<div class="row">
  					<!-- PLAYER 2 CARD STACK -->
  					<div class="span2 vertical_stack " id="player2_cards">
  					</div>

  					<!-- HAND STACK -->
  					<div class="span2 offset0" id="hand_stack" >
  						<div class="card" id="card_1">
  						</div>
  						<div class="card" id="card_2">
  						</div>
  						<div class="card" id="card_3">
  						</div>
  						<div class="card" id="card_4">
  						</div>		
  					</div>

  					<!-- PLAYER 4 CARD STACK -->
  					<div class="span2 offset0 vertical_stack" id="player4_cards">
  					</div>
  				</div>

  				<div class="row">
  					<!-- PLAYER 3 CARD STACK -->
  					<div class="span3 offset1 horizontal_stack" id="player3_cards">
  					</div>
  				</div>
  			</div>

  			<!-- COLUMN RIGHT -->
  			<div class="span3" id="column_right" style="height:30em; border:.1em solid">

          <div class="row">
            <div class="span2">
              <div id="message">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="span2">
              <div id="user_call">
              </div>
            </div>
          </div>
          <div class="row">
            <!-- POINTS TABLE-->
            <div class="span2"> 
             <div id="points_table_container">
              <table class="table" id="points_table" border="1">
               <tr>
                <th colspan="5">Points-Table</th>
              </tr>
              <tr>
                <td></td><td>Player1</td><td>Player2</td><td>Player3</td><td>Player4</td>
              </tr>
              <tr>
                <td>Round1</td><td>8.0</td><td>8.0</td><td>8.0</td><td>8.0</td>
              </tr>
              <tr>
                <td>Round2</td><td>8.0</td><td>8.0</td><td>8.0</td><td>8.0</td>
              </tr>
              <tr>
                <td>Round3</td><td>8.0</td><td>8.0</td><td>8.0</td><td>8.0</td>
              </tr>
              <tr>
                <td>Round4</td><td>8.0</td><td>8.0</td><td>8.0</td><td>8.0</td>
              </tr>
              <tr>
                <td>Sum</td><td>-20.0</td><td>-20.0</td><td>-20.0</td><td>-20.0</td>
              </tr>
              <tr>
                <td>Round5</td><td>8.0</td><td>8.0</td><td>8.0</td><td>8.0</td>
              </tr>
              <tr>
                <td>Total</td><td>-20.0</td><td>-20.0</td><td>-20.0</td><td>-20.0</td>
              </tr>
              <tr>
                <td>Position</td><td>Second</td><td>Second</td><td>Second</td><td>Second</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>







</div>

</div>