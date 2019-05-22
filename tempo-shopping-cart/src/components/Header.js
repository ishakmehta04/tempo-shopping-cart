import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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

    handleCartRedirect(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.push('/cart');
    }

    handleHomeRedirect(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.push('/');
    }


    render() {
        const {totalCartItemReducer}= this.props;
        const productData = totalCartItemReducer.isLoaded ? totalCartItemReducer.payLoad.products : '';
        return (
            <header className="compact">
                <button className="cart-button" onClick={this.handleCartRedirect.bind(this)}><span>{productData.itemCount}</span>
                    <img heigth="35" width="35" src={cart}/>
                </button>
                <h2 className="tempo"><a href="http://tempo.io/">Back to Tempo's website</a></h2>
                <h1><a href="#" onClick={this.handleHomeRedirect.bind(this)}>Tempo Mobile Store</a></h1>
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    totalCartItemReducer: state.totalCartItemReducer,
    addToCartReducer: state.addToCartReducer
});

export default withRouter(connect(
	mapStateToProps, 
	{fetchTotalCartData}
)(Header));