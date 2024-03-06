import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import projectData from '../projects.json/';
import { Container, Row, Col } from "../components/Grid";
// import "./style.css";

function ProjInfo() {
        const { id } = useParams();
        const project = projectData.find(project => project.id === id);
        return (
        <>
        <Container>
            <Row position="justify-content-center">
                <Col size="lg-9">
                    <h3 className="card-title text-center mb-4">{project.title}</h3>
                    <img className="mb-4 rounded" src={project.image} alt={project.title} width={'100%'}/>
                    <p>{project.description}</p>
                    <p>Link to the deployed version: <a href={project.deployedURL} target='_blank'>{project.deployedURL}</a></p>
                    <p>Link to the GitHub repository: <a href={project.githubURL} target='_blank'>{project.githubURL}</a></p>                 
                <div className="text-center">
                <Link to="/project-gallery" className='align-item-center'>
                        <button className="btn">
                            Close
                        </button>
                    </Link>
                </div>
                </Col>
            </Row>

        </Container>
        
        </>
    )
}

export default ProjInfo;