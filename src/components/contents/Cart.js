import { createContext, useContext } from 'react';
import { any, shape, string, number, func, arrayOf, exact } from 'prop-types';

const CartContext = createContext();

// 컨텍스트 래퍼 컴포넌트
export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  value: shape({
    title: string,
    products: arrayOf(exact({
      id: string,
      photo: string,
      name: string,
      price: number,
      amount: number,
      maxAmount: number,
    }).isRequired),
    totalPrice: number.isRequired,
    onUpdate: func,
  }),
  children: any,
}

// 커스텀 훅
export const useCart = () => {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error(
      'useCart 훅은 CartProvider 컴포넌트 내부에서만 사용 가능합니다.'
    );
  }
  return value;
};