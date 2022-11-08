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
            const topFilter = response.data;
            console.log(topFilter);
            setFilter(topFilter);

        })
       .catch((error)=> console.error(`Error: ${error}`))
    },[]);
    //========================================================
    return(
        <Container>
                        <div >
                        <p className="fw-bold">
                            Filter By
                        </p>
                        <Accordion className="border mt-3 shadow-sm">

                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>Category</b></Accordion.Header>
                                <Accordion.Body>
                                    {
                                        filter.categories?.map((e)=>{
                                            return(
                                                <p>{e.category_name}</p>
                                            )
                                        })

                                    }

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>Author</b></Accordion.Header>
                                <Accordion.Body>
                                {
                                        filter.authors?.map((e)=>{
                                            return(
                                                <p>{e.author_name}</p>
                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion defaultActiveKey='0' className="border mt-4 shadow-sm" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><b>Rating Review</b></Accordion.Header>
                                <Accordion.Body>
                                   1
                                </Accordion.Body>
                                <Accordion.Body>
                                   2
                                </Accordion.Body>
                                <Accordion.Body>
                                   3
                                </Accordion.Body>
                                <Accordion.Body>
                                   4
                                </Accordion.Body>
                                <Accordion.Body>
                                   5
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
        </Container>
        );
    }

