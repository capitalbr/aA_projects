

require_relative "Chess_board.rb"


# RULES

# create the tests as you go not after you've added a lot of functionality
# run the file or..
# load file into pry (must remove comments first)
#       - load "Chess_specs.rb"

game = ChessBoard.new   

# game.grid[0][4] = ChessPieceNull.instance
# game.grid[0][5] = ChessPieceNull.instance
# game.grid[1][3] = ChessPieceNull.instance
# p game.grid[0][3].moves

game.move_piece([1, 4], [2, 4])

game.move_piece([0, 3], [4, 7])
game.move_piece([6, 5], [5, 5])
# game.in_check?(:black)

# queen = Queen.new(:white)
# queen.board = game.grid
# game.grid[3][3] = queen
# queen.board[4][3] = ChessPiece.new

# queen.position = [3,3]
# queen.position


# queen.board[4][3].color = :white
# # p queen.color = :white
# p queen.grow_unblocked_moves([1,1])
# p queen.moves
game.display.render
# p queen.color
# add some pieces of the same color infront of the queens path

# p game.board  # shows the chess board

#[[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [2, 1], [3, 2]]
#[3, 1], [2, 2], [0, 2]]

# p game.board  # shows the chess board


# BOARD SPECS
#  move_piece test
# p game.board[0][0]
# p game.board[5][0]
# p game.board[5][0].position
# p game.move_piece([0, 0], [4,3])
# p game.board[0][0]
# p game.board[5][0]
# p game.board[5][0].position   # this shows the @position using ChessPiece#position



# DISPLAY SPECS
# game = ChessGame.new
# game.display.render