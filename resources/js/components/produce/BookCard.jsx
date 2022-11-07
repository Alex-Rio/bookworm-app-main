import React from "react";
import  Card from "react-bootstrap/Card";
 import ListGroup  from "react-bootstrap/ListGroup";
//import IMAGES from "../../assets/bookcover/images";
import IMAGES from "../../../assets/bookcover/Images";

export default function BookCard(props) {
    // console.log(props);
    const { book } = props;

    return (
        <div className="col-3 justify-content-center mt-1 ml-1">
            <Card>
                <Card.Img
                    variant="top"
                    src={IMAGES[book.book_cover_photo]}
                    alt="image1"
                    height={"300px"}
                />
                <Card.Body>
                    <Card.Title>{book.book_title}</Card.Title>
                    <Card.Text style={{ fontSize: "12px" }}>
                        {book.author_name}
                    </Card.Text>

                </Card.Body>
                <Card.Footer variant="flush">
                    <ListGroup.Item>
                        <del style={{ fontSize: "12px" }}>{book.discount_price ? "$"+book.book_price : ""}</del>{" "}
                        <b>{book.discount_price ? "$" + book.discount_price : "$" + book.book_price}</b>
                    </ListGroup.Item>
                </Card.Footer>
            </Card>

        </div>
    );
}
