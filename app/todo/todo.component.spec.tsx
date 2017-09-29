import {mount} from 'enzyme';
import {Card, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {spy} from 'sinon';
import {LoadingComponent} from '../common/loading.component';
import {TodoListComponent} from './list/todo-list.component';
import {TodoComponent} from './todo.component';
import {todo} from './todo.state';

describe('<TodoComponent />', () => {

  let fetchTodoListSpy;

  beforeEach(() => {
    fetchTodoListSpy = spy();
  });

  describe('fetching todo items', () => {

    let wrapper;

    beforeEach(() => {
      todo.isFetchingTodos = true;
      wrapper = mount(<MuiThemeProvider><TodoComponent todo={todo}
                                                       fetchTodoList={fetchTodoListSpy}/></MuiThemeProvider>);
    });

    it('should display a loading message and hide the list of todo items', () => {
      wrapper.find(LoadingComponent).should.have.length(1);
      wrapper.find(TodoListComponent).should.have.length(0);
    });
  });

  describe('list populated', () => {

    let wrapper;

    beforeEach(() => {
      todo.isFetchingTodos = false;
      wrapper = mount(<MuiThemeProvider><TodoComponent todo={todo}
                                                       fetchTodoList={fetchTodoListSpy}/></MuiThemeProvider>);
    });

    it('should display a card', () => {
      wrapper.find(Card).should.have.length(1);
      wrapper.find(CardText).should.have.length(1);

      fetchTodoListSpy.callCount.should.equal(1);
    });

    it('should display a list of todo items', () => {
      wrapper.find(TodoListComponent).should.have.length(1);
      wrapper.find(LoadingComponent).should.have.length(0);
    });

  });

});
