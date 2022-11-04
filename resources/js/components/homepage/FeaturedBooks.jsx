import React, { Component } from "react";
import { Button } from "react-bootstrap";
//import Tab from 'react-bootstrap/Tab';
//import Tabs from 'react-bootstrap/Tabs';
//import ListBooks from "../listBooks/ListBooks";
class FearturedBooks extends Component{
    render(){
        return (
           <>
            <div className="d-inline mx-2">
            <Button variant="secondary">Recommended</Button>
            </div >
            <div className="d-inline mx-2">
            <Button variant="secondary">Popular</Button>
            </div>
           </>
        );
    }
}
export default FearturedBooks;
