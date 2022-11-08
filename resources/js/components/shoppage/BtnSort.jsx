//import { Col,Row } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
//import SplitButton from 'react-bootstrap/SplitButton';

export default function BtnSort() {
    const [sortValue, setSortValue] = useState("");
    const [pageValue, setPageValue] = useState("");
 
    const handleSelect = (e) => {
        console.log(e);
        setSortValue(e);
    };
    return (
        <div>
            <Dropdown
                className="btn-drop-down col"
                variant="secondary"
                id="dropdown-basic-button"
                alignRight
                onSelect={handleSelect}
            >
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Sort By {sortValue}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Date: newest to oldest">
                        Date: newest to oldest
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Date: oldest to newest">
                        Date: oldest to newest
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {[Dropdown].map((DropdownType, idx) => (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    variant="secondary"
                    title="Show"
                >
                    <Dropdown.Item eventKey="1">5</Dropdown.Item>
                    <Dropdown.Item eventKey="2">10</Dropdown.Item>
                    <Dropdown.Item eventKey="3">15</Dropdown.Item>
                    <Dropdown.Item eventKey="4">20</Dropdown.Item>
                </DropdownType>
            ))}
        </div>
    );
}
