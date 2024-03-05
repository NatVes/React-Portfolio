import { Link } from 'react-router-dom';
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="card col-5 p-0">
            <div className="img-container">
                <img className="card-img-top" src={props.image} alt={props.title}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5> 
                <Link to={`/project-gallery/${props.id}`}>
                    <button className="btn btn-primary">
                        Open
                    </button>
                </Link>
                    
            </div>
        </div>
    )
}

export default ProjectCard;