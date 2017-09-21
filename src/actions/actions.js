export const ADD_TODO = 'ADD_TODO'
export const ADD_NEXt = 'ADD_NEXT'

let nextTodo = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodo++,
        text
    };
}