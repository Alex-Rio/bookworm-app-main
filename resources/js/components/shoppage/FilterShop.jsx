import { Component } from "react";
import { Accordion } from "react-bootstrap";
 class FilterShop extends Component{
    render(){
        return(
       <>
        <p className="fw-bold">
            Filter By
        </p>
        <Accordion className="border mt-3 shadow-sm" defaultActiveKey='0' flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header><b> Category</b></Accordion.Header>
                <Accordion.Body>
                    Category_name
                </Accordion.Body>
                <Accordion.Body>
                    Category #1
                </Accordion.Body>
                <Accordion.Body>
                    Category #2
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header><b>Author</b></Accordion.Header>
                <Accordion.Body>
                    Author_name
                </Accordion.Body>
                <Accordion.Body>
                    Author #1
                </Accordion.Body>
                <Accordion.Body>
                    Author #2
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header><b>Rating Review</b></Accordion.Header>
                <Accordion.Body>
                    1 Star
                </Accordion.Body>
                <Accordion.Body>
                    2 Star
                </Accordion.Body>
                <Accordion.Body>
                    3 Star
                </Accordion.Body>
                <Accordion.Body>
                    4 Star
                </Accordion.Body>
                <Accordion.Body>
                    5 Star
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
       </>

        );
    }
 }
export default FilterShop;
