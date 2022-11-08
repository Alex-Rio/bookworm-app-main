import { Card, Col, Container, Row } from "react-bootstrap";

export default  function CustomerReview(){
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
                <Card.Text> adjoadpassjapdajdoadjasodadasjdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Card.Text>
            </Card>
          </Row>
        </Container>
    </div>)

}
