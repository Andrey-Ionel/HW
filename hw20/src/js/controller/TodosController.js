/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class TodosController {
    constructor() {
        this.todoListView = new TodoListView({
            toggleCompleted: (id) => this.toggleCompleted(id),
            removeTodolist: (id) => this.removeTodolist(id),
            createTodolist: (todo, id) => this.createTodolist(todo, id),
        });
        this.todosModel = new TodosModel();

        const $app = $('.app');

        $app.append(this.todoListView.$list);

        this.init();
    }

    async init() {
        const todos = await this.todosModel.getTodos();
        this.todoListView.renderTodos(todos);
    }

    async toggleCompleted(id) {
        await this.todosModel.toogleCompleted(id);
        this.todoListView.renderTodos(this.todosModel.todos);
    }

    async removeTodolist(id) {
        await this.todosModel.removeTodolist(id);
        this.todoListView.removeTodo(id);
    }

    async createTodolist(todo, id) {
        const promisePostTodoList = this.todosModel.createTodolist(todo, id);
        // await this.todosModel.createTodolist(todo, id);
        promisePostTodoList.then((todo) => this.todoListView.createTodolist(todo));
    }
}
