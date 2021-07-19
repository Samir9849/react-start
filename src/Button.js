function Button(props) {
    return ( <div onClick={props.buttonClick} className="button"> {props.buttonTxt}</div>)

    }
    export default Button;