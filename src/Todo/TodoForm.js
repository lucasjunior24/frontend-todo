import Button from '../components/Button'
import './TodoForm.css'

function TodoForm(props) {
  return (
    <div className="TodoForm">
        <input placeholder="Adicione uma tarefa..." 
          value={props.description}
          onChange={props.handleChange}
           />
        <div className="butoes">
          <Button color='salvar' name='Salvar' onClick={props.handleAdd} />
          {/* <Button color='pesquisar' name='Pesquisar' onClick={props.handleSearch}  /> */}
          {/* <Button color='limpar' name='Limpar' onClick={props.handleClear} /> */}
        </div>

    </div>
  );
}

export default TodoForm;
