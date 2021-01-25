import './Button.css'

function Button(props) {
  return (
    <button id="Button" className={props.color} onClick={props.onClick}>
        {props.name}
    </button>
  );
}

export default Button;
