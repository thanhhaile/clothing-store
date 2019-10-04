import { createSelector } from 'reselect';

const selectCart = state => state.cartReducer;

export const selectorCartHidden = createSelector(
  [selectCart],
  cartReducer => cartReducer.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  cartReducer => cartReducer.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((result, item) => result + item.quantity, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((result, item) => result + item.quantity * item.price, 0)
)