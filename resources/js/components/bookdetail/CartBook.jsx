import { Card, CardGroup, Container, Row } from "react-bootstrap";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { useState } from "react";
export default function CartBook() {
    const [quantity, setQuantity] = useState(0);
    return (
        <Container>
            <CardGroup fluid="">
                <Card>
                    <Card.Header>
                        <Card.Text>
                            <span
                                className="
                            text-muted
                            fs-4
                            fw-light
                            text-decoration-line-through"
                            >
                                4.99$
                            </span>
                            <span
                                className="
                            fw-bold
                            fs-2"
                            >
                                2.99$
                            </span>
                        </Card.Text>
                    </Card.Header>
                    <Card.Body>
                    <p className=" ">Quantity</p>
                    <div className="d-flex  justify-content-center">
                        <button className="btn btn-outline-dark" onClick={() => setQuantity(quantity > 1 ? (quantity - 1) : 1)}> - </button>
                        <div className="bg-light btn-lg text-white">
                            <label className=" mt-1 text-dark btn "> {quantity} </label>
                        </div>
                        <button className="btn btn-lg btn-outline-dark" onClick={() => setQuantity(quantity < 8 ? (quantity + 1) : 8)}> + </button>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary" >Add to cart</button>
                    </div>
                </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}
