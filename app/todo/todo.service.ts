import {TodoItem} from './todo.state';
import {json} from '../common/http.service';

export function fetchTodoList(): Promise<TodoItem[]> {
    return json('/todo');
}
