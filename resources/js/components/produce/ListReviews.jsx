import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useState,useEffect } from "react";
export default  function CustomerReview(){
    const [productId, setProductId] = useState(
        localStorage.getItem("productId")
    );

    const [productDetail,setProduct]=useState()
    const baseUrl = `http://127.0.0.1:8000/api/books/${productId}/reviews`;
    useEffect(() => {
        try{
            localStorage.removeItem("productId")
        }catch(error){

        }
        axios
            .get(baseUrl)
            .then((response) => {
                console.log(response.data.book)
                const topDiscount = response.data;

                setProduct(response.data.book);
            })
            .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return(
    <div>
        <Container>
          <Row> <b className="fs-3 mt-4">Customer Reviews</b></Row>
          <Row>
            <Row> <div className="fs-2 mt-2">
                  <b> Number  </b>
                  <b> Star</b>
                </div>
            </Row>
            <Row>
                <Col >
                <span className=""> (Reviews) </span><span>|</span>

                <span> 5 star ()</span><span>|</span>
                <span> 4 star ()</span><span>|</span>
                <span> 3 star ()</span><span>|</span>
                <span> 2 star ()</span><span>|</span>
                <span> 1 star ()</span><span>|</span>

                </Col>
            </Row>
          </Row>
          <Row className="mt-3" >
            <Col>
                <p> Show 1-12 of 3412 reviews </p>
            </Col>
            <Col>

            </Col>
          </Row>
          <Row>
            <Card border="secondary" className=" pb-2 mt-3 border border-2  border-top-0 border-end-0 border-start-0">
                <Card.Title><b>Title Reviews</b> <span>| Star</span></Card.Title>
                <Card.Text> </Card.Text>
            </Card>
          </Row>
        </Container>
    </div>)

}
