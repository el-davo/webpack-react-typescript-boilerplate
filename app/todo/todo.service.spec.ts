import {load} from "proxyquire";
import {spy} from "sinon";

describe('Todo Service', () => {

    let todoService;
    let jsonSpy;

    beforeEach(() => {
        jsonSpy = spy();

        todoService = load('./todo.service', {
            '../common/http.service': {
                json: jsonSpy
            }
        });

    });

    it('should get a list of todo items from the server', () => {
        todoService.fetchTodoList();

        jsonSpy.calledOnce.should.be.true();
        jsonSpy.calledWith('/todo').should.be.true();
    });
});