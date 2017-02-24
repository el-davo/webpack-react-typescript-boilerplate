import { todoItem } from './todo.state';

let todoList: Array<todoItem> = [
    { id: '1', name: 'test1', description: 'item 1' },
    { id: '2', name: 'test2', description: 'item 2' },
    { id: '3', name: 'test3', description: 'item 3' },
    { id: '4', name: 'test4', description: 'item 4' }
]

export function fetchTodoList(): Promise<Array<todoItem>> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(todoList), 1000);
    })
}