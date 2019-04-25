
require_relative "Chess_piece.rb"
require_relative "Chess_piece_null.rb"
require_relative "Chess_display.rb"

class ChessBoard
    attr_reader :grid, :display
    def initialize
        @grid= Array.new(8) { Array.new(8) }
        @grid = @grid.map.with_index do |row, i|
            if i < 2 || i > 5
                row.map.with_index do |col, idx|
                    col = ChessPiece.new
                    col.position = [i,idx]
                    col
                end
            else 
                row.map{|col| col = ChessPieceNull.instance}
            end
        end
        
        @grid.each_with_index do |row, i|
        

            row.each_with_index do |piece, idx|
                piece.board = @grid
                
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
        
       if piece_1.empty?
            raise " no piece exists here "
       elsif x < 0 || x > 7 || y < 0 || y > 7
            raise "sorry, not a valid move"

       end

   
        # return = [places a piece can move to]
        # make #moves method for slideable and steppable modules
        #  #moves calls #move_direction
        #bishop rook and queen get different #move_directions within their class
        #dont allow overlap of same colored pieces
        #dont allow a sliding piece to move past a piece that blocks it
        #create movement options for each piece

       piece_1.position = [x, y]
       self.grid[row][col] = ChessPieceNull.instance
       self.grid[x][y] = piece_1


    end

   
end



#arr = [[00000000],[00000000],[00000000],[00000000],[00000000],[00000000],[00000000],[00000000]]
