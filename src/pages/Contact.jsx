import { Container, Row, Col } from '../components/Grid';
import Form from '../components/Form';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div>
            <Container>
                <Row position="justify-content-center">
                    <Col size="lg-5 md-8" >                        
                        <Form />
                        <div className="mt-5 hideCont">
                            <Footer />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;