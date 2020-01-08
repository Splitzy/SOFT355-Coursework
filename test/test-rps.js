var chai = require("chai");
var rpsGame = require("../game-engine");
var turns = rpsGame.turns;

suite("Test the game logic", function() {
	test("Calculate the turn", function() {
		chai.assert.equal(calculateTurn('rock'), 0, "Turn is invalid");
	});	
	test("Test the distance calculation", function() {
		var test1 = calculateTurn('rock'); // 0
		var test2 = calculateTurn('paper');// 2
		chai.assert.equal((test1 - test2 + 3) % 3, 1, "Calculation error");
	});
	test("Test if it's a draw", function() {
		var testCalc = (2 - 2 + 3) % 3; // 0
		chai.assert.isTrue(testDraw(testCalc), true, "This is not a draw")
	});	
});

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
	
function testDraw(dist)
	{
		switch(dist)
		{
			case 0:
				return true;
			default:
				return false;
		}
	}

