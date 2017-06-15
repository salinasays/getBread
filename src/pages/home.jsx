import React from 'react';
import $ from 'jquery';

//product images
import whirlpool_earrings from '../assets/whirlpool_earrings.jpg';
import agnes_ring from '../assets/agnes_ring.jpg';
import bronze_sister from '../assets/bronze_sister.jpg';
import picasso from '../assets/picasso.jpg';
import totem_tassel from '../assets/totem_tassel.jpg';
import crescent_hoops from '../assets/crescent_hoops.jpg';

var createReactClass = require('create-react-class');
// import products from '../products.js';

var opts = {
  buttonId: 'bread-checkout-btn',
  items: [],
  tax: null,
  customTotal: 0,
  // shippingOptions: { {typeId: '2-day', cost: 5.99, type: '2 Day Shipping'}, {typeId: 'overnight', cost: 12.99, type: 'Overnight Shipping'} },
  asLowAs: true
};

var Home = createReactClass({
  getInitialState: function(){
    return { cart: [] };
  },

  // addToCart: function(callback) {
  //   $.ajax({
  //     url: '/cart/add'+productId,
  //     type: 'PUT' 
  //   }).done (function(data){
  //     if(data.error != undefined) {
  //       callback(new Error(data.error));
  //     } else {
  //       console.log("Item Added")
  //       callback(null);
  //     }
  //   });
  // },

  render: function(){
    return (
     <div>
     
      <script src='https://checkout.getbread.com/bread.js'data-api-key="7101ea30-8ae3-47ab-a8bd-235860d36f3e"></script>
        <h2>New Arrivals</h2>
        <div >
        <center>
          <ul className="products">
            <li className="li item">
              <img className= "product_img" src={whirlpool_earrings} alt="whirlpool_earrings" />
              <p>White Bronze Double Whirlpool Earrings</p>
              <p> Leigh Miller | $300 </p>
              <details>
                <summary><em>Item Details</em></summary>
                <p>Inspired by the watery patterns found in an ocean whirlpool. Two separate pieces fall from a sterling silver post back, the second dangles free on a hidden jump ring. Measures 2.5". White bronze. Made in the USA.</p>
                <button>ADD TO BAG</button>
                <div id="bread-checkout-btn"></div>
              </details>
            </li>

            <li className="li item">
              <img className= "product_img" src={bronze_sister} alt="bronze_sister" />
              <p>Bronze Sister Earrings</p>
              <p> Open House | $193 </p>
              <details>
                <summary><em>Item Details</em></summary>
                <p>Abstract, brass face pendants, fall free from a contrasting sterling silver stud post and front. Measures 2" long and 1 1/4" across. Made in the USA.</p>
                <button>ADD TO BAG</button>
              </details>
            </li>

            <li className="li item"> 
              <img className= "product_img" src={agnes_ring} alt="agnes_ring" />
              <p>Silver Agnes Ring</p>
              <p> Pamela Love | $170 </p>
              <details>
                <summary><em>Item Details</em></summary>
                <p>Double banded, hand carved silhouette with a slightly weighted top band to rest on the highest knuckle. Available in both sterling silver and brass.</p>
                <button>ADD TO BAG</button>
              </details>
            </li>

            <li className="li item"> 
              <img className= "product_img" src={picasso} alt="picasso_earrings" />
              <p>Picasso Palette Earrings</p>
              <p> Lizzie Fortunato | $290 </p>
              <details>
                <summary><em>Item Details</em></summary>
                <p>Gold plated brass "mobile" charm earrings set with onyx at the stud front and a red jasper on a dangle. Measures 3" long.</p>
                <button>ADD TO BAG</button>
              </details>
            </li>

            <li className="li item"> 
              <img className= "product_img" src={totem_tassel} alt="totem_tassel_earrings" />
              <p>Totem Tassel Earrings</p>
              <p> Lizzie Fortunato | $290 </p>
              <details>
                <summary><em>Item Details</em></summary>
                <p>Gold-plated brass "totem" statement earrings with black enamel and red silk tassel fringe</p>
                <button>ADD TO BAG</button>
              </details>
            </li>

            <li className="li item"> 
              <img className= "product_img" src={crescent_hoops} alt="crescent_hoops" />
              <p>Crescent Hoops Brass</p>
              <p> Lila Rice | $100 </p>
              <details>
                <summary><em>Item Details</em></summary>
                <p>The weight is in the bottom of these earrings and they are hinged at the half circle points so they move so nice when they are on your ear. The crescent measures 5/8" at the widest point and there are tiny little beaten marks on the brass. The diameter measures 2" across. Made in Brooklyn, NYC.</p>
                <button>ADD TO BAG</button>
              </details>
            </li>
          </ul>
        </center>
        </div>
      </div>
    )
   }
});

export default Home;

