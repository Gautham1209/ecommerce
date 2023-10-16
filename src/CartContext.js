import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        [action.productName]: (state[action.productName] || 0) + 1,
      };
    case "REMOVE_FROM_CART":
      const newState = { ...state };
      if (newState[action.productName] > 1) {
        newState[action.productName] -= 1;
      } else {
        delete newState[action.productName];
      }
      return newState;
    case "CLEAR_CART":
      return {};
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {});

  // Load cart from local storage on startup
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({ type: "CLEAR_CART" });
      Object.keys(storedCart).forEach((productName) => {
        dispatch({ type: "ADD_TO_CART", productName });
      });
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


// USING REDUX (Cart Count)------------------------------------------------>

// import React, { useState, useEffect } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Load cart items from local storage on startup
//     const storedCart = JSON.parse(localStorage.getItem("cart"));
//     if (storedCart) {
//       setCartItems(storedCart);
//     }
//   }, []);

//   useEffect(() => {
//     // Save cart items to local storage whenever it changes
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     setCartItems(updatedCart);
//   };

//   return (
//     <div>
//       {cartItems.map((item, index) => (
//         <div key={index}>
//           {item.productName} - {item.price}{" "}
//           <button onClick={() => removeFromCart(index)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
