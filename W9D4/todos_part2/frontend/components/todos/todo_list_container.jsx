import TodoList from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = state => ({
    todos: allTodos(state),
    state: state
})

const mapDispatchToProps = dispatch => ({
    dispatchReceiveTodo: todo => dispatch(receiveTodo(todo))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);