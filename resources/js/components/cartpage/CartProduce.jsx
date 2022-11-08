import { Container, Table } from "react-bootstrap";
import React from "react";
import IMAGES from "../../../assets/bookcover/Images";
export default function CartProduce(){
    return(
       <Container className="">
         <Table striped = "columns">
        <thead>
          <tr>
            <th>Produce</th>
            <th>Price</th>
            <th>Quanity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>45.00</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>54.00</td>
            <td >1</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
       </Container>
    );
}
