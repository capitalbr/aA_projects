


class ChessPiece
    attr_reader :piece, :null_piece
    attr_accessor :position
    def initialize
        @piece = :p #"piece"
        @position = [0,0]
         x, y = @position[0], @position[1]
        @move_potential = [[x-1, y-2], [x+1, y-2], [x-1, y+2], [x+1, y+2],[x-2, y-1], [x-2, y+1], [x+2, y+1], [x+2, y-1]]
    end
    private
    def inspect
        @piece
    end
end