import { Container, Row, Col } from '../components/Grid';
import Form from '../components/Form';

function Contact() {
    return (
        <div>
            <Container>
                <Row position="justify-content-center">
                    <Col size="md-6" >
                        
                        <Form />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;