import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import imgBook1 from "../../../assets/bookcover/book1.jpg";
import "./DetailBook.css";
import axios from "axios";
import IMAGES from "../../../assets/bookcover/Images";
import { useEffect, useState } from "react";
export default function DetailBook() {
    const [productDetail,setProduct]=useState()
    const baseUrl = `http://127.0.0.1:8000/api/books/${productId}/reviews`;
    useEffect(() => {
        try{
            localStorage.removeItem("productId")
        }catch(error){

        }
        axios
            .get(baseUrl)
            .then((response) => {
                console.log(response.data.book)
                const topDiscount = response.data;

                setProduct(response.data.book);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="wrapper-book-detail">
            <div className="img-author">
                <img

                    src= {IMAGES[productDetail?productDetail.book_cover_photo:""]}
                    alt="img-something"
                    width="300px"
                    height="450px"
                />
                <p>
                    By <b>{productDetail?productDetail.author.author_name:""}</b>
                </p>
            </div>
            <div className="content-book">
                <h4> {productDetail?productDetail.book_title:""}</h4>
                <p className="text-break">
                    {productDetail?productDetail.book_summary:""}
                </p>

            </div>
        </div>
    );
}
