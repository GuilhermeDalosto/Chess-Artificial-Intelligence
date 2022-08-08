class BoardEvaluation {


    // MARK: - Functions

    static evaluateBoard = function (board) {
        var totalEvaluation = 0;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                totalEvaluation = totalEvaluation + getPieceValue(board[i][j], i, j);
            }
        }
        return totalEvaluation;
    };

    static getPieceValue = function (piece, x, y) {
        if (piece === null) {
            return 0;
        }
        
        var getAbsoluteValue = function (piece, isWhite, x, y) {
            switch (piece.type) {
                case 'p':
                    return 10 + (isWhite ? pawnEvalWhite[y][x] : pawnEvalBlack[y][x]);
                case 'r':
                    return 50 + (isWhite ? rookEvalWhite[y][x] : rookEvalBlack[y][x]);
                case 'n':
                    return 30 + knightEval[y][x];
                case 'b':
                    return 30 + (isWhite ? bishopEvalWhite[y][x] : bishopEvalBlack[y][x]);
                case 'q':
                    return 90 + evalQueen[y][x];
                case 'k':
                    return 900 + (isWhite ? kingEvalWhite[y][x] : kingEvalBlack[y][x]);
            }
            throw "Unknown piece type: " + piece.type;
        };

        var absoluteValue = getAbsoluteValue(piece, piece.color === 'w', x, y);
        return piece.color === 'w' ? absoluteValue : -absoluteValue;
    }
}
