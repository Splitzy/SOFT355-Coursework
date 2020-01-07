class RPS
{
  constructor(p1, p2)
  {
    var players = [p1, p2];
    const turns = [null, null];

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
        sendToPlayers("Game Over");
        getGameResult();
        sendToPlayers("Next Round");
        turns = [null, null];
      }
    }

    function getGameResult()
    {
        console.log(turns[0]);
        console.log(turns[1]);

        var p0 = decodeTurn(turns[0]);
        var p1 = decodeTurn(turns[1]);

        var dist = (p1-p0 + 3) % 3;

        switch(dist)
        {
          case 0:
            sendToPlayers("Draw");
            break;
          case 1:
            sendWinMsg(players[0], players[1]);
            break;
          case 2:
            sendWinMsg(players[1], players[0]);
            break;
        }
    }

    function sendWinMsg(winner, loser)
    {
      winner.emit('message', 'You won!');
      loser.emit('message', "You lost!");
    }

    function decodeTurn(turn)
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
