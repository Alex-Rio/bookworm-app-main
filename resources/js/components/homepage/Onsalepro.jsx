import BookCard from './../produce/BookCard.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import axios from "axios";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Card, ListGroup } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import _ from 'lodash';
const responsive = {

    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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
export default function Onsalepro(){
    return(
        <div></div>
    );
}

