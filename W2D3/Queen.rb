require_relative "Slideable.rb"
require_relative "Chess_piece.rb"

class Queen < ChessPiece
    include Slideable

    def initialize
        super
    end

end