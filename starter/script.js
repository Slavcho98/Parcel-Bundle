import 'core-js/actual';
// importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5 );
// console.log(price, tq);

// exporting everything in an object
import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing module');
// ShoppingCart.addToCart("bread", 5)
// console.log(ShoppingCart);

// we should never mix named and default modules
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'
import add, {cart} from './shoppingCart.js'
add('pizza', 2)
add('bread', 5)
add('apples', 4)

// console.log(cart);

const shoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 2);
shoppingCart2.addToCart('pizza', 4);

console.log(shoppingCart2);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es'
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],

  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if(module.hot) {
  module.hot.accept()
}

class Slavco {
  constructor(name) {
    this.name = name;
    console.log(this.name);
  }
}

const newSlavco = new Slavco("Slavco");

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log(fruits.at(0)); // Output: apple
console.log(fruits.at(2)); // Output: cherry
console.log(fruits.at(-1)); // Output: elderberry
console.log(fruits.at(5)); // Output: undefined
