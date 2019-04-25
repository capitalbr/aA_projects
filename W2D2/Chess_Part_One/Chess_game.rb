require_relative "Chess_board"
require_relative "Chess_display"
require_relative "Chess_player"



class ChessGame
    attr_reader :display
    def initialize
        @board = ChessBoard.new
        @display = ChessDisplay.new(@board)
        @players = {}
        # @current_player = ChessPlayer.new
    end
end


