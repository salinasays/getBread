import React from 'react'
import $ from 'jquery';

var createReactClass = require('create-react-class');


var Checkout = createReactClass ({
	getInitialState: function() {
		return { item_name: "", designer:"", item_price: 0, custom_total: 0, cal_tax: 0, cart: {} };
	},

	componentDidMount: function (){

		$.ajax({
			url: 'api.getbread.com/carts/:cardId',
			type: 'GET',
			data: this.state
		})
		.done((data) => {
			console.log(data)
		})
		
		var items = [];

		var opts = {
			buttonId: 'bread-checkout-btn',
			items: items,
			shippingOptions: [
				{
					type: '2 Day Shipping',
					typeId: 'TWO_001',
					cost: 599,
				},
				{
					type: 'Overnight Shipping',
					typeId: 'OVR_002',
					cost: 1299
				}
			],
			asLowAs: true
		};

		// bread.checkout(opts);


	},

	render: function(){
		return (
			<div>
			<div className="cart">
				<h2>Shopping Bag</h2>
				<ol>
					<li>
						<h3>Crescent Hoops Brass</h3>
						<p>Lila Rice</p>
						<p className="price">$100</p>
					</li>
				</ol>
			</div>

			
			<h3 className="total">Total: $100</h3>

				<div className="tax">
					<p>Calculate Tax</p> 
					<input placeholder="Zipcode"></input>
				</div>

			<button className="chktout-btn">Checkout</button>
			</div>
		)
	}
});


export default Checkout;