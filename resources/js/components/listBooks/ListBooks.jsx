import axios from "axios";
import React, { Component,useEffect } from "react";
import IMAGES from "../../../assets/bookcover/Images";
import BookCard from "../produce/BookCard";

export default function ListBooks (booksData) {

        return (
          <div className="row">
            {/* {booksData.book.map((book,index)=>{
                return (
                    <BookCard key={index} book={book}/>
                )
            }
            )} */}
          </div>
        );
    }

