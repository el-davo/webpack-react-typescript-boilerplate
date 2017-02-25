import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { List, ListItem } from 'material-ui/List';
import { TodoListComponent } from './todo-list.component';
import { todo } from '../todo.state';

describe('<TodoListComponent />', () => {

    describe('populated list', () => {

        let wrapper;

        beforeEach(() => {
            todo.todoList = [{}, {}, {}];
            wrapper = shallow(<TodoListComponent todo={todo}/>);
        });

        it('should contain a list of todo items', () => {
            wrapper.find(List).should.have.length(1);
            wrapper.find(ListItem).should.have.length(3);
        });

    });

});