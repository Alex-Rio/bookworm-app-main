import { Component, useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterShop from "./FilterShop";
import axios from "axios";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

//import NavDropdown from "react-bootstrap/NavDropdown";
import BtnSort from "./BtnSort";
import ListBooks from "../listBooks/ListBooks";
//import ListBooks from "../listBooks/ListBooks";
export default function ShopPageBody() {
    const [booksData,setBooksData] = useState([])
    const popularChange=()=>{
        const baseUrl =
        'http://127.0.0.1:8000/api/books/filter?show=15&sort=popular&page=1';

            axios
                .get(baseUrl)
                .then((response) => {
                    const topShow = response.data.data;

                    setBooksData(topShow);
                })
                .catch((error) => console.error(`Error: ${error}`));

    }
    const baseUrl =
        'http://127.0.0.1:8000/api/books/filter?show=15&sort=desc&page=1';
        useEffect(() => {
            axios
                .get(baseUrl)
                .then((response) => {
                    const topShow = response.data.data;

                    setBooksData(topShow);
                })
                .catch((error) => console.error(`Error: ${error}`));
        }, []);
    const onSale=()=>{
        const baseUrl =
        'http://127.0.0.1:8000/api/books/filter?show=15&sort=sale&page=1';

            axios
                .get(baseUrl)
                .then((response) => {
                    const topShow = response.data.data;
                    setBooksData(topShow)
                    console.log(topShow)
                })
                .catch((error) => console.error(`Error: ${error}`));
        };

    return (
        <>
            <Container>
                <div className="border-bottom border-4 border-dark">
                    <h1 className="d-inline">Books</h1>
                    <h3 className="fw-light d-inline">
                        (Filter by Category#1)
                    </h3>
                </div>
                <Row className="mt-5">
                    <Col md={2}>
                        <FilterShop />
                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={2}>
                                <p className="fs-2 boil">Books</p>
                            </Col>
                            <Col md={10} className="text-end">
                                <div>
                                    <div>
                                        {[DropdownButton].map(
                                            (DropdownType, idx) => (
                                                <DropdownType
                                                    as={ButtonGroup}
                                                    key={idx}
                                                    id={`dropdown-button-drop-${idx}`}
                                                    size="sm"
                                                    variant="secondary"
                                                    title="Sort by on sale"
                                                >
                                                    <Dropdown.Item
                                                        onClick={onSale}
                                                        eventKey="1"
                                                    >
                                                        Sort by on sale
                                                    </Dropdown.Item>
                                                    <Dropdown.Item onClick={popularChange} eventKey="2">
                                                        Sort by popular
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="3">
                                                        Sort by price: low to
                                                        high
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="4">
                                                        Sort by price: high to
                                                        low
                                                    </Dropdown.Item>
                                                </DropdownType>
                                            )
                                        )}
                                        {[DropdownButton].map(
                                            (DropdownType, idx) => (
                                                <DropdownType
                                                    as={ButtonGroup}
                                                    key={idx}
                                                    id={`dropdown-button-drop-${idx}`}
                                                    size="sm"
                                                    variant="secondary"
                                                    title="Show"
                                                >
                                                    <Dropdown.Item eventKey="1">
                                                        5
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">
                                                        10
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="3">
                                                        15
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="4">
                                                        20
                                                    </Dropdown.Item>
                                                </DropdownType>
                                            )
                                        )}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <ListBooks book={booksData}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
