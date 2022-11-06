import { Button, Container } from "react-bootstrap";

export default function CartTotal(){
    return(
        <Container className="border border-3">
            <div className="row text-center border-bottom">
                <b>Cart Totals</b>
            </div>
            <div className="row text-center fs-2 mt-4">
                <b>$ <b>99.99</b></b>
            </div>
            <div className="row justify-content-center mt-5">
                <Button variant="secondary"> <b>Place order</b></Button>
            </div>
        </Container>
    );
}
