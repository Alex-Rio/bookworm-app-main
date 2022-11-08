import axios from "axios";
import {useEffect ,useState} from "react";
import { Accordion, Container } from "react-bootstrap";

export default function FilterShop(){

    const[filter, setFilter] = useState([]);
    const baseUrl='http://127.0.0.1:8000/api/filters';
    useEffect(()=> {
        axios
        .get(baseUrl)
        .then ((response) => {
            const topFilter = response.data.data;
            setFilter(topFilter);
            console.log(topFilter);
        })
       .catch((error)=> console.error(`Error: ${error}`))
    },[]);
    //========================================================
    return(
        <Container>
        {filter.map((filter,index)=> {
            return(
                 <div key={index}>
                    <p className="fw-bold">
                        Filter By
                    </p>
                    <Accordion className="border mt-3 shadow-sm" defaultActiveKey='0'>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>Category</b></Accordion.Header>
                            <Accordion.Body>
                                {filter.categories.category_name}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>Author</b></Accordion.Header>
                            <Accordion.Body>
                                {filter.authors.author_name}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>Rating Review</b></Accordion.Header>
                            <Accordion.Body>
                                {filter.star}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            );
        }
        )}
        </Container>

    //    <div>
    //     <p className="fw-bold">
    //         Filter By
    //     </p>
    //     <Accordion className="border mt-3 shadow-sm" defaultActiveKey='0' flush>

    //         <Accordion.Item eventKey="0">
    //             <Accordion.Header><b> Category</b></Accordion.Header>
    //             <Accordion.Body>
    //                 Category_name
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 Category #1
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 Category #2
    //             </Accordion.Body>
    //         </Accordion.Item>
    //     </Accordion>
    //     <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
    //         <Accordion.Item eventKey="0">
    //             <Accordion.Header><b>Author</b></Accordion.Header>
    //             <Accordion.Body>
    //                 Author_name
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 Author #1
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 Author #2
    //             </Accordion.Body>
    //         </Accordion.Item>
    //     </Accordion>
    //     <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
    //         <Accordion.Item eventKey="0">
    //             <Accordion.Header><b>Rating Review</b></Accordion.Header>
    //             <Accordion.Body>
    //                 1 Star
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 2 Star
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 3 Star
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 4 Star
    //             </Accordion.Body>
    //             <Accordion.Body>
    //                 5 Star
    //             </Accordion.Body>
    //         </Accordion.Item>
    //     </Accordion>
    //    </div>

        );
    }

