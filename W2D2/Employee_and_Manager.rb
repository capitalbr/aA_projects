class Employee
    attr_reader :salary, :title
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        bonus = self.salary * multiplier
    end


    
end



class Manager < Employee
    attr_accessor :subordinates, :title
    def initialize(name, title, salary, boss)
        super(name, title, salary, boss)
        @subordinates = []
    end

  def inspect
        @subordinates
    end


    def bonus(multiplier)
        sum = 0
        array = []

        subordinates.each do |sub|
                sum += sub.salary
                begin
                sub.subordinates.each do |s|
                    array << s 
                end 
                rescue
               
                end
            end

# # emp2.subordinates = [emp, empx]
# emp3.subordinates = [emp2]
# p emp3.bonus(2)

# array = [emp, empx]
        until array.empty?
        
            first = array.shift  #=> first manager from the array
            sum += first.salary
            if first.title == "Manager"
                first.subordinates.each do |sub|               
                    array << sub
                end
            end
        end
        bonus = sum * multiplier
    end

end


emp = Employee.new("jonny1", "1", 20000, "boss")
empx = Employee.new("jonny2", "1", 20000, "boss")
empc = Employee.new("jonny4", "1", 20000, "boss")
empv = Employee.new("jonny3", "1", 20000, "boss")
empb = Employee.new("jonny5", "change", 20000, "boss")

emp2 = Manager.new("steve", "Manager", 30000, "boss")
emp3 = Manager.new("steve1", "Manager", 30000, "boss")
emp4 = Manager.new("steve2", "Manager", 30000, "boss")
emp5 = Manager.new("steve3", "Manager", 30000, "boss")
emp6 = Manager.new("steve4", "Manager", 30000, "boss")
emp7 = Manager.new("steve5", "xxManager", 30000, "boss")


emp2.subordinates = [emp, empx]
emp3.subordinates = [emp2]
p emp3.bonus(2)
# emp5.subordinates = [emp, empx, empc, empv, empb, emp2, emp3, emp4, emp5, emp6, emp7]
# emp5.subordinates = [emp, empx, empc, empv, empb, emp2, emp3, emp4, emp5, emp6, emp7]


# @subordinates  # [ emp, emp, emp, man, man ]

# man_1 => employees + man_2

# man_2 => man_3

# man_3 => employees