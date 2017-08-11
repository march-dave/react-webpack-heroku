export const ADD_TODO = 'ADD_TODO'

let nextTodo = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodo++,
        text
    };
}