import React, { useState, useEffect } from 'react';
import { Form } from '../components/Form'
import { TodoListConnected } from './redux/TodoListConnected'
import { createStore } from 'redux'
import { todosReduser } from './redux/todos-reduser'
import { Provider } from 'react-redux'
import './style.scss'


interface IAppProps {

}

const store = createStore(todosReduser)

export const App: React.FunctionComponent<IAppProps> = () => {

  const [isReactButtonVisible] = useState(false);


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