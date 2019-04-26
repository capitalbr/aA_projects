require_relative "Chess_piece.rb"
require_relative "Stepable.rb"


class Pawn < ChessPiece
    include Stepable


    def initialize(color)
        super(color)
          @piece = :P
    end

def move_dirs
    if self.color == :white
        return [[1,0]]
    else
       return [[-1,0]]
    end
end

end


#can only move diagonally when enemy is 1 spot away