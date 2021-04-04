import { mount as ProductMount } from 'products/ProductsBootstrap';
import { mount as CartMount } from 'cart/cartBootstrap'

ProductMount(document.getElementById('dev-product'))
CartMount(document.getElementById('dev-cart'))