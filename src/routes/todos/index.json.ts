import type { RequestHandler } from "@sveltejs/kit"

// todo add values to db
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler = async (event) => {
    const data = await event.request.formData();

    todos.push({
        created_at: new Date(),
        text: data.get("text").toString(),
        done: false,
    })
    return {
        status: 303,
        headers: {
            location: "/"
        }
    };
}