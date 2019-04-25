require_relative "Chess_board"
require "colorize"



class ChessDisplay
    attr_reader :board
    def initialize(board)
        @board = board
        # @cursor = Cursor.new
    end

    def render
        self.board.board.each_with_index do |row, x|
            row.each_with_index do |col, y|
                print "#{col.piece} "
            end
            print "\n"
        end
    end

end