import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './todo.actions';
import {TodoComponent} from './todo.component';
import {TodoState} from './todo.state';

interface Props {
  todo: TodoState;
  actions: Actions;
}

interface Actions {
  fetchTodoList();
}

const TodoContainer: React.StatelessComponent<Props> = (props) => {
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
