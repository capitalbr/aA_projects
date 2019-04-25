require_relative "Chess_piece"
require_relative "Chess_piece_null"



class ChessBoard
attr_accessor :board
    
    def initialize
        
        @board = Array.new(8) { Array.new(8) }
        @board = @board.map.with_index do |row, i|
            if i == 0 || i == 1 || i == 6 || i == 7
                row.map.with_index do |pos, idx| 
                    pos = ChessPiece.new 
                    pos.position = [i, idx]
                    pos
                end
            else
                row.map { |pos| pos = ChessPieceNull.instance }
            end
        end
        @display = ChessDisplay.new(@board)
    end

    def move_piece(start_pos, end_pos)
        a = start_pos[0]
        b = start_pos[1]
        x = end_pos[0]
        y = end_pos[1]
        
        piece_1 = self.board[a][b]
        piece_2 = self.board[x][y]
        if piece_1 == ChessPieceNull.instance
            raise "there is no piece here"
        elsif false# self.valid_path?(start_pos, end_pos, piece_1, piece_2)
            raise "there is no valid path"
        end
        
        piece_1.position = [x, y]
        self.board[a][b] = ChessPieceNull.instance # null piece
        self.board[x][y] = piece_1
     end  

#    private
#     def valid_path?(start_pos, end_pos, piece_1, piece_2)
       
#            # self.overtake?(piece_1, piece_2)   #=> can piece_1 defeat_piece_2
    
#         x, y = pos[0], pos[1]
        
        
#         new_array = array.map do |pos|
#             pos
#         end

#         new_array.select do |pos|
#             x = pos[0]
#             y = pos[1]
#             (x >= 0 && x < 8) && (y >= 0 && y < 8)
#         end
#     end

#     end
end

