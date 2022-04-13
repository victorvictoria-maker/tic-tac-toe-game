	//start game function
	player1.innerHTML = player1.value;
	player2.innerHTML = player2.value;
	function startGame() {
	var xx = "You can start the game " + player1.value;
	// var yy = "Your turn " + player2.value + " please";
		if (player1.value == "" && player2.value != "") {
			player.innerHTML = "Player 1, input your name for the game to start!";
		} else if (player1.value != "" && player2.value == "") {
			player.innerHTML = "Player 2, input your name for the game to start!";
		} else if (player1.value != "" && player2.value != "") {
			player.innerHTML = xx; 
			startButton.innerHTML = "Re-start";
		}
		if (player.innerHTML == xx) {
			name1.innerHTML = player1.value;
			name2.innerHTML = player2.value;
		}
	}


	//playing function
	player1.innerHTML = player1.value;
	player2.innerHTML = player2.value;

	var turn = 1;

	function showValue(event) { 

		var qq = "Your turn " + player1.value;
		var zz = "Your turn " + player2.value;
		var playerOneWins = "You won " + player1.value;
		var playerTwoWins = "You won " +player2.value;

		if ((player.innerHTML == playerOneWins) ||
		   (player.innerHTML == playerTwoWins)) {
			player.innerHTML = "We have a winner already, you can re-start";
		}
			if(player.innerHTML == "We have a winner already, you can re-start")return;

		if (player1.value == "" && player2.value == "") {
			event.target.innerHTML = "";
			player.innerHTML = "Input your names please";
		} else if (player1.value != "" && player2.value != "") {

			if (event.target.innerHTML != "") return;
		

			if (turn == 1) {
				event.target.innerHTML = "X";
				turn = 2;
				player.innerHTML = zz;
			} else if (turn == 2) {
				event.target.innerHTML = "O";
				turn = 1;
				player.innerHTML = qq;
			}
		}

		declareWinner();
	}


	// winning function
	function declareWinner() {
		var first1 = column1.innerHTML;
		var second2 = column2.innerHTML;
		var third3 = column3.innerHTML;
		var fourth4 = column4.innerHTML;
		var fifth5 = column5.innerHTML;
		var sixth6 = column6.innerHTML;
		var seventh7 = column7.innerHTML;
		var eighth8 = column8.innerHTML;
		var nineth9 = column9.innerHTML;
		var playerOneWins = "You won " + player1.value;
		var playerTwoWins = "You won " +player2.value;
		var xyz = player1.value +" and "+ player2.value + " draw, try again, no one won.";


		if ((first1 == "X" && second2 == "X" && third3 == "X") ||
		   (fourth4 == "X" && fifth5 == "X" && sixth6 == "X") ||
		   (seventh7 == "X" && eighth8 == "X" && nineth9 == "X") || 
		   (first1 == "X" && fourth4 == "X" && seventh7 == "X") ||
		   (second2 == "X" && fifth5 == "X" && eighth8 == "X") ||
		   (third3 == "X" && sixth6 == "X" && nineth9 == "X") ||
		   (first1 == "X" && fifth5 == "X" && nineth9 == "X") ||
		   (third3 == "X" && fifth5 == "X" && seventh7 == "X")) {
		   	player.innerHTML = playerOneWins;
		   	++score1.innerHTML;
		}
		if ((first1 == "O" && second2 == "O" && third3 == "O") ||
		   (fourth4 == "O" && fifth5 == "O" && sixth6 == "O") ||
		   (seventh7 == "O" && eighth8 == "O" && nineth9 == "O") || 
		   (first1 == "O" && fourth4 == "O" && seventh7 == "O") ||
		   (second2 == "O" && fifth5 == "O" && eighth8 == "O") ||
		   (third3 == "O" && sixth6 == "O" && nineth9 == "O") ||
		   (first1 == "O" && fifth5 == "O" && nineth9 == "O") ||
		   (third3 == "O" && fifth5 == "O" && seventh7 == "O")) {
		   	player.innerHTML = playerTwoWins;
		   ++score2.innerHTML;
		}
		if ((first1 != "") &&
				(second2 != "") &&
				(third3 != "") &&
				(fourth4 != "") &&
				(fifth5 != "") &&
				(sixth6 != "") && 
				(seventh7 != "") &&
				(eighth8 != "") &&
				(nineth9 != "")) {
			player.innerHTML = xyz;
		}
	}

