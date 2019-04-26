

module Slideable
require "byebug"
    def moves(pos)# = @position)
        debugger
        m = []
        a = pos[0]
        b = pos[1]

        arr = move_dirs
        arr.each do |dir|
            x = dir[0]
            y = dir[1]
            c = a + x
            d = b + y
            val = board.grid[c][d]
            if  c < 0 || c > 7 || d < 0 || d > 7 || val.color == self.color
                next
            elsif val.empty?
                m << [c, d]
                m += moves([c, d])
            else
                m << [c, d]
            end
            
        end
        m
    end

end