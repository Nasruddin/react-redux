import delay from './delay';

const todos = [
    {
        id: 1,
        title: "title 1",
        status: "Completed"
    },
    {
        id: 2,
        title: "title 2",
        status: "Completed"
    },
    {
        id: 3,
        title: "title 3",
        status: "Completed"
    }
]

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    const generateId = (course) => {
        return replaceAll(course.title, ' ', '-');
    };

class TodoApi {
    static getAllTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], todos));
            }, delay);
        });
    }

    static saveTodo(todo) {
        todo = Object.assign({}, todo);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minTodoTitleLength = 1;
                if (todo.title.length < minTodoTitleLength) {
                    reject(`Title must be at least ${minTodoTitleLength} characters.`);
                }

                if (todo.id) {
                    const existingTodoIndex = todo.findIndex(a => a.id == todo.id);
                    todo.splice(existingTodoIndex, 1, todo);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    todo.id = generateId(todo);
                    todos.push(todo);
                }

                resolve(todo);
            }, delay);
        });
    }

    static deleteTodo(todoId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfTodoToDelete = todos.findIndex(todo => {
                    todo.id == todo;
                });
                todos.splice(indexOfTodoToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default TodoApi;