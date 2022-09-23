import CartTotal from './CartTotal';
import { useCart } from '../contents/Cart';

const CartFooter = ({...restProps }) => {
  const { totalPrice } = useCart();
  return (
  <footer {...restProps}>
    <CartTotal>{totalPrice}</CartTotal>
  </footer>
)};

export default CartFooter;