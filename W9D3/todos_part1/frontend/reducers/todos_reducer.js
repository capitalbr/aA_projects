import {RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions"
import merge from 'lodash/merge';



const beginState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
}



const todosReducer = (state = beginState, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        case RECEIVE_TODOS:

            action.todos.forEach(todo => {
                nextState[todo.id] = todo;
            })
            return nextState;
        case RECEIVE_TODO: 
            const ourTodo = {[action.todo.id]: action.todo};
            return merge({}, state, ourTodo); 
        default:
            return state;
    }
};

export default todosReducer;


// const todosReducer = (state = beginState, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_TODOS: 
//             return Object.create({}, state, action.todos)
//         default:
//             return state;
//     }
// }