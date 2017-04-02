import {todoListPageObject} from '../pages/todo-list.po';

describe('test1', () => {

  beforeEach(() => {
    todoListPageObject.go();
  });

  it('should have the correct title', () => {
    browser.getTitle().should.eql('Webpack-React-Typescript-boilerplate');
  });

  it('should have a list of todo items', async() => {
    let items = await todoListPageObject.getListItems();
    items.value.length.should.eql(4);
  });

  it('should have correct name on each todo item', async() => {
    todoListPageObject.itemExists('test1').should.be.true();
    todoListPageObject.itemExists('test2').should.be.true();
    todoListPageObject.itemExists('test3').should.be.true();
    todoListPageObject.itemExists('test4').should.be.true();
  });
});