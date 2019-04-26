require_relative "Chess_piece.rb"
require_relative "Stepable.rb"


class Knight < ChessPiece
    include Stepable


    def initialize(color)
        super(color)
          @piece = :H
    end

def move_dirs
  return [[2,1] ,[-2,1] ,[1,2],[-1,2],[-1,-2],[1,-2],[2,-1],[-2,-1]]
end

end