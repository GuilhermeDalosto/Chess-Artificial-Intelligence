class Control {


    // MARK: - Functions

    static onDragStart = function (game, piece) {
        if (game.in_checkmate() === true || game.in_draw() === true ||
            piece.search(/^b/) !== -1) {
            return false;
        }
    };

    static onDrop = function (source, target) {
        var move = game.move({
            from: source,
            to: target,
            promotion: 'q'
        });

        removeGreySquares();
        if (move === null) {
            return 'snapback';
        }

        renderMoveHistory(game.history());
        window.setTimeout(makeBestMove, 250);
    };

    static onSnapEnd = function () {
        board.position(game.fen());
    };

    static onMouseoverSquare = function (square, piece) {
        var moves = game.moves({
            square: square,
            verbose: true
        });

        if (moves.length === 0) return;

        greySquare(square);

        for (var i = 0; i < moves.length; i++) {
            greySquare(moves[i].to);
        }
    };

    static onMouseoutSquare = function (square, piece) {
        removeGreySquares();
    };
}