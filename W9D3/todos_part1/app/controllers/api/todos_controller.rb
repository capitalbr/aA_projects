class TodosController < ApplicationController

    def show
        todo = Todo.find(params[:id])
        render json: todo
    end
    
    def index
        todos = Todo.all
        render json: todos
    end

    def create
        todo = Todo.new(todo_params)

        if todo 

        else

        end
    end

    private
    def todo_params
        params.require(:todo).permit(:title, :body)
    end

end
