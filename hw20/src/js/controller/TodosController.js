/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class TodosController {
    constructor() {
        this.todoListView = new TodoListView({
            toggleCompleted: (id) => this.toggleCompleted(id),
            removeTodo: (id) => this.removeTodo(id),
        });

        this.todoFormView = new TodoFormView({
            addNewTodo: (todo) => this.addNewTodo(todo),
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

    async removeTodo(id) {
        await this.todosModel.removeTodo(id);
        this.todoListView.removeTodo(id);
    }

    async addNewTodo(todo) {
        const newTodo = await this.todosModel.addNewTodo(todo);
        this.todoFormView.addNewTodo(newTodo);
    }
}
