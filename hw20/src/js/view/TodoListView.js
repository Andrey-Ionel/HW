/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class TodoListView {
    constructor(config) {
        this.config = config;
        this.$list = this.generateList();
        this.removeTodoAddEventListener();
        this.$form = this.generateForm();
        this.renderForm();
    }

    generateList() {
        return $(`
            <ul class="list-group js-list lead"></ul>
        `).click((e) => this.onClickTodo(e));
    }

    removeTodoAddEventListener() {
        return this.$list.click((event) => this.onClickCloseButton(event));
    }

    generateForm() {
        return $(`
        <form class="js-todo-form position-relative">
            <input class="js-todo-name my-5 shadow bg-white rounded w-100 p-3 pe-5" type="text" name="todo"
                placeholder="type your list here">
            <button class="js-add-todo btn btn-dark shadow px-5 py-3 position-absolute top-50 end-0 translate-middle-y"
                type="button">ADD</button>
        </form>
    `).click((event) => this.onClickAddButton(event));
    }

    generateTodo(todo) {
        const doneClass = todo.completed ? 'done' : 'not-done';

        return `
            <li data-id="${todo.id}" class="list-group-item my-1 d-flex bd-highlight ${doneClass}">${todo.title}
            <i class="bi bi-trash mx-3 bd-highlight"></i>
            </li>
        `;
    }

    renderForm() {
        const $app = $('.app');
        $app.append(this.$form);
    }

    renderTodos(todos) {
        const todosHtml = todos.map(this.generateTodo);
        this.$list.html(todosHtml);
    }

    renderTodo(todo) {
        const todoItem = this.generateTodo(todo);
        this.$list.prepend(todoItem);
    }

    removeTodo(id) {
        const todoListItem = this.$list.find(`li[data-id="${id}"]`);
        if (todoListItem) {
            todoListItem.remove();
        }
    }

    createTodolist(todo) {
        const currentAddInputValue = $('.js-todo-name').val();
        const initialAddInputValue = $('.js-todo-name').val('');

        if (currentAddInputValue && currentAddInputValue.trim().length) {
            this.renderTodo(todo);

            return initialAddInputValue;
        }

        alert('Your input is empty');
        return initialAddInputValue;
    }

    onClickTodo(e) {
        const todoListElementTarget = $(e.target).hasClass('list-group-item');
        if (todoListElementTarget) {
            const id = $(e.target).data('id');
            this.config.toggleCompleted(id);
        }
    }

    onClickCloseButton(event) {
        const todoCloseButton = $(event.target).hasClass('bi-trash');
        const todoListItem = $(event.target).closest('li');
        const listId = todoListItem.data('id');

        if (todoCloseButton) {
            this.config.removeTodolist(listId);
        }
    }

    onClickAddButton(event) {
        const todoAddButton = $(event.target).hasClass('js-add-todo');
        if (todoAddButton) {
            const currentAddInputValue = $('.js-todo-name').val();
            this.config.createTodolist(currentAddInputValue);
        }
    }
}
