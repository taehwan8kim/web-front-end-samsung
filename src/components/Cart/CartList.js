import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { useCart } from '../contents/Cart';

export default function CartList() {
  const { products } = useCart();

  return (
    <Container>
      {products.map((product) => (
        <CartItem key={product.id} product={product}/>
      ))}
      <CartFooter />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;