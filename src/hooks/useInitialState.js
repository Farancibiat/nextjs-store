import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== id),
    });
  };

  return { state, addToCart, removeFromCart };
};

export default useInitialState;
