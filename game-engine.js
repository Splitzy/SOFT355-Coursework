class RPS
{
  constructor(p1, p2)
  {
    var players = [p1, p2];
    var turns = [null, null];
	//var p1Wins = 0;
	//var p2Wins = 0;
	//var p1Loss = 0;
	//var p2Loss = 0;

    function sendToPlayer(playerIndex, msg)
    {
        players[playerIndex].emit('message', msg);
    }

    function sendToPlayers(msg)
    {
       players.forEach(function(player)
       {
         player.emit('message', msg);
       });
    }

    function onTurn(playerIndex, turn)
    {
      turns[playerIndex] = turn;
      sendToPlayer(playerIndex, 'You Selected ' + turn);

      checkGameOver();
    }

    function checkGameOver()
    {
      const _turns = turns;
      if(_turns[0] && _turns[1])
      {
        sendToPlayers(turns[0] + " : " + turns[1]);
        getGameResult();
        sendToPlayers("Next Round");
        turns = [null, null];
      }
    }

    function getGameResult()
    {
        var p0 = calculateTurn(turns[0]);
        var p1 = calculateTurn(turns[1]);

        var dist = (p1-p0 + 3) % 3;

        switch(dist)
        {
          case 0:
            sendToPlayers("Draw");
            break;
          case 1:
            sendWinMsg(players[0], players[1]);
			//p1Wins += 1;
			//p2Loss += 1;
            break;
          case 2:
            sendWinMsg(players[1], players[0]);
			//p1Loss += 1;
			//p2Loss += 1;
            break;
        }
    }

    function sendWinMsg(winner, loser)
    {
      winner.emit('message', 'You won!');
      loser.emit('message', "You lost!");
    }

    function calculateTurn(turn)
    {
      switch (turn)
      {
        case 'rock':
          return 0;
        case 'scissors':
          return 1;
        case 'paper':
          return 2;
        default:
          throw new Error("Couldn't decode turn!" + turn);
      }

    }

    sendToPlayers("Rock Paper Scissors begins!");

    players.forEach(function(player, index)
    {
        player.on('turn', function(turn)
        {
          onTurn(index, turn);
        });
    });

  }
}

module.exports = RPS;
