import axios from "axios";
import React, { Component,useEffect } from "react";
import IMAGES from "../../../assets/bookcover/Images";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function RecommendBooks(){
    const [recommend, setRecommend] = React.useState([]);
    const baseUrl =
        "http://127.0.0.1:8000/api/books/filter?show=8&sort=recommend";
        useEffect(() => {
            axios
                .get(baseUrl)
                .then((response) => {
                    const topRecommend = response.data.data;

                    setRecommend(topRecommend);
                })
                .catch((error) => console.error(`Error: ${error}`));
        }, []);

        return (
            <div className="row">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                            {
                                recommend.map((book, index)=>(
                                        <Grid item xs={3} key={index}>
                                        <div className="book ps-3 m-2" >
                                            <Card className="" >
                                                <Card.Img
                                                    variant="top"
                                                    src={IMAGES[book.book_cover_photo]}
                                                    alt=""
                                                    height={"350px"}
                                                />
                                                <Card.Body className="m-2 row" >
                                                    <div className="col">
                                                    <Card.Text className="row d-block"  style={{ fontSize: "10px" }}>
                                                        <b className="fs-5"> {book.author.author_name} </b>
                                                        </Card.Text>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="m-2 row" variant="flush">
                                                    <ListGroup.Item className="">
                                                        <p>{book.book_price} $</p>
                                                    </ListGroup.Item>
                                                </Card.Footer>
                                            </Card>
                                        </div>
                                    </Grid>
                                ))
                            }
                            </Grid>
                        </Box>

         </div>
        );
    }


