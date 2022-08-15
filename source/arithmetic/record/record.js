class Record {
    static renderMoveHistory = function (moves) {
        var historyElement = $('#move-history').empty();
        historyElement.empty();
        for (var i = 0; i < moves.length; i = i + 2) {
            historyElement.append('<span>' + moves[i] + ' ' + (moves[i + 1] ? moves[i + 1] : ' ') + '</span><br>')
        }
        historyElement.scrollTop(historyElement[0].scrollHeight);

    };
}