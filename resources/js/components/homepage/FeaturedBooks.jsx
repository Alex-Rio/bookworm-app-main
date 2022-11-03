import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListBooks from "../listBooks/ListBooks";
class FearturedBooks extends Component{
    render(){
        return (
            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="recommended" title="Recommended">
                <ListBooks/>
            </Tab>
            <Tab eventKey="popular" title="Popular">
                <ListBooks/>
            </Tab>
          </Tabs>
        );
    }
}
export default FearturedBooks;
