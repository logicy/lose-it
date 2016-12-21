OOP

board: size-m, size-n, cell
board.cell: i,j
game: matrix, board-size, noOfPlayers, win-algo(), winner
player: name, record, move(cell)
//move: coordinates, playerKey
bot: name, smartness, move(lastMove,game.matrix)
matrix: "all i,j values of cells on board"
player.record: wins, loss, ties, "in which levels"


levels: [{sequence, levelConfig},...]
levelConfig: board, botEnabled, toughness
-------
