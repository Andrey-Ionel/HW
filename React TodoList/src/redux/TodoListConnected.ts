import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { TodoList } from '../todoList/TodoList'
import { ITodoList, ITodoListMapDispatchToProps, ITodoListMapStateToProps } from '../types'

interface IStore {
  todos: ITodoList[];
}

const mapStateToProps = (state: ITodoList[]): ITodoListMapStateToProps => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ITodoListMapDispatchToProps => ({
  toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', payload: { id } }),
  setTodos: todos => dispatch({ type: 'SET_TODOS', payload: { todos } })
})

export const TodoListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
