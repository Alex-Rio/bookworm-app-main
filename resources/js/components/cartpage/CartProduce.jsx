import { Container, Table } from "react-bootstrap";
import React from "react";
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
            <td>1</td>
            <td></td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
       </Container>
    );
}
