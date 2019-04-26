module Slideable
  

    def grow_unblocked_moves(dir)
        pos_arr = []
        trigger = false
            
                a = self.position[0]
                b = self.position[1]
                
                x = dir[0]
                y = dir[1]
                
                #plan objects end point
                c = a + x
                d = b + y

            until trigger
            
                val = board[c][d]
                #check to see if ending position is valid 
                #prevent movement if invalid or equals same team color.
                
                #if value is null, its onoccupied, so you can keep sliding there,
                #add possible move coordinates to move array
                #take enemy piece if value is nul and different color

                if  c < 0 || c > 7 || d < 0 || d > 7 || val.color == self.color   
                    trigger = true 

                    #keep sliding in current direction if there is no piece stored in val
                elsif val.empty?
                    pos_arr << [c, d]
                    c += x
                    d += y
                    
                elsif !val.empty?
                    pos_arr << [c, d]
                    trigger = true
                end
            end
            return pos_arr      
        end



    def moves
    
            m = []

        

            #start position of pieces
            a = self.position[0]
            b = self.position[1]

            arr = self.move_dirs  # [[1,0], [-1,0], [0,1], [0,-1], [1,1], [-1,1], [1,-1], [-1,-1]]
            arr.each do |dir|
            array_of_positions = grow_unblocked_moves(dir)
            m += array_of_positions
                #the above returns an array of all positions we can move to in that direction
            
            
            end
            return m
    end
   

    


end


