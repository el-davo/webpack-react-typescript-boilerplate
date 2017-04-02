import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import TodoItemIcon from 'material-ui/svg-icons/action/today';
import * as React from 'react';
import {TodoState} from '../todo.state';

interface Props {
  todo: TodoState;
}

export class TodoListComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <List>
        {
          this.props.todo.todoList.map((todo, key) => {
            return (
              <ListItem key={key}
                        className="todo-item"
                        primaryText={todo.name}
                        secondaryText={todo.description}
                        leftAvatar={<Avatar icon={<TodoItemIcon />} />}
              />
            );
          })
        }
      </List>
    );
  }
}
