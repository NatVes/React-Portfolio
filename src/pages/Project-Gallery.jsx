import { useState } from 'react';
import { Container, Row, Col } from '../components/Grid';
import ProjectCard from '../components/Card';
import projectData from '../projects.json/';
import ProjInfo from '../components/ProjInfo';

function ProjectGallery() {

    return (
        <>
            <Container>
                    <Row position="justify-content-center gap-4 my-5">
                        {projectData.map((project) => (
                            <ProjectCard 
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