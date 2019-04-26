require_relative "Slideable.rb"
require_relative "Chess_piece.rb"

class Queen < ChessPiece
    include Slideable


    def initialize(color)
        
        super(color)
        
        @piece = :Q
    end

    def move_dirs
        return [[1,0], [-1,0], [0,1], [0,-1], [1,1], [-1,1], [1,-1], [-1,-1]]
    end

end


