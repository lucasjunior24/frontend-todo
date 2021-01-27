import './Button.css'

function Button(props) {
  if(props.hide) {
    return null
  } else {
    return (
      <button id="Button" className={props.color} onClick={props.onClick}>
          {props.name}
      </button>
    );
  }
}

export default Button;
