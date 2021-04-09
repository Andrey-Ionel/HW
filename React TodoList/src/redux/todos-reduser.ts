import { ITodoList } from '../types'

interface ITodoActionToggle {
  type: 'TOGGLE_TODO',
  payload: {
    id: number,
  }
}

interface ISetTodosAction {
  type: 'SET_TODOS',
  payload: {
    todos: ITodoList[],
  }
}

type TodoActions = ITodoActionToggle | ISetTodosAction;

export const todosReduser = (state: ITodoList[] = [], action: TodoActions) => {
  switch (action.type) {

    case 'TOGGLE_TODO': {
      const newTodos = state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            type: todo.type === 'success' ? 'warning' : 'success'
          }
        }
        return todo;
      })
      return newTodos;
    }
    case 'SET_TODOS': {
      return action.payload.todos;
    }
    default:
      return state
  }
}

