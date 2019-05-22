import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {fetchTotalCartData} from "../../actions/totalCartItemAction";
import Header from '../Header';
import {fetchRemoveItem} from "../../actions/removeItemAction";

class Cart extends React.Component {
    componentDidMount() {
        this.props.fetchTotalCartData();
    }

    componentWillReceiveProps(nextProps){
        if(this.props.removeItemReducer != nextProps.removeItemReducer) {
            this.props.fetchTotalCartData();
        }
    }

    handleRemove (id) {
        this.props.fetchRemoveItem(id);
    }

    render() {
        const {totalCartItemReducer}= this.props;
        const productData = totalCartItemReducer.isLoaded ? totalCartItemReducer.payLoad.products : '';
        const self = this;

        return (
            <React.Fragment>
				<Header/>
		
           <div className="main-content-cart">

			<div className="all-products page">

			{ productData && Object.keys(productData.appStorage).length > 0 ? 
			<ul className="products-list">
						{Object.keys(productData.appStorage).map((value, i) =>{
                            return(<li key={i}>
                            <a href="#" className="product-photo"><img src={productData.appStorage[value].image.small} height="130" alt={productData.appStorage[value].name}/></a>
							<h2><a href="#"> {productData.appStorage[value].name} </a></h2>
							<ul className="product-description">
								<li><span>Manufacturer: </span>{productData.appStorage[value].specs.manufacturer}</li>
								<li><span>Storage: </span>{productData.appStorage[value].specs.storage} GB</li>
								<li><span>OS: </span>{productData.appStorage[value].specs.os}</li>
								<li><span>Camera: </span>{productData.appStorage[value].specs.camera} Mpx</li>
                                <li><span>Quantity: </span>{productData.appStorage[value].currentCount}</li>
							</ul>
                            <button className="remove-button" onClick={self.handleRemove.bind(self,productData.appStorage[value].id)}>remove</button>
							<p className="product-price">{productData.appStorage[value].price}$</p>
                            </li>)
                        })
                    }
			</ul> :
			<div className="error page">
				Cart is empty
			</div>
			}
		</div>

	</div>
	</React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    totalCartItemReducer: state.totalCartItemReducer,
    removeItemReducer : state.removeItemReducer
});

export default withRouter(connect(
	mapStateToProps, 
	{fetchTotalCartData, fetchRemoveItem}
)(Cart));