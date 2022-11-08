import axios from "axios";
import React, { Component,useEffect } from "react";
import IMAGES from "../../../assets/bookcover/Images";



export default function ListBooks () {
    const [show, setShow] = React.useState([]);
    const baseUrl =
        "http://127.0.0.1:8000/api/books/filter?show=15?s";
        useEffect(() => {
            axios
                .get(baseUrl)
                .then((response) => {
                    const topShow = response.data.data;
                    console.log(topShow);
                    setRecommend(topShow);
                })
                .catch((error) => console.error(`Error: ${error}`));
        }, []);
        return (
          <div>

          </div>
        );
    }

