import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterShop from "./FilterShop";
import NavDropdown from "react-bootstrap/NavDropdown";
class ShopPageBody extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={2}>
                            <FilterShop />
                        </Col>
                        <Col md={2}>
                            <a>Showing 1-12 of 125 books</a>
                        </Col>
                        <Col className="justify-content-md-center" sm={4}>
                        <NavDropdown className="border d-flex" title="Dropdown" id="nav-dropdown" >
                                <NavDropdown.Item eventKey="4.1">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">
                                    Something else here
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default ShopPageBody;
