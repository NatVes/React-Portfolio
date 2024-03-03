
export function Container(props) {
    const position = props.position ? `${props.position}` : '';

    return <div className={`container-fluid ${position}`}>{props.children}</div>;
}

export function Row(props) {
    const position = props.position ? `${props.position}` : '';
    
    return <div className={`row ${position}`}>{props.children}</div>;
}

export function Col(props) {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    const position = props.position ? `${props.position}` : '';
    const display = props.display ? `${props.display}` : '';

    const classNames = `${size} ${display} ${position}`;

    return <div className={classNames}>{props.children}</div>;
}


