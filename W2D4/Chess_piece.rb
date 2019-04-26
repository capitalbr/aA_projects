

class ChessPiece
    attr_accessor :position, :piece, :board, :color

    def initialize(color = nil, board = nil, pos = nil)
        @board = board        
        @piece = :x
        @position = pos
        @color = color
    end

    def inspect
      puts "#{@color}   #{@piece}   #{@position}"
       
    end

    def empty?

    false

    end

    def moves

    end
end

