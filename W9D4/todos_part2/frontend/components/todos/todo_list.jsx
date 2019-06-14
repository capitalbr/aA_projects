import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'
 

class TodoList extends React.Component {



    render() {
        let items = this.props.todos.map( (el, idx) => {
            return <TodoListItem key={idx} title={el.title}/>
        })


        return(
            <div>
            <ul>
                {items}
            </ul>
            <TodoForm dispatchReceiveTodo={this.props.dispatchReceiveTodo}/>
            </div>
        )
    }


}

export default TodoList;