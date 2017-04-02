import {Card, CardText} from 'material-ui/Card';
import * as React from 'react';
import {LoadingComponent} from '../common/loading.component';
import {TodoListComponent} from './list/todo-list.component';
import {TodoState} from './todo.state';

interface Props {
  todo: TodoState;
  fetchTodoList();
}

export class TodoComponent extends React.Component<Props, any> {

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
                <TodoListComponent todo={this.props.todo}/>
              ) : (
                <LoadingComponent />
              )
          }
        </CardText>
      </Card>
    );
  }
}
