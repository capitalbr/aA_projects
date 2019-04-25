require 'singleton'



class ChessPieceNull < ChessPiece
    include Singleton

    def initialize
        @piece = :n #"null"

        
    end
end