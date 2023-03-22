import * as constants from "./constants";

const initialState = {
  cartItems: [],
};

export default function HandleCart(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_TO_CART:
      const itemInCart = state.cartItems?.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        const EditedItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

        return {
          cartItems: EditedItems,
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    case constants.REMOVE_FROM_CART:
      const EditedItems = state.cartItems.map((item) => {
        if (item?.id === action.payload.id) {
          if (item?.quantity !== 1) {
            return { ...item, quantity: item?.quantity - 1 };
          }
        } else {
          return item;
        }
      });

      return {
        cartItems: EditedItems.filter(Boolean),
      };

    default:
      return state;
  }
}
