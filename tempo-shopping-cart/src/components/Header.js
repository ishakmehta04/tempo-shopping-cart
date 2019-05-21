import React from "react";
import { connect } from 'react-redux';
import cart from '../assests/images/cart.png'
import {fetchTotalCartData} from "../actions/totalCartItemAction";

class Header extends React.Component {
    componentDidMount() {
        this.props.fetchTotalCartData();
    }

    componentWillReceiveProps(nextProps){
        if(this.props.addToCartReducer != nextProps.addToCartReducer) {
            this.props.fetchTotalCartData();
        }
    }


    render() {
        const {totalCartItemReducer}= this.props;
        const productData = totalCartItemReducer.isLoaded ? totalCartItemReducer.payLoad.products : '';
        return (
            <header className="compact">
                <button className="cart-button"><span>{productData.itemCount}</span>
                    <img heigth="35" width="35" src={cart}/>
                </button>
                <h2 className="tempo"><a href="http://tempo.io/">Back to Tempo's website</a></h2>
                <h1><a href="#">Tempo Mobile Store</a></h1>
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    totalCartItemReducer: state.totalCartItemReducer,
    addToCartReducer: state.addToCartReducer
});

export default connect(
	mapStateToProps, 
	{fetchTotalCartData}
)(Header);