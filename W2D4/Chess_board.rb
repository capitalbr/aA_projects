require_relative "Queen.rb"
require_relative "Rook.rb"
require_relative "Bishop.rb"
require_relative "Knight.rb"
require_relative "King.rb"
require_relative "Pawn.rb"
require_relative "Chess_piece.rb"
require_relative "Chess_piece_null.rb"
require_relative "Chess_display.rb"

class ChessBoard
    attr_reader :grid, :display
    def initialize
        @grid = [
                [Rook.new(:white), Knight.new(:white), Bishop.new(:white), Queen.new(:white), King.new(:white), Bishop.new(:white), Knight.new(:white), Rook.new(:white)],
                [Pawn.new(:white), Pawn.new(:white), Pawn.new(:white), Pawn.new(:white), Pawn.new(:white), Pawn.new(:white), Pawn.new(:white), Pawn.new(:white)],
                [ChessPieceNull.instance, ChessPieceNull.instance, ChessPieceNull.instance, ChessPieceNull.instance, ChessPieceNull.instance, ChessPieceNull.instance, ChessPieceNull.instance, ChessPieceNull.instance],
                [ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance],
                [ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance],
                [ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance,ChessPieceNull.instance],
                [Pawn.new(:black),Pawn.new(:black),Pawn.new(:black),Pawn.new(:black),Pawn.new(:black),Pawn.new(:black),Pawn.new(:black),Pawn.new(:black)],
                [Rook.new(:black),Knight.new(:black),Bishop.new(:black),Queen.new(:black),King.new(:black),Bishop.new(:black),Knight.new(:black),Rook.new(:black)]

        ]

        #assign chess pieces a grid
        @grid.each_with_index do |row, i|
    
            row.each_with_index do |piece, idx|
                piece.board = @grid
                
            end
            
        end

        @grid.each.with_index do |row, i|
            row.each.with_index do |col, idx|
                col.position = [i,idx]
            end   
        end
        
        

      
            
    
    #chess piece must reference the board
        @display = ChessDisplay.new(self)
    end


    def move_piece(start_pos, end_pos)
        row = start_pos[0]
        col = start_pos[1]
        x = end_pos[0]
        y = end_pos[1]


        piece_1 = self.grid[row][col] #[3,6]
        arr = piece_1.moves
        if arr.include?(end_pos)
            piece_1.position = [x, y]
            self.grid[row][col] = ChessPieceNull.instance
            self.grid[x][y] = piece_1
        else
            puts "sorry move not possible"
        end
            

    end


    # SHOULD WORK 

    # def in_check?(color)
         
    #    @grid.each_with_index do |row, i|
    #         row.each_with_index do |col, idx| 
    #             if col.piece == :K && col.color == color
    #                 king = col
    #             end
    #         end


    #     end
     
    #     self.grid.each_with_index do |row, i|
    #         row.any? do |piece|
    #            piece.moves.include?(king.position)
    #         end
    #     end
    # end
end   


       
    # end

    # def checkmate?(color)


    # end
# end



#arr = [[00000000],[00000000],[00000000],[00000000],[00000000],[00000000],[00000000],[00000000]]
