import Button from '../components/Button'
import './TodoForm.css'

function TodoForm() {
  return (
    <div className="TodoForm">
        <input>
        
        </input>
        <div className="butoes">
          <Button color='salvar' name='salvar' />
          <Button color='pesquisar' name='pesquisar' />
          <Button color='limpar' name='limpar' />
        </div>

    </div>
  );
}

export default TodoForm;
