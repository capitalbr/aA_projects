require_relative "Chess_piece.rb"
require_relative "Stepable.rb"


class King < ChessPiece
    include Stepable


    def initialize(color)
        super(color)
          @piece = :K
    end

def move_dirs
  return [[1,0], [-1,0], [0,1], [0,-1], [1,1], [-1,1], [1,-1], [-1,-1]]
  end



end