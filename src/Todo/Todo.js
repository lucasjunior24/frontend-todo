import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {Component} from 'react'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    
    this.reflesh()
  }
  reflesh() {
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value }) // valor do input vai pra description
  }
  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp => this.reflesh()) 
  }
  render() {
    return (
      <div className="App">
        <TodoForm description={this.state.description} 
          handleChange={this.handleChange}
          handleAdd={this.handleAdd} />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

