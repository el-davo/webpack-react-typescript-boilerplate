import {shallow} from 'enzyme';
import {List, ListItem} from 'material-ui/List';
import * as React from 'react';
import {todo} from '../todo.state';
import {TodoListComponent} from './todo-list.component';

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
