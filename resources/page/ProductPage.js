import { Col, Container, Row } from "react-bootstrap";
//import ListBooks from "../js/components/listBooks/ListBooks";
import ListReviews from "../js/components/produce/ListReviews"
//import CartBook from "../js/components/produce/CartBook";
import DetailBook from "../js/components/produce/DetailBook";
import Header from "../js/components/header/header";
import "../css/detailbook.css";
import ReviewPorts from '../js/components/produce/ReviewPorts'
import Footer from "../js/components/footer/Footer";

export default function DetailPage(){
    return(
       <div>
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
                    {/* <CartBook/> */}
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
        <Footer/>
       </div>
    )
}
