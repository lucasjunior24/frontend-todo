import TodoForm from './TodoForm'
import TodoList from './TodoList'

import { Component } from 'react'

import axios from 'axios'

// const local = 'http://localhost:3003/api/todos'
const URL = "https://lista-tarefa-b.herokuapp.com/todos"

export default class Todo extends Component {
  
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    // handleChange = lidar com a mudanca 
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

    this.handleRemove = this.handleRemove.bind(this)
    this.marcarComoPendente = this.marcarComoPendente.bind(this)
    this.marcarComoConcluido = this.marcarComoConcluido.bind(this)

    this.refresh()
  }

  refresh() {
    axios.get(`${URL}`)
      .then(resp => this.setState({ ...this.state, description: '', list: resp.data.data }))
  }
  
  handleChange(e) {
    this.setState({...this.state, description: e.target.value }) // valor do input vai pra description
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp => this.refresh()) 
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh())
  }

  marcarComoConcluido(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh())
  }

  marcarComoPendente(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh())
  }
  
  render() {
    return (
      <div className="App">
        <TodoForm 
          description={this.state.description} 
          handleChange={this.handleChange}
          handleAdd={this.handleAdd} 
         
          />
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove} 
          marcarComoConcluido={this.marcarComoConcluido}
          marcarComoPendente={this.marcarComoPendente}
          />
      </div>
    );
  }
}

