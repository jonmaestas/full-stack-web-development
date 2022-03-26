// todo add values to db
let todos: Todo[] = [];

export const api = (request, data?: Record<string, unknown>) => {
    let body = {};
    let status = 500;
    switch (request.request.method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(data as Todo);
            body = data;
            status = 201
            break;
        case "DELETE":
            status = 200;
            todos = todos.filter(todo => todo.uid !== request.params.uid)
            break;
        case "PATCH":
            status = 200;
            todos = todos.map(todo => {
                if (todo.uid === request.params.uid) {
                    todo.text = data.text as string;
                };
                return todo;
            });
            break;
        default:
            break;
    }

    if (request.request.method.toUpperCase() !== "GET") {
        return {
            status: 303,
            headers: {
                location: "/"
            }
        };
    }

    return {
        status,
        body
    }
}