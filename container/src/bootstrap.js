import { mount as productMount} from 'products/ProductsIndex';
import { mount as cartMount} from 'cart/CartShow';

console.log('Bootstrap.js loaded');

productMount(document.querySelector('#products-container'));
cartMount(document.querySelector('#cart-container'));