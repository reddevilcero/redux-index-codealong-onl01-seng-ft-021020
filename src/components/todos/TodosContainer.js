import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

export class TodosContainer extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <div>
        {this.props.todos.map((todo, id) => (
          <Todo key={id}>{todo}</Todo>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
