import React from "react";
import { connect } from 'react-redux';
import {fetchData} from '../../actions/landingPageAction'
import {fetchOverlayData} from '../../actions/overlayPageAction'
import {fetchAddToCartData} from '../../actions/addToCartAction';
import Header from '../Header';

class LandingPage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			qty : 0,
			total : 0
		}
	}

	componentDidMount () {
		this.props.fetchData({});
	}

	handleChange (e) {
		let filters = {};
		for(let key in this.refs){
			if(this.refs[key].checked) {
				if(!(filters[this.refs[key].name] && filters[this.refs[key].name].length)){
					filters[this.refs[key].name] = [];
				}
				filters[this.refs[key].name].push(this.refs[key].value);
			} else {
				if(filters[this.refs[key].name] && filters[this.refs[key].name].length && (filters[this.refs[key].name].indexOf(this.refs[key].value) != -1)){
					const index = filters[this.refs[key].name].indexOf(this.refs[key].value);
					filters[this.refs[key].name].splice(index, 1);

					if(!filters[this.refs[key].name].length){
						delete filters[this.refs[key].name];
					}
	
				}
			}
		}
		this.props.fetchData(filters);
	}

	clickHandlerAction (id) {
		this.props.fetchOverlayData(id);
	}

	add(id) {
		this.props.fetchAddToCartData(id);
	  }
	
    render() {
		const {landingPageReducer, overlayPageReducer} = this.props;
		const productData = landingPageReducer.isLoaded ? landingPageReducer.payLoad.products : '';
		const overlayData = overlayPageReducer.isLoaded ? overlayPageReducer.payLoad.products : '';
		const self = this;

        return (
			<React.Fragment>
				<Header/>
		
           <div className="main-content">

			<div className="all-products page">

				<div className="filters">
				<form>

					<div className="filter-criteria">
						<span>Manufacturer</span>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="apple" 
							ref="applePhone"
							onChange={this.handleChange.bind(this)}
							/>Apple
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="samsung"
							ref="samsungPhone"
							onChange={this.handleChange.bind(this)}/>Samsung
							</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="htc"
							ref="htcPhone"
							onChange={this.handleChange.bind(this)}/>HTC
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="nokia"
							ref="nokiaPhone"
							onChange={this.handleChange.bind(this)}/>Nokia
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="zte"
							ref="ztePhone"
							onChange={this.handleChange.bind(this)}/>ZTE
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="sony"
							ref="sonyPhone"
							onChange={this.handleChange.bind(this)}/>Sony
						</label>
					</div>

					<div className="filter-criteria">
						<span>Screen Size</span>
						<label><input type="checkbox" value="16" name="storage" ref="16gbPhone" onChange={this.handleChange.bind(this)}/>16 GB</label>
						<label><input type="checkbox" value="32" name="storage" ref="32gbPhone" onChange={this.handleChange.bind(this)}/>32 GB</label>
					</div>

					<div className="filter-criteria">
						<span>OS</span>
						<label><input type="checkbox" value="android" name="os" ref="androidPhone" onChange={this.handleChange.bind(this)}/>Android</label>
						<label><input type="checkbox" value="ios" name="os" ref="iosPhone" onChange={this.handleChange.bind(this)}/>iOS</label>
						<label><input type="checkbox" value="windows" name="os" ref="windowsPhone" onChange={this.handleChange.bind(this)}/>Windows</label>
					</div>

					<div className="filter-criteria">
						<span>Camera</span>
						<label><input type="checkbox" value="5" name="camera" ref="5mpPhone" onChange={this.handleChange.bind(this)}/>5 Mpx</label>
						<label><input type="checkbox" value="8" name="camera" ref="8mpPhone" onChange={this.handleChange.bind(this)}/>8 Mpx</label>
						<label><input type="checkbox" value="12" name="camera" ref="12mpPhone" onChange={this.handleChange.bind(this)}/>12 Mpx</label>
						<label><input type="checkbox" value="15" name="camera" ref="15mpPhone" onChange={this.handleChange.bind(this)}/>15 Mpx</label>
					</div>

					<button>Clear filters</button>

				</form>

			</div>

			{ productData.length ? 
			<ul className="products-list">
						{productData.map(function(value, i){
                            return(<li key={i} onClick={self.clickHandlerAction.bind(self, value.id)}>
                            <a href="#" className="product-photo"><img src={value.image.small} height="130" alt={value.name}/></a>
							<h2><a href="#"> {value.name} </a></h2>
							<ul className="product-description">
								<li><span>Manufacturer: </span>{value.specs.manufacturer}</li>
								<li><span>Storage: </span>{value.specs.storage} GB</li>
								<li><span>OS: </span>{value.specs.os}</li>
								<li><span>Camera: </span>{value.specs.camera} Mpx</li>
							</ul>
							<button>Buy Now!</button>
							<p className="product-price">{value.price}$</p>
							<div className="highlight"></div>
                            
                            </li>)
                        })
                    }
			</ul> :
			<div className="error page">
				Sorry, something went wrong :(
			</div>
			}
		</div>


		<div className={`single-product page ${overlayPageReducer.isLoaded ? 'visible' : 'hidden'}`} onClick={this.clickHandlerAction.bind(this, null)}>

			<div className="overlay"></div>

			<div className="preview-large">
				<h3>{overlayData.name}</h3>
				<img src={overlayData.image} />
				<p>{overlayData.description}</p>
				<button className="btn btn-outline-primary addToCartBtn" onClick={this.add.bind(this, overlayData.id)}>Add to cart</button>
				<span className="close">×</span>
			</div>

		</div>

	</div>
	</React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
	landingPageReducer: state.landingPageReducer,
	overlayPageReducer: state.overlayPageReducer,
	addToCartReducer: state.addToCartReducer
});

export default connect(
	mapStateToProps, 
	{fetchData, fetchOverlayData, fetchAddToCartData}
)(LandingPage);