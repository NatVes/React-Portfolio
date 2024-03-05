import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import projectData from "../../projects.json";
import { Container, Row, Col } from "../Grid";

function ProjInfo() {
        const { id } = useParams();
        const project = projectData.find(project => project.id === id);
        return (
        <>
        <Container>
            <Row>
                <img src={project.image} alt={project.title} width={"100%"} height={"500px"} />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <Link to="/project-gallery">
                    <button className="btn btn-primary">
                        Close
                    </button>
                </Link>
            </div>
            </Row>

        </Container>
        
        </>
    )
}

export default ProjInfo;