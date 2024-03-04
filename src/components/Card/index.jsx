import "./style.css";

function ProjectCard(props) {
    return (
        <div className="card col-4 p-0">
            <div className="img-container">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="card-body">
                <h5 class="card-title">{ props.title }</h5>     
                                    
            </div>
        </div>
    )
}

export default ProjectCard;