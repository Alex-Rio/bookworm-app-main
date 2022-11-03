import React, {Component} from 'react';
//import { Container } from 'react-bootstrap';
import Header from '../js/components/header/header';
//import FilterShop from '../js/components/shoppage/FilterShop';
import ShopPageBody from '../js/components/ShopPage/ShopPageBody';

class ShopPage extends Component{
    render(){
        return(
                <>
                <Header/>
                <ShopPageBody/>
                </>
        );
    }

}
export default ShopPage ;
