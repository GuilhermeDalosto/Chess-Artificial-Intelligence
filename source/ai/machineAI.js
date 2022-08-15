class MachineAI {
    static makeBestMove() {
        var bestMove = getBestMove(game);
        game.ugly_move(bestMove);
        board.position(game.fen());
        renderMoveHistory(game.history());
        if (game.game_over()) {
            alert('Game over');
        }
    }

    static getBestMove (game) {
        if (game.game_over()) {
            alert('Game over');
        }
    
        positionCount = 0;
        var depth = parseInt($('#search-depth').find(':selected').text());
    
        var d = new Date().getTime();
        var bestMove = minimaxRoot(depth, game, true);
        var d2 = new Date().getTime();
        var moveTime = (d2 - d);
        var positionsPerS = ( positionCount * 1000 / moveTime);
    
        $('#position-count').text(positionCount);
        $('#time').text(moveTime/1000 + 's');
        $('#positions-per-s').text(positionsPerS);
        return bestMove;
    }

}