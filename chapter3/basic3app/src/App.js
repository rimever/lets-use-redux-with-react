import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo,deleteTodo} from "./actions/todoActions";

class App extends Component{
  clickAddTodo() {
    this.props.addTodo("New Todo");
  }
  clickDeleteTodo(id) {
    this.props.deleteTodo(id);
  }

  render() {
    return (
        <div>
          <button onClick={this.clickAddTodo.bind(this)}>Add Todo</button>
          <ul>
            {
              this.props.todos.map((todo) => {
                return (
                    <li key={todo.id}>{todo.id} {todo.text}
                      <button onClick={this.clickDeleteTodo.bind(this,todo.id)}>DEL</button>
                    </li>
                )
              })
            }
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos:state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)