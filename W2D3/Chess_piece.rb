# require_relative "Queen.rb"
# require_relative "Bishop.rb"
# require_relative "Rook.rb"
# require_relative "Slideable.rb"


class ChessPiece
    attr_accessor :position, :piece, :board, :color

    def initialize(board = nil, pos = nil, color = nil)
        @board = board        
        @piece = :P
        @position = pos
        @color = color
    end

    def inspect
        @piece
    end

    def empty?

    false

    end

    def moves

    end
end



#
#
#
#