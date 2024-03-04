import "./style.css";

function CardBtn(props) {
    return (
        <button 
            onClick={props.onClick} 
            className="btn btn-primary"
            // data-value={props["data-value"]} 
        />
    );
}

export default CardBtn;