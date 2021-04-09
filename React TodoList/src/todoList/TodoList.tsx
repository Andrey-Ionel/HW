import React, { useState, useEffect, useCallback } from 'react';
import { Alert, AlertProps, Empty, Spin, Space } from 'antd';
import { ITodoListProps, ITodoListServer, ITodoList } from '../types'



export const TodoList: React.FunctionComponent<ITodoListProps> = (props) => {

  // const [todoList, settodoList] = useState<ITodoList[]>([]);

  const { todos, setTodos, toggleTodo } = props

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((serverTodos: ITodoListServer[]) => {
        const mappedTodoList: ITodoList[] = serverTodos.map(serverTodo => ({
          id: serverTodo.id,
          message: serverTodo.title,
          type: serverTodo.completed ? 'success' : 'warning'
        }))
        setTodos(mappedTodoList);
      });
  }, []);

  // const onToggleTodo = (id: number) => {
  //   const newTodoList = todos.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         type: todo.type === 'success' ? 'warning' : 'success'
  //       }
  //     }
  //     return todo;
  //   })
  //   setTodos(newTodoList);
  // }
  return (
    <>
      {
        todos.length === 0 && <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Empty></Empty>
        </Space>
      }
      {
        todos.map(todo => (
          <Alert key={todo.id} message={todo.message} type={todo.type as any} showIcon onClick={() => toggleTodo(todo.id)} />
        ))
      }
    </>
  )
}
