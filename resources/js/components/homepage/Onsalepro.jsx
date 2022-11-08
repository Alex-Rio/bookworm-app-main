//import BookCard from "./../produce/BookCard.jsx";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Card, ListGroup } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import IMAGES from "../../../assets/bookcover/Images.js";
import React from "react";
import './stype.css';
import { useNavigate } from "react-router";
//import _ from 'lodash';
//import { then } from 'laravel-mix';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
export default function Onsalepro() {
    const [discount, setDiscount] = React.useState([]);
    const nagivate =useNavigate()

    const baseUrl =
        "http://127.0.0.1:8000/api/books/filter?show=10&sort=sale";
    useEffect(() => {
        axios
            .get(baseUrl)
            .then((response) => {
                const topDiscount = response.data.data;

                setDiscount(topDiscount);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    const detailClick =(event)=>{
        nagivate('/detail/'+event.currentTarget.id)

        localStorage.setItem("productId",event.currentTarget.id)
    }
//--------------------------------------------------------------------------
    return (
        <div className="m-2">
            <Carousel responsive={responsive}>
                {discount.map((book, index) => {
                    console.log(book.book_id)
                    return (

                        <div id={book.book_id} onClick={detailClick} className=" book ps-3 m-2 cardbook " key={index}>
                            <Card  className="" >
                                <Card.Img

                                    variant="top"
                                    src={IMAGES[book.book_cover_photo]}
                                    alt=""
                                    height={"300px"}
                                />
                                <Card.Body className="m-2 row" >
                                    <div className="col">
                                    <Card.Title className="text-break d-block" title={book.book_title}>{book.book_title}</Card.Title>
                                    <Card.Text className="row d-block"  style={{ fontSize: "10px" }}>
                                        <b> {book.author.author_name} </b>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="m-2 row" variant="flush">
                                    <ListGroup.Item className="">
                                        <del style={{ fontSize: "12px" }}>
                                            {book.book_price}
                                        </del>{" "}
                                        <b>{book.sub_price} $</b>
                                    </ListGroup.Item>
                                </Card.Footer>
                            </Card>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
