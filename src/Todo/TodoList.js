import Button from "../components/Button"

import './TodoList.css'

function TodoList(props) {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={`tarefas ` + (todo.done ? 'markedAsDone' : '')}>{todo.description}</td>
        <td className='acoes'>
          <Button color='realizar' name='Realizar' hide={todo.done} onClick={() => props.handleMarkAsDone(todo)} />
          <Button color='desfazer' name='Desfazer' hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)} />
          <Button color='excluir' name='Excluir' hide={!todo.done} onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    )) 
  }
  return (
    <table>
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
  );
}

export default TodoList;
