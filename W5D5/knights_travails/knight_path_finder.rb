require_relative "knight_tree_node"


# A node is a child of another node if you can move from the parent position directly to the child position.
class KnightPathFinder
    attr_reader :considered_positions, :root_node
    # [0,0]
    def initialize(pos)  #pos is an array
        @root_node = PolyTreeNode.new(pos)
        @paths = self.build_move_tree
        @considered_positions = [pos]
    end
    
    def build_move_tree #remember not to add the same position twice

    end
    # [0,0]
    def find_path(current_position)

    end


    def self.valid_moves(pos)  
        x, y = pos[0], pos[1]
        array = [[x-1, y-2], [x+1, y-2], [x-1, y+2], [x+1, y+2],[x-2, y-1], [x-2, y+1], [x+2, y+1], [x+2, y-1]]
        
        new_array = array.map do |pos|
            pos
        end

        new_array.select do |pos|
            x = pos[0]
            y = pos[1]
            (x >= 0 && x < 8) && (y >= 0 && y < 8)
        end
    end

    def new_move_positions(pos)
        array = KnightPathFinder.valid_moves(pos)
        newmoves = array.reject { |ele| self.considered_positions.include?(ele)}
        newmoves.each do |ele|
            self.considered_positions << ele
        end
        
        newmoves
    end

    def build_move_tree
        
        array = []
        array << 
        
        until array.empty?

            
            
            first = array.shift #.first
            first.children.each do |ele|
                    # array << ele
                    self.new_move_positions(self.root_node.value)
            end
           
            return first if first.value == target_value
                        
        end
       
    end
        
  
end

PolyTreeNode.bfs


                        #         2,3    2,5                                
                        #   3,2                 3,6
                        #   5,2       4,4       5,6 
                                    
                        #         6,3    6,5

hey = KnightPathFinder.new([0,0])

p hey.new_move_positions([1, 4])
p hey.new_move_positions([2, 4])
p hey.new_move_positions([5, 4])
p hey.new_move_positions([2, 4])
p hey.new_move_positions([4, 4])
p hey.new_move_positions([3, 4])