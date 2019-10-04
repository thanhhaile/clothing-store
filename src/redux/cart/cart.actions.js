import { CartActionType } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: CartActionType.ADD_CART_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item
});