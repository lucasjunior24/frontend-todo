import React from "react";

import { RiDeleteBin6Line, RiCheckboxCircleFill, RiIndeterminateCircleLine } from 'react-icons/ri'

import "./TodoList.css";

function TodoList(props) {
  function renderRows() {
    const list = props.list || []
    return list.map(todo => (
        <tr key={todo._id}>
          <td className={'tarefas '+ (todo.done ? 'markedAsDone' : '')}>{todo.description}</td>
          <td className='acoes' >
            {todo.done ? 
              <>
                <button className='remover' 
                  onClick={() => props.handleRemove(todo)}>
                  <RiDeleteBin6Line size={20} />
                </button>
                <button className='pendente' 
                onClick={() => props.marcarComoPendente(todo)}>
                  <RiIndeterminateCircleLine size={20} />
                </button> 
              </> :
              <button className='concluido' 
                onClick={() => props.marcarComoConcluido(todo)}>
                < RiCheckboxCircleFill size={20} />
              </button>
            }
          </td>
          
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