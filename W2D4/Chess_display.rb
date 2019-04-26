require "colorize"
require_relative "cursor.rb"


class ChessDisplay
    attr_reader :board, :cursor


    def initialize(board)
        @board = board
        @cursor = Cursor.new([0,0], board)

        # @cursor.cursor_pos
    end
   


     def render
        self.board.grid.each_with_index do |row, x|
            row.each_with_index do |col, y|
                if self.cursor.cursor_pos == [x,y]
                    print "#{col.piece} ".red
                else
                    print "#{col.piece} ".green
                end
            end
            print "\n"
        end
    end

    def loop_test

        
        loop do

            render
            @cursor.get_input
            system "clear"
        
        end
    end
end


