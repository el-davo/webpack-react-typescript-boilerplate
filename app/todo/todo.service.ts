import { TodoItem } from './todo.state';

const todoList: TodoItem[] = [
    { id: '1', name: 'test1', description: 'item 1' },
    { id: '2', name: 'test2', description: 'item 2' },
    { id: '3', name: 'test3', description: 'item 3' },
    { id: '4', name: 'test4', description: 'item 4' }
];

export function fetchTodoList(): Promise<TodoItem[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(todoList), 1000);
    });
}
