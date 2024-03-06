import { Container, Row, Col } from '../components/Grid';

function About() {
    return (
        <Container>
            <Row position="justify-content-center">
                <Col size="lg-8 md-9">
                    <br />
                    <h1>Hi! I'm Natalia</h1>
                    <p>
                        Experienced Civil Engineer specializing in residential projects, skilled in 3D modeling, CAD software, and well-versed in construction technology and architectural design. Completed training at an EDX coding boot camp, earning a certificate in front-end web development. A versatile professional with a unique mix of engineering knowledge and coding skills, ready to bring a valuable combination of technical expertise and creative problem-solving to any project or team.
                    </p>
                    <br />
                    <br />
                    <h2>TECHNICAL SKILLS</h2>
                    <p>Git/GitHub | HTML5 | CSS | jQuery | JavaScript | Bootstrap | ReactJS</p>
                    <br />
                </Col>
            </Row>
        </Container>
    )
}

export default About;