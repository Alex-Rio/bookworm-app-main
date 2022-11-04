//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import React, { Component } from "react";
import imgBook1 from "../../../assets/bookcover/book1.jpg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
//import Button from "react-bootstrap/Button";
//import { Container } from "react-bootstrap";
//import Slider from "react-slick";

class OnSale extends Component {
    render() {
        return (
            <div className="">
                <div className="mt-4">
                    <div className="wrapper">
                        <h2>On Sale</h2>
                        <div className="right-button">
                            <a className="btn btn-secondary" href="/">
                                View All <i class="fa-solid fa-caret-right"></i>
                            </a>
                        </div>

                    </div>
                    <Carousel variant="dark" className=" border border-2 rounded" >
                        <Carousel.Item >
                            <CardGroup className="box">
                            <Card >
                                <Card.Img variant="top"  src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                        <Card.Text>Author Name</Card.Text>
                                    <Card.Footer>

                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>

                                    <Card.Footer>

                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>

                                    <Card.Footer>

                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                            </CardGroup>
                        </Carousel.Item>
                        <Carousel.Item >
                        <CardGroup className="box">
                            <Card>
                                <Card.Img variant="top"  src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>

                                    <Card.Footer> <del>$Original</del> $Price </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>

                                    <Card.Footer> <del>$Original</del> Price </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>
                                    <Card.Footer> <del>$Original</del> Price </Card.Footer>
                                </Card.Body>
                            </Card>
                            </CardGroup>
                        </Carousel.Item>
                        <Carousel.Item >
                        <CardGroup className="box">
                            <Card>
                                <Card.Img variant="top"  src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>
                                    <Card.Footer> <del>$Original</del> Price </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>
                                    <Card.Footer> <del>$Original</del> Price </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={imgBook1}/>
                                <Card.Body>
                                    <Card.Title>
                                        Name Book
                                    </Card.Title>
                                    <Card.Text>Author Name</Card.Text>
                                    <Card.Footer> <del>$Original</del> Price </Card.Footer>
                                </Card.Body>
                            </Card>
                            </CardGroup>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default OnSale;
