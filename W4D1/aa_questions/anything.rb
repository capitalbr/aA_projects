require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize()
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end

end

class User

    attr_reader :id
    attr_accessor :fname, :lname

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
                users 
            WHERE id = ?
        SQL
        User.new(data.last)
    end

    def self.find_by_name(fname, lname)
        data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
            SELECT 
                * 
            FROM 
                users 
            WHERE fname = ? AND lname = ?
        SQL
        User.new(data.last)
    end

    def initialize(options)
        @id = options["id"]
        @fname = options["fname"]
        @lname = options["lname"]
    end

    def authored_questions
        Question.find_by_author_id(@id)
    end

    def authored_replies
        Reply.find_by_user_id(@id)
    end

    def followed_questions
        QuestionFollow.followed_questions_for_user_id(@id)
    end

    def liked_questions
        QuestionFollow.liked_questions_for_user_id(@id)
    end

    def average_karma
        
        QuestionsDatabase.instance.execute(<<-SQL, @id)
            SELECT 
               (COUNT(question_likes.id) / CAST(COUNT(DISTINCT(questions.id)) AS FLOAT)) as average_likes
            FROM 
                users
            JOIN
                questions on questions.associated_author = users.id 
            LEFT OUTER JOIN
                question_likes ON question_likes.question_id = questions.id
            WHERE users.id = ?
        SQL
    end

    def create
        raise "#{self} already in database" if self.id
        QuestionsDatabase.instance.execute(<<-SQL, self.fname, self.lname)
        INSERT INTO
            users (fname, lname)
        VALUES
            (?, ?)
        SQL
        self.id = QuestionsDatabase.instance.last_insert_row_id
    end
    
    # if self.id
        #update
    # else
        #create
    # end

    def update
        raise "#{self} not in database" if !self.id
       QuestionsDatabase.instance.execute(<<-SQL, self.fname, self.lname, self.id)
            UPDATE
                users
            SET
                fname = ?,
                lname = ?
            WHERE
                id = ?
        SQL
    end
end

class Question

    attr_reader :id
    attr_accessor :title, :body, :associated_author

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
                questions 
            WHERE id = ?
        SQL
        Question.new(data.last)
    end

    def self.find_by_author_id(author_id)
        data = QuestionsDatabase.instance.execute(<<-SQL, author_id)
            SELECT 
                * 
            FROM 
                questions 
            WHERE associated_author = ?
        SQL
        Question.new(data.last)
    end

    def self.find_by_title(title)
        data = QuestionsDatabase.instance.execute(<<-SQL, title)
            SELECT 
                * 
            FROM 
                questions 
            WHERE title = ?
        SQL
        data.map {|ele| Question.new(ele)}
    end

    def self.most_followed(n)
        QuestionFollow.most_followed_questions(n)
    end

    def self.most_liked(n)
        QuestionLike.most_liked_questions(n)
    end

    def initialize(options)
        @id = options["id"]
        @title = options['title']
        @body = options['body']
        @associated_author = options['associated_author']
    end

    def author
        User.find_by_id(@associated_author)
    end

    def replies
        Reply.find_by_question_id(@id)
    end

    def followers
        QuestionFollow.followers_for_question_id(@id)
    end

    def likers 
        QuestionLike.likers_for_question_id(@id)
    end

    def num_likes 
        QuestionLike.num_likes_for_question_id(@id)
    end

end

class QuestionFollow
    attr_reader :id
    attr_accessor :user_id, :question_id

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
                question_follows 
            WHERE id = ?
        SQL
        QuestionFollow.new(data.last)
    end

     def self.find_by_user_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
               question_follows
            WHERE user_id = ?
        SQL
        data.map {|ele| QuestionFollow.new(ele)}
    end

    def self.followers_for_question_id(q_id)
       
        data = QuestionsDatabase.instance.execute(<<-SQL, q_id)
            SELECT 
                users.id, users.fname, users.lname
            FROM 
                question_follows
            JOIN
                users ON users.id = question_follows.user_id
            WHERE
                question_id = ?
        SQL
        data.map {|hash| User.new(hash)}
    end

    def self.followed_questions_for_user_id(u_id)
        data = QuestionsDatabase.instance.execute(<<-SQL, u_id)
            SELECT 
                questions.id, questions.title, questions.body, questions.associated_author
            FROM 
                question_follows
            JOIN
                questions ON questions.id = question_follows.question_id
            WHERE
                user_id = ?
        SQL
        data.map {|hash| Question.new(hash)}
    end

    def self.most_followed_questions(n)
         data = QuestionsDatabase.instance.execute(<<-SQL, n)
            SELECT 
                questions.id, questions.title, questions.body, questions.associated_author
            FROM 
                question_follows
            JOIN
                questions ON questions.id = question_follows.question_id
            GROUP BY
                question_id
            HAVING
                count(*)
            ORDER BY count(*) DESC
            LIMIT ?
        SQL
        data.map {|hash| Question.new(hash)}
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end


end


class Reply

    attr_reader :id
    attr_accessor :question_id, :parent_id, :user_id, :body

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
                replies
            WHERE id = ?
        SQL
        Reply.new(data.last)
    end

    def self.find_by_user_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
               replies
            WHERE user_id = ?
        SQL
        data.map {|ele| Reply.new(ele)}
    end


    def self.find_by_question_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
               replies
            WHERE question_id = ?
        SQL
        data.map {|ele| Reply.new(ele)}
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
        @parent_id = options['parent_id']
        @body = options['body']
    end

    def author
        User.find_by_id(@user_id)
    end

    def question 
        Question.find_by_id(@question_id)
    end

    def parent_reply
        Reply.find_by_id(@parent_id)
    end

    def child_replies
         data = QuestionsDatabase.instance.execute(<<-SQL, @id)
            SELECT 
                * 
            FROM 
               replies
            WHERE parent_id = ?
        SQL
        data.map {|ele| Reply.new(ele)}
    end
end

class QuestionLike

    attr_accessor :id, :user_id, :question_id

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
                question_likes
            WHERE id = ?
        SQL
        QuestionLike.new(data.last)
    end

    def self.find_by_question_id(id)
        data = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT 
                * 
            FROM 
                question_likes
            WHERE question_id = ?
        SQL
        data.map {|ele| QuestionLike.new(ele)}
    end

    def self.likers_for_question_id(question_id)
         data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT 
                users.id, users.lname, users.fname
            FROM 
                question_likes
            JOIN users on users.id = question_likes.user_id
            WHERE question_id = ?
        SQL
        data.map {|ele| User.new(ele)}
    end

    def self.num_likes_for_question_id(question_id)
          QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT 
               count(*) as "num likes"
            FROM 
                question_likes
            WHERE question_id = ?
        SQL
    end

    def self.liked_questions_for_user_id(user_id)
            data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT 
               questions.title, questions.associated_author, questions.body, questions.id
            FROM 
                question_likes
            JOIN
                questions ON question_likes.question_id = questions.id
            WHERE user_id = ?
        SQL
        data.map {|hash| Question.new(hash)}
    end

    def self.most_liked_questions(n)
        data = QuestionsDatabase.instance.execute(<<-SQL, n)
            SELECT 
                questions.id, questions.title, questions.body, questions.associated_author
            FROM 
                question_likes
            JOIN
                questions ON questions.id = question_likes.question_id
            GROUP BY
                question_id
            HAVING
                count(*)
            ORDER BY count(*) DESC
            LIMIT ?
        SQL
        data.map {|hash| Question.new(hash)}
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end


end