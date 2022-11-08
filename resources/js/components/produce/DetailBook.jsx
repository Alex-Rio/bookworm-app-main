import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import imgBook1 from "../../../assets/bookcover/book1.jpg";
import "./DetailBook.css"
import axios from "axios";
import IMAGES from "../../../assets/bookcover/Images";
export default function DetailBook() {
 //const
    return (

        <div className="wrapper-book-detail">
            <div className="img-author">
                <img src={imgBook1}
                 alt="img-something"
                 width="300px"
                 height='450px' />
                <p>By <b>Author Ana</b></p>
            </div>
            <div className="content-book">
                <h4>Book title</h4>
                <p className="text-break">sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}
