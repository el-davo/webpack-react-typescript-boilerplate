import * as React from 'react';
import { todoState } from './todo.state';
import { Card, CardText } from 'material-ui/Card';
import { TodoListComponent } from './list/todo-list.component';

interface props {
  todo: todoState;
  fetchTodoList();
}

export class TodoComponent extends React.Component<props, any> {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchTodoList();
  }

  render() {
    return (
      <Card>
        <CardText>
          {
            !this.props.todo.isFetchingTodos ? (
              <TodoListComponent todo={this.props.todo} />
            ) : (
              <div>Loading...</div>
            )
          }
        </CardText>
      </Card>
    )
  }
}