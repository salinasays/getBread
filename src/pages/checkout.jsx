import React from 'react'
import $ from 'jquery';

var createReactClass = require('create-react-class');


var Checkout = createReactClass ({
	getInitialState: function() {
		return { item_name: "", designer:"", item_price: 0, custom_total: 0, cal_tax: 0, cart: {} };
	},

	componentDidMount: function (){

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

		$.ajax({
			url: 'api.getbread.com/carts/:cardId',
			type: 'GET',
			data: this.state
		})
		.done((data) => {
			console.log(data)
		})
	},

	render: function(){
		return (
			<div>

				<p>Testing</p>

				<form id="checkout-form" action="checkout" method="post">
      		<div id='bread-checkout-btn'></div>
   			</form>

   			{
   				// var items = [];
   				// cart.products.forEach(function(p) {
   				// 	items.push (
   				// 	{
   				// 		name: 
   				// 	}
   				// 	)
   				// })
   			}


			</div>
		)
	}
});


export default Checkout;