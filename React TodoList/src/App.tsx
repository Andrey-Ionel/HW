import React, { useState, useEffect, useCallback } from 'react';
import { Form } from '../components/Form'
import { TodoList } from './todoList/TodoList'
import { TodoListConnected } from './redux/TodoListConnected'
import { createStore } from 'redux'
import { todosReduser } from './redux/todos-reduser'
import { Provider } from 'react-redux'
import './style.scss'


interface IAppProps {

}

const store = createStore(todosReduser)

export const App: React.FunctionComponent<IAppProps> = () => {

  const [isReactButtonVisible, setIsReactButtonVisible] = useState(false);

  const onToggleReactButton = useCallback(() => (setIsReactButtonVisible(!isReactButtonVisible)), [isReactButtonVisible])

  useEffect(() => {
    console.log('MOUNT');
  }, []);

  useEffect(() => {
    console.log('UPDATED', isReactButtonVisible);
  }, [isReactButtonVisible]);

  useEffect(() => () => {
    console.log('UNMOUNT');
  }, []);

  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Form />
        <TodoListConnected />
      </div>
    </Provider>
  )
}