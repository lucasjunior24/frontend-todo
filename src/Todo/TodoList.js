import Button from "../components/Button"

import './TodoList.css'

function TodoList(props) {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className='tarefas'>{todo.description}</td>
        <td className='acoes'>
          <Button color='excluir' name='Excluir' />
          <Button color='editar' name='Editar' />
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
