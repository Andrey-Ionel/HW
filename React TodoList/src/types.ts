export interface ITodoList {
  message: string;
  type: string;
  id: number;
}

export interface ITodoListServer {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface ITodoListMapStateToProps {
  todos: ITodoList[];
}

export interface ITodoListMapDispatchToProps {
  toggleTodo: (id: number) => void;
  setTodos: (todos: ITodoList[]) => void;
}

export interface ITodoListProps extends ITodoListMapStateToProps, ITodoListMapDispatchToProps {

}