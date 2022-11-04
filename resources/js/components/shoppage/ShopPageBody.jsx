import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterShop from "./FilterShop";
//import NavDropdown from "react-bootstrap/NavDropdown";
import BtnSort from "./BtnSort";
import ListBooks from "../listBooks/ListBooks";
class ShopPageBody extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="border-bottom border-4 border-dark">
                        <h1 className="d-inline">Books</h1><h3 className="fw-light d-inline">(Filter by Category#1)</h3>
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
                            <Col md={10} className='text-end'>
                                <div>
                                    <BtnSort/>
                                </div>
                            </Col>
                        </Row>
                        <di>
                            <ListBooks/>
                        </di>
                        </Col>

                    </Row>

                </Container>
            </>
        );
    }
}
export default ShopPageBody;
