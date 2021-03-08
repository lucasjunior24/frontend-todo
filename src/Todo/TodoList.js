import React from "react";
import "./TodoList.css";

const TodoList = props => {
  function renderRows() {
    const list = props.list || []
    return list.map(todo => (
        <tr key={todo._id}>
          <td className='tarefas'>{todo.description}</td>
          <td className='acoes' ><button className='remover' onClick={() => props.handleRemove(todo)}>Remover</button></td>
        </tr>
      )
    ) 
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

export default TodoList