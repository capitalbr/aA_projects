require "singleton"

class ChessPieceNull < ChessPiece
    include Singleton

    attr_reader :color


    def initialize
        @piece = :N
        @color = :blue

    end
 
    def inspect
        @piece
    end


    def empty?
        true
    end

end

