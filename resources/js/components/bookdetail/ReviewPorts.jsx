import { Card, Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
export default function ReviewsCustomer() {
    return (
        <Container>
            <Card>
                <Card.Header>
                    <b className="fs-bold"> Write a Review</b>
                </Card.Header>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add a title</Form.Label>
                        <Form.Control type="text" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Details please! Your review helps other shopper
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select a rating star</Form.Label>
                        <FloatingLabel>
                            <Form.Select>
                                <option value="1">1 Star</option>
                                <option value="2">2 Star</option>
                                <option value="3">3 Star</option>
                                <option value="4">4 Star</option>
                                <option value="5">5 Star</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <div className="justify-content-center">
                        <Button variant="secondary" type="submit">
                            Submit Review
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
