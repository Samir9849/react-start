import './block.css'
import Button from './Button'

function Block(props) {
    console.log(props);
    return ( 
    <div className="block-container"> 
        <h1>{props.header}</h1>
        <div>{props.body}</div>
        <Button buttonTxt={props.buttonTxt}buttonClick={props.buttonClick}/>

    </div>
    )
};

export default Block;