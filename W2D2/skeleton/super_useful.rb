# PHASE 2
def convert_to_int(str)

  begin 
  Integer(str)
  rescue ArgumentError
   nil
  end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  begin
    if FRUITS.include? maybe_fruit
      puts "OMG, thanks so much for the #{maybe_fruit}!"
    else
     raise StandardError

    end
  rescue
    if maybe_fruit == "coffee"
      puts "I know you hate fruit but come on dude"
      feed_me_a_fruit
    else
      puts "NOT A FRUIT GOODBYE"
    end

  end

 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  puts "Feed me a fruit! (Enter the name of a fruit:)"
  maybe_fruit = gets.chomp
  reaction(maybe_fruit)

end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)

     if yrs_known < 5 
     raise "Sorry, you have to know each other for at least 5 years to be besties"
     end

     if name.length <= 0 || fav_pastime.length <= 0
      raise "comon man? no hobbies?"
     end

    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime

    
  
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


