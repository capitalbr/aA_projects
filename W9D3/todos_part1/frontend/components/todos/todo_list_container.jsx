import TodoList from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selector';


const mapStateToProps = state => ({
    todos: allTodos(state),
    state
})