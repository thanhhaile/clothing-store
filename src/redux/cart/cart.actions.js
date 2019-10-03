import { CartActionType } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: CartActionType.ADD_CART_ITEM,
  payload: item
})