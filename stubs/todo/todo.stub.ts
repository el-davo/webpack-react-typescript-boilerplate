import {name, random, lorem} from 'faker';
import {TodoItem} from '../../app/todo/todo.state';

export const todo = [
    {
        id: random.uuid(),
        name: 'Todo 1',
        description: lorem.paragraph()
    },
    {
        id: random.uuid(),
        name: name.firstName(),
        description: lorem.paragraph()
    }
] as TodoItem[];
