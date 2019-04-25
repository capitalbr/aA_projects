require_relative "Queen.rb"
require_relative "Bishop.rb"
require_relative "Rook.rb"
require_relative "Slideable.rb"


class ChessPiece
    attr_accessor :position, :piece, :board

    def initialize
        @board = nil        
        @piece = :P
        @position = nil
        # @color = color
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