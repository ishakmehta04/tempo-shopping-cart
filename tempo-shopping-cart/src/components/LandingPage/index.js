import React from "react";
import { connect } from 'react-redux';
import sonyXperiaZ3Small from '../../assests/images/sony-xperia-z3.jpg'
import {fetchData} from '../../actions/landingPageAction'
import { loadPartialConfig } from "@babel/core";

class LandingPage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	componentDidMount () {
		this.props.fetchData();
	}
	
    render() {
		const {landingPageReducer} = this.props;
		const productData = landingPageReducer.isLoaded ? landingPageReducer.payLoad.products : '';
		
        return (
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
							onChange={()=> {}}
							/>Apple
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="samsung"
							onChange={()=> {}}/>Samsung
							</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="htc"
							onChange={()=> {}}/>HTC
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="nokia"
							onChange={()=> {}}/>Nokia
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="zte"
							onChange={()=> {}}/>ZTE
						</label>
						<label>
							<input 
							type="checkbox" 
							name="manufacturer" 
							value="sony"
							onChange={()=> {}} />Sony
						</label>
					</div>

					<div className="filter-criteria">
						<span>Screen Size</span>
						<label><input type="checkbox" value="16" name="storage" />16 GB</label>
						<label><input type="checkbox" value="32" name="storage" />32 GB</label>
					</div>

					<div className="filter-criteria">
						<span>OS</span>
						<label><input type="checkbox" value="android" name="os" />Android</label>
						<label><input type="checkbox" value="ios" name="os" />iOS</label>
						<label><input type="checkbox" value="windows" name="os" />Windows</label>
					</div>

					<div className="filter-criteria">
						<span>Camera</span>
						<label><input type="checkbox" value="5" name="camera" />5 Mpx</label>
						<label><input type="checkbox" value="8" name="camera" />8 Mpx</label>
						<label><input type="checkbox" value="12" name="camera" />12 Mpx</label>
						<label><input type="checkbox" value="15" name="camera" />15 Mpx</label>
					</div>

					<button>Clear filters</button>

				</form>

			</div>

			<ul className="products-list">
						{productData ? productData.map(function(value, i){
                            return(<li key={i}>
                            <a href="#" className="product-photo"><img src={value.image.small} height="130" alt={value.name}/></a>
							<h2><a href="#"> {value.name} </a></h2>
							<ul className="product-description">
								<li><span>Manufacturer: </span>{value.specs.manufacturer}</li>
								<li><span>Storage: </span>{value.specs.storage} GB</li>
								<li><span>OS: </span>{value.specs.os}</li>
								<li><span>Camera: </span>{value.specs.camera} Mpx</li>
							</ul>
							<button onClick={() => this.props.clickButtonAction()}>Buy Now!</button>
							<p className="product-price">{value.price}$</p>
							<div className="highlight"></div>
                            
                            </li>)
                        }) : ""
                    }
			</ul>

		</div>


		{/* <div className="single-product page">

			<div className="overlay"></div>

			<div className="preview-large">
				<h3>Single product view</h3>
				<img src=""/>
				<p></p>

				<span className="close">×</span>
			</div>

		</div> */}

		<div className="error page">
			<h3>Sorry, something went wrong :(</h3>
		</div>

	</div>
        );
    }
}

const mapStateToProps = (state) => ({
	landingPageReducer: state.landingPageReducer
});

export default connect(
	mapStateToProps, 
	{fetchData}
)(LandingPage);