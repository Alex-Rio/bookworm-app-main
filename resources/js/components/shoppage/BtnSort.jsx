//import { Col,Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//import SplitButton from 'react-bootstrap/SplitButton';

export default function BtnSort (){

    return(
        <div >
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                variant="secondary"
                title="Sort by on sale">
                <Dropdown.Item eventKey="1">Sort by on sale</Dropdown.Item>
                <Dropdown.Item eventKey="2">Sort by popular</Dropdown.Item>
                <Dropdown.Item eventKey="3">Sort by price: low to high</Dropdown.Item>
                <Dropdown.Item eventKey="4">Sort by price: high to low</Dropdown.Item>
              </DropdownType>
            ))}
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                variant="secondary"
                title="Show 20 ">
                <Dropdown.Item eventKey="1">5</Dropdown.Item>
                <Dropdown.Item eventKey="2">5</Dropdown.Item>
                <Dropdown.Item eventKey="3">15</Dropdown.Item>
                <Dropdown.Item eventKey="3">20</Dropdown.Item>

              </DropdownType>
            ))}



        </div>
    );

}
