import {todoListPageObject} from '../pages/todo-list.po';

describe('test1', () => {

  beforeEach(() => {
    todoListPageObject.go();
  });

  it('should have the correct title', () => {
    browser.getTitle().should.eql('Webpack-React-Typescript-boilerplate');
  });

  it('should have a list of todo items', async() => {
    const items = await todoListPageObject.getListItems();
    items.value.length.should.eql(2);
  });

  it('should have correct name on each todo item', async() => {
    todoListPageObject.itemExists('Todo 1').should.be.true();
  });

});
