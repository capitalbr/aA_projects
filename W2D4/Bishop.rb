
require_relative "Slideable.rb"
require_relative "Chess_piece.rb"

class Bishop < ChessPiece
    include Slideable
    def initialize(color)
        
        super(color)
        
        @piece = :B
    end

    def move_dirs
        return [[1,1], [-1,1], [-1,-1], [1,-1]]
    end
 

end