jest.mock('../common/http.service', () => ({
    json: jest.fn(() => Promise.resolve([{}]))
}));
import {fetchTodoList} from './todo.service';

describe('Todo Service', () => {

    it('should get a list of todo items from the server', () => {
        return expect(fetchTodoList()).resolves.toEqual([{}]);
    });
});
