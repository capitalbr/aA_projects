require_relative "Chess_game"


# RULES

# create the tests as you go not after you've added a lot of functionality
# run the file or..
# load file into pry (must remove comments first)
#       - load "Chess_specs.rb"

game = ChessBoard.new   
# p game.board  # shows the chess board


# BOARD SPECS
 #move_piece test
p game.board[0][0]
p game.board[4][0]
game.move_piece([0, 0], [4, 0])
p game.board[0][0]
p game.board[4][0]
p game.board[4][0].position   # this shows the @position using ChessPiece#position



# DISPLAY SPECS
game = ChessGame.new
game.display.render