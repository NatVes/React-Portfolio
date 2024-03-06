import { Row } from '../components/Grid';
import ProjectCard from '../components/Card';
import projectData from '../projects.json/';


function ProjectGallery() {

    return (
        <>
            <Row position="justify-content-center gap-4 my-5 mx-0">
                <h2 className='text-center'>PROJECT GALLERY</h2>
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
        </>
    )
}

export default ProjectGallery;