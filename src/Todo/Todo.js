import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {Component} from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

