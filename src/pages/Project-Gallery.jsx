import { useState } from 'react';
import { Container, Row, Col } from '../components/Grid';
import ProjectCard from '../components/Card';
import projectData from '../projects.json/';
import ProjInfo from '../components/ProjInfo';

function ProjectGallery() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (projectId) => {
        const project = projectData.find((project) => project.id === projectId);
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <>
            {!selectedProject && (
                <Container>
                    <Row position="justify-content-center gap-4 my-5">
                        {projectData.map((project) => (
                            <ProjectCard 
                                openProject = {() => openProject(project.id)}
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
            )}  

            {selectedProject && (
                <Container>
                    <Row position="justify-content-center gap-4 my-5">
                    <ProjInfo
                        id = {selectedProject.id}
                        key = {selectedProject.id}
                        title={selectedProject.title}
                        image = {selectedProject.image}
                        description={selectedProject.description}
                        deployedURL={selectedProject.deployedURL}
                        githubURL={selectedProject.githubURL}
                        closeProject={closeProject}
                    />
                    </Row>
                </Container>
            )}          
        </>
    )
}

export default ProjectGallery;