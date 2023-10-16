// USING REDUX (Cart Count)------------------------------------------------>

// import { createStore } from "redux";

// const initialState = {
//   cart: {},
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           [action.productName]: (state.cart[action.productName] || 0) + 1,
//         },
//       };
//     case "REMOVE_FROM_CART":
//       const newCart = { ...state.cart };
//       if (newCart[action.productName] > 1) {
//         newCart[action.productName] -= 1;
//       } else {
//         delete newCart[action.productName];
//       }
//       return {
//         ...state,
//         cart: newCart,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(rootReducer);

// export default store;
