import { useState } from 'react';
import { Container, Row, Col } from '../components/Grid';
import ProjectCard from '../components/Card';
import projectData from '../projects.json/';


function ProjectGallery() {
    const [projects, setProjects] = useState(projectData);

    const removeProject = (id) => {
        const newProjects = projects.filter((project) => project.id !== id);
        setProjects(newProjects);
    }

    return (
        <>
            <Container>
                <Row position="justify-content-center gap-4 my-5">
                    
                        {projects.map((project) => (
                            <ProjectCard 
                                removeProject = {removeProject}
                                id = {project.id}
                                key = {project.id}
                                title = {project.title}
                                image = {project.image}
                                description = {project.description}
                                deployedURL = {project.deployedURL}
                                githubURL = {project.githubURL}
                            />
                        ))}
                        
                    
                </Row>
            </Container>
        </>
    )
}

export default ProjectGallery;