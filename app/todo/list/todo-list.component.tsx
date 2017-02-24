import * as React from 'react';
import { todoState } from '../todo.state';
import { Card, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TodoItemIcon from 'material-ui/svg-icons/action/today';

interface props {
    todo: todoState;
}

export class TodoListComponent extends React.Component<props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <List>
                {
                    this.props.todo.todoList.map((todo, key) => {
                        return <ListItem key={key}
                            primaryText={todo.name}
                            secondaryText={todo.description}
                            leftAvatar={<Avatar icon={<TodoItemIcon />} />}
                         />
                    })
                }
            </List>
        )
    }
}