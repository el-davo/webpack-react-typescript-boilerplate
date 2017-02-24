import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './todo.actions';
import {todoState} from './todo.state';
import {TodoComponent} from './todo.component';

interface props {
    todo: todoState;
    actions: actions;
}

interface actions {
  fetchTodoList();
}

const TodoContainer: React.StatelessComponent<props> = props => {
  return (
    <TodoComponent todo={props.todo} fetchTodoList={props.actions.fetchTodoList}/>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    todo: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  };
}

export default connect<{}, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);