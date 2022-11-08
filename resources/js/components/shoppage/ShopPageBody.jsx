import { Component, useState, useEffect } from "react";
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
    const [booksData, setBooksData] = useState([]);
    const popularChange = () => {
        const baseUrl =
            "http://127.0.0.1:8000/api/books/filter?show=15&sort=popular&page=1";

             axios
            .get(baseUrl)
            .then((response) => {
                const topShow = response.data.data;

                setBooksData(topShow);
            })
            .catch((error) => console.error(`Error: ${error}`));
    };
    const LowChange = () => {
        const baseUrl =
        "http://127.0.0.1:8000/api/books/filter?show=15&sort=asc";

    axios
        .get(baseUrl)
        .then((response) => {
            const topShow = response.data.data;
            setBooksData(topShow);
            console.log(topShow);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    const HighChange = () => {
        const baseUrl =
            "http://127.0.0.1:8000/api/books/filter?show=15&sort=desc&page=1";

        axios
            .get(baseUrl)
            .then((response) => {
                const topShow = response.data.data;
                setBooksData(topShow);
                console.log(topShow);
            })
            .catch((error) => console.error(`Error: ${error}`));

    };
    const baseUrl =
        "http://127.0.0.1:8000/api/books/filter?show=15&page=1";
        useEffect(() => {
        axios
            .get(baseUrl)
            .then((response) => {
                const topShow = response.data.data;

                setBooksData(topShow);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);
    const onSale = () => {
        const baseUrl =
            "http://127.0.0.1:8000/api/books/filter?show=15&sort=sale&page=1";

        axios
            .get(baseUrl)
            .then((response) => {
                const topShow = response.data.data;
                setBooksData(topShow);
                console.log(topShow);
            })
            .catch((error) => console.error(`Error: ${error}`));
    };
    const [sortValue, setSortValue] = useState("");
    const [pageValue, setPageValue] = useState("");
    const handleSelect = (e) => {
        console.log(e);
        setSortValue(e);
    };

    const handlePageValue = (e) => {
        console.log(e);
        setPageValue(e);
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
                {/* ================================================================================== */}
                <Row className="mt-5">
                    <Col md={2}>
                        <FilterShop />
                    </Col>
                    <Col md={10}>
                        <div className="row">
                            <Col md={2}>
                                <p className="fs-2 boil">Books</p>
                            </Col>
                            <div  className=" col text-end ">
                                <div className="row d-inline">
                                    <Dropdown
                                        className=" text-end p-2 d-inline"
                                        variant="secondary"
                                        id="dropdown-basic-button"
                                        alignRight
                                        onSelect={handleSelect}
                                    >
                                        <Dropdown.Toggle
                                            variant="secondary"
                                            id="dropdown-basic"
                                        >
                                            Sort By {sortValue}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                eventKey="Sort by on sale"
                                                onClick={onSale}
                                            >
                                                Sort by on sale
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                eventKey="Sort by popular"
                                                onClick={popularChange}
                                            >
                                                Sort by popular
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                eventKey="Sort by price: low to high"
                                                onClick={LowChange}
                                            >
                                                <p className="">
                                                    Sort by price: low to high
                                                </p>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                eventKey="Sort by price: high to low"
                                                onClick={HighChange}
                                            >
                                                <p className="">
                                                    Sort by price: high to low
                                                </p>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown
                                        className=" d-inline p-2 "
                                        onSelect={handlePageValue}
                                    >
                                        <Dropdown.Toggle
                                            variant="secondary"
                                            id="dropdown-basic"
                                        >
                                            Show {pageValue}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="25">
                                                Show 25
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="20">
                                                Show 20
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="15">
                                                Show 15
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="5">
                                                Show 5
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                            </div>
                        </div>
                        <div>
                            <ListBooks book={booksData} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
