import { Container, Row, Col } from '../components/Grid';
import Form from '../components/Form';

function Contact() {
    return (
        <div>
            <Container>
                <Row position="justify-content-center">
                    <Col size="md-9" display="d-flex flex-column" position="justify-content-center">
                        <Form />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;