import { Col, Container, Row } from "react-bootstrap";
//import ListBooks from "../js/components/listBooks/ListBooks";
import ListReviews from "../js/components/bookdetail/ListReviews"
import CartBook from "../js/components/bookdetail/CartBook";
import DetailBook from "../js/components/bookdetail/DetailBook";
import Header from "../js/components/header/header";
import "../css/detailbook.css";
import ReviewPorts from '../js/components/bookdetail/ReviewPorts'

export default function DetailPage(){
    return(
        <Container>
            <Header/>
            <div style={{paddingRight: 0}} >
            <div className="pt-5 pb-5 border-bottom border-4 border-dark">
                        <h1 className="d-inline mt-2">Category Name</h1>
                    </div>
            </div>
            <div className="row mt-2 " style={{marginLeft : 0}}>
                <div className=" detailbook col-8 border border-2 " >
                    <DetailBook/>
                </div>
                <div className="col-4 p-0">
                    <CartBook/>
                </div>
                <div className="row mt-5">
                    <div className="col-8 border">
                        <ListReviews/>
                    </div>
                    <div className="col-4">
                        <ReviewPorts/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </Container>
    )
}