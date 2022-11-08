import React, {Component} from 'react';

import Header from '../js/components/header/header';

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
