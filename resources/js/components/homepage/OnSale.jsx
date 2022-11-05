//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
//import Button from "react-bootstrap/Button";
//import { Container } from "react-bootstrap";
//import Slider from "react-slick";
import Carouse from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import BookCard from "../produce/BookCard";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
  };
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
                    {/* <Carousel variant="dark" className=" border border-2 rounded" >
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
                    </Carousel> */}
                    <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"

                    >
                       <Card>
                            <Card.Text>Book1</Card.Text>
                       </Card>
                       <Card>
                            <Card.Text>Book2</Card.Text>
                       </Card> <Card>
                            <Card.Text>Book3</Card.Text>
                       </Card> <Card>
                            <Card.Text>Book4</Card.Text>
                       </Card> <Card>
                            <Card.Text>Book</Card.Text>
                       </Card> <Card>
                            <Card.Text>Book1</Card.Text>
                       </Card>

                    </Carousel>
                </div>
            </div>
        );
    }
}
export default OnSale;
