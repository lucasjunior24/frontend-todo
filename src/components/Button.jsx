import './Button.css'

function Button(props) {
  return (
    <button id="Button" className={props.color}>
        {props.name}
    </button>
  );
}

export default Button;
