class TodoListPageObject {

  go() {
    browser.url('/');
  }

  async getListItems() {
    return browser.elements('.todo-item');
  }

  itemExists(name: string) {
    return browser.isExisting(`div*=${name}`);
  }
}

export const todoListPageObject = new TodoListPageObject();