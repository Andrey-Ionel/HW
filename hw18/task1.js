/* eslint-disable no-underscore-dangle */
// За основу берём ДЗ 16. Todolist (на максималках)

// Необходимо сделать так, чтоб у нас была кнопка Добавить при клике на которую отображался Dialog из jQueryUI. В нём форма с двумя полями Todo Name - input и Done - checkbox.
// При нажатии на кнопку Добавить внутри Dialog отправляем запрос на create с названием и статусом, после чего закрываем Dialog и добавляем новый элемент вверх списка.

// При нажатии на edit icon показываем Dialog с такими же полями как те, что описаны выше, но они заполнены в значения выбранной todo.
// После нажатия на Обновить внутри Edit Dialog отправляем запрос на обновлении и после этого закрываем Edit Dialog и обновляем todo в списке.

// Если по ДЗ что то не понятно, пересмотрите конец занятия где я об этом рассказываю.

const $todoList = $('.js-todo-list');
const $addListButton = $('.js-add-todo');
const $inputForAddList = $('.js-todo-name');
const $inputForEditList = $('.js-todo-name-edit');
const $emptyListMessage = $('.js-hidden-text');
const $formWithTodos = $('.js-todo-form');
const $modalAddTodo = $('.js-add-modal');
const $modalEditTodo = $('.js-edit-modal');
const $modalAddTodoButton = $('.js-show-add-modal');
const $cancelButton = $('.js-cancel-todo-edit');
const $updateButton = $('.js-update-todo-edit');
class TodoListRequests {
    static sendGetTodosRequest() {
        return fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json());
    }

    static sendPostTodosRequest(currentInputValue, listId) {
        return fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({ title: currentInputValue, id: listId }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());
    }

    static sendPutTodosRequest(changedListState, listId) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${listId}`, {
            method: 'PUT',
            body: JSON.stringify({ completed: changedListState, id: listId }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());
    }

    static sendPutEditTodosRequest(id, title) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                title,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());
    }

    static sendDeleteTodosRequest(listId) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${listId}`, {
            method: 'DELETE',
        });
    }
}

class TodoUI {
    static initModals() {
        const baseModalOptions = {
            autoOpen: false,
            modal: true,
            show: {
                effect: 'blind',
                duration: 700,
            },
            hide: {
                effect: 'explode',
                duration: 900,
            },
        };
        $modalAddTodo.dialog(baseModalOptions);
        $modalEditTodo.dialog(baseModalOptions);
    }
}

class TodosRepository {
    constructor() {
        this._todos = [];
        this._selectedTodoId = null;
    }

    get selectedTodoId() {
        return this._selectedTodoId;
    }

    set selectedTodoId(selectedTodoId) {
        this._selectedTodoId = selectedTodoId;
    }

    get todos() {
        return this._todos;
    }

    set todos(todos) {
        this._todos = todos;
    }

    getTodoById(id) {
        return this._todos.find((todo) => todo.id === id);
    }
}

const todosRepository = new TodosRepository();

class TodoListLogic {
    static getTodosList() {
        const promiseTodoList = TodoListRequests.sendGetTodosRequest();
        promiseTodoList
            .then((todos) => {
                renderTodoslist(todos);
                todosRepository.todos = todos;
            });
    }

    static createTodolist() {
        const $currentInputValue = $inputForAddList.val();
        const $initialInputValue = $inputForAddList.val('');

        if ($currentInputValue && $currentInputValue.trim().length) {
            changeVisibilityEmptyListMessage();
            const promisePostTodoList = TodoListRequests.sendPostTodosRequest($currentInputValue);
            promisePostTodoList.then((todo) => {
                renderTodolist(todo);
                todosRepository.todos = [...todosRepository.todos, todo];
            });
            $modalAddTodo.dialog('close');
            return $initialInputValue;
        }

        alert('Your input is empty');
        return $initialInputValue;
    }

    static changeColorTodolist(event) {
        const todoListElementTarget = event.target.classList.contains('list-group-item');
        const todoListElement = event.target.closest('li');
        const listId = todoListElement.id;
        let changedListState = '';

        if (todoListElement.classList.contains('list-group-item-warning')) {
            changedListState = 'true';
        } else {
            changedListState = 'false';
        }

        if (todoListElementTarget) {
            const promisePutTodoList = TodoListRequests.sendPutTodosRequest(changedListState, listId);
            promisePutTodoList.then(() => {
                todoListElement.classList.toggle('list-group-item-warning');
                todoListElement.classList.toggle('list-group-item-success');
            });
        }
    }

    static removeTodolist(event) {
        const todoCloseButton = event.target.classList.contains('bi-x-square');
        const todoListElement = event.target.closest('li');
        const listId = todoListElement.id;

        if (todoCloseButton) {
            const promiseDeleteTodoList = TodoListRequests.sendDeleteTodosRequest(listId);
            promiseDeleteTodoList.then(() => {
                todoListElement.remove();
                todosRepository.todos = todosRepository.todos.filter((todo) => todo.id !== listId);
                changeVisibilityEmptyListMessage();
            });
        }
    }

    static updateTodoList() {
        const listTitle = $inputForEditList.val();
        const listId = todosRepository.selectedTodoId;

        const promisePutEditTodoList = TodoListRequests.sendPutEditTodosRequest(listId, listTitle);

        promisePutEditTodoList.then((updatedTodoList) => {
            todosRepository.selectedTodoId = null;

            todosRepository.todos = todosRepository.todos.map((todo) => {
                if (todo.id === listId) {
                    return updatedTodoList;
                }

                return todo;
            });
            const updatedListItem = getListItem(updatedTodoList);
            const listItem = $todoList.find(`li[id="${listId}"]`);
            listItem.replaceWith(updatedListItem);
            $inputForEditList.val('');
        });

        $modalEditTodo.dialog('close');
    }

    static editTodoList(event) {
        const $todoEditButton = $(event.target.classList.contains('.js-show-edit-modal'));
        const $todoListItem = $(event.target).closest('li');
        todosRepository.selectedTodoId = parseInt($todoListItem[0].id, 10);
        todosRepository.getTodoById(todosRepository.selectedTodoId);

        if ($todoEditButton) {
            $modalEditTodo.dialog('open');
            $inputForEditList[0].value = $todoListItem.text().trim();
        }
    }

    static cancelEdit() {
        const $initialInputValue = $inputForEditList.val('');
        $modalEditTodo.dialog('close');
        return $initialInputValue;
    }
}

init();

function init() {
    TodoUI.initModals();
    TodoListLogic.getTodosList();
    createCancelEditEventListener();
    disableEnterKeyEventListener();
    createUpdateEditEventListener();
    createAddTodolistEventListener();
    createAddTodolistModalEventListener();
    createEditTodolistModalEventListener();
    createRemoveTodoListEventListener();
    createChangeColorTodoListEventListener();
    // createCheckStateEventListener();
}

function createAddTodolistEventListener() {
    $addListButton.click(() => {
        TodoListLogic.createTodolist();
    });
}

function createAddTodolistModalEventListener() {
    $modalAddTodoButton.click(() => {
        $modalAddTodo.dialog('open');
    });
}

function createCancelEditEventListener() {
    $cancelButton.click(() => {
        TodoListLogic.cancelEdit();
    });
}

function createUpdateEditEventListener() {
    $updateButton.click(() => {
        TodoListLogic.updateTodoList();
    });
}

// function createCheckStateEventListener() {
//     $inputForCheckStateList.click((event) => {
//         TodoListLogic.changeStateTodolist(event);
//     });
// }

function createEditTodolistModalEventListener() {
    $todoList.delegate('.js-show-edit-modal', 'click', (event) => {
        TodoListLogic.editTodoList(event);
    });
}

function createRemoveTodoListEventListener() {
    $todoList.click((event) => {
        TodoListLogic.removeTodolist(event);
    });
}

function createChangeColorTodoListEventListener() {
    $todoList.click((event) => {
        TodoListLogic.changeColorTodolist(event);
    });
}

function disableEnterKeyEventListener() {
    $formWithTodos.keypress((event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });
}

function renderTodoslist(todos) {
    const todoListItem = todos.map((list) => getListItem(list));
    $todoList.html(todoListItem.join(''));
    changeVisibilityEmptyListMessage();
}

function renderTodolist(list) {
    const todoListItem = getListItem(list);
    $todoList.prepend(todoListItem);
    changeVisibilityEmptyListMessage();
}

function getListItem(item) {
    let todoListElementState = item.completed;
    if (item.completed === false || item.completed === undefined) {
        todoListElementState = 'list-group-item-warning';
    } else if (item.completed === true) {
        todoListElementState = 'list-group-item-success';
    }
    return `
    <li class="list-group-item ${todoListElementState} my-1 d-flex bd-highlight" id=${item.id}>${item.title}
        <i class="bi bi-pencil-square ms-3 bd-highlight me-auto js-show-edit-modal"></i>
        <i class="bi bi-x-square mx-3 bd-highlight"></i>
    </li>
    `;
}

function changeVisibilityEmptyListMessage() {
    if ($todoList.children().length >= 1) {
        $emptyListMessage.hide();
    } else {
        $emptyListMessage.show();
    }
}
