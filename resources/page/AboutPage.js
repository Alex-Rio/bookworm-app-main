import { Container } from "react-bootstrap";
import Footer from "../js/components/footer/Footer";
import Header from "../js/components/header/header";

export default function AboutPage(){
    return(
        <div>
       <Container>
        <div>
            <Header/>
        </div>
         <div className="wrapper-about mt-5">
         <div className="pt-5 pb-5 border-bottom border-4 border-dark">
                        <h1 className="d-inline mt-2">About Us</h1>
                    </div>

        <div className="mx-7">
            <div className="about-introduction">
                <p className="h1 mt-3 text-center mb-5"><b>Welcome to Bookworm</b></p>
                <p className="title-about-introduction">"Bookworm is an independent New York bookstore and language school
                    with locations in Manhattan and
                    Brooklyn. We Specialize in travel books and language classes."</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 about-story">
                    <p className="h3 text-left mt-5 mb-4"><b>Our Story</b></p>
                    <p>The name Bookworm was taken from the original name for New York international Airport, which was
                        renamed JFK in December 1963.</p>
                    <p>Our Manhattan store has just moved to the West Village. Our new location is 170 7th Avenue South,
                        at the corner of Perry Street.</p>
                    <p>From March 2008 through May 2016, the store was located in the Flatiron District.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 about-vision">
                    <p className="h3 text-left mt-5 mb-4"><b>Our Vision</b></p>
                    <p>One of the last travel bookstores in the country, our Manhattan store carries a range of
                        guidebooks (all 10% off) to suit the needs and tastes of every traveler and budget.</p>
                    <p>We believe that a novel or travelogue can be just as valuable a key to a place as any guidebook,
                        and our well-read, well-traveled staff is happy to make reading recommendations for any
                        traveler, book lover, or gift giver.</p>
                </div>
            </div>
        </div>
    </div>
       </Container>
     <div className="">
        <Footer/>
     </div>
       </div>
    );
}
