
module Stepable
    
    def moves
       arr = []
       a = self.position[0]
       b = self.position[1]

    
        move_dirs.each do |dir|
     
            x = dir[0]
            y = dir[1]

            c = a+x
            d = b+y 

            val = self.board[c][d]

            if self.piece == :P
                if !(c < 0 || c > 7 || d < 0 || d > 7 || !val.empty?) #is it within bounds and unoccupied?
                    arr << [c, d]
                end
            elsif !(c < 0 || c > 7 || d < 0 || d > 7 || val.color == self.color)
                 arr << [c,d]
            end

        # must prevent pawn from moving down
        end
        arr
    end
end


# module Stepable
    
#     def moves
#        arr = []
#        a = self.position[0]
#        b = self.position[1]

    
#         move_dirs.each do |dir|
     
#             x = dir[0]
#             y = dir[1]

#             c = a+x
#             d = b+y 

#             val = self.board[c][d]

#             if !(c < 0 || c > 7 || d < 0 || d > 7 || val.color == self.color)
#                 arr << [c,d]
#             end
#         end
#         arr
#     end
# end