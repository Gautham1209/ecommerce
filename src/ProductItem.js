import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "./CartContext";

const ProductItem = ({ imageUrl, productName, price, unit }) => {
  const [isPlusIcon, setIsPlusIcon] = useState(true);

  const toggleIcon = () => {
    setIsPlusIcon(!isPlusIcon);
  };

  const { cart, dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", productName });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", productName });
  };

  return (
    <div className="my-4 mx-5 p-5 bg-white rounded-lg shadow-md">
      <div className="relative">
        {" "}
        <img
          src={imageUrl}
          alt={productName}
          className="md:w-32 md:h-32 w-20 h-20 mx-auto"
        />
        <div className=" absolute bottom-0 right-0 bg-[#40D589] rounded-[50%] px-3 py-3">
          <button className="flex items-center space-x-2" onClick={toggleIcon}>
            {isPlusIcon ? (
              <FaPlus
                className="text-white md:text-[20px] text-[10px]"
                onClick={handleAddToCart}
              />
            ) : (
              <FaMinus
                className="text-white md:text-[20px] text-[10px]"
                onClick={handleRemoveFromCart}
              />
            )}
          </button>
        </div>
      </div>
      <div className="text-[#100E3A] font-[Muli] md:text-[20px] text-[12px] py-2 font-bold leading-[28px]">
        {price}
      </div>
      <div className="text-[#100E3A] font-[Muli] md:text-[16px] text-[12px] py-2 font-semibold leading-[22.4px]">
        {productName}
      </div>

      <div className="text-[#B6BAC3] font-[Muli] md:text-[16px] text-[12px] py-2 font-semibold leading-[22.4px]">
        {unit}
      </div>
    </div>
  );
};

export default ProductItem;


// USING REDUX (Cart Count)------------------------------------------------>

// import React, { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { useCart } from "./CartContext";
// import { connect } from "react-redux";

// const ProductItem = ({
//   imageUrl,
//   productName,
//   price,
//   unit,
//   addToCart,
//   removeFromCart,
// }) => {
//   const [isPlusIcon, setIsPlusIcon] = useState(true);

//   const toggleIcon = () => {
//     setIsPlusIcon(!isPlusIcon);
//   };

//   return (
//     <div className="my-4 mx-5 p-4 bg-white rounded-lg shadow-md">
//       <div className="relative">
//         {" "}
//         <img src={imageUrl} alt={productName} className="w-32 h-32 mx-auto" />
//         <div className=" absolute bottom-0 right-0 bg-[#40D589] rounded-[50%] px-3 py-3">
//           <button className="flex items-center space-x-2" onClick={toggleIcon}>
//             {isPlusIcon ? (
//               <FaPlus onClick={() => addToCart(productName)} />
//             ) : (
//               <FaMinus onClick={() => removeFromCart(productName)} />
//             )}
//           </button>
//         </div>
//       </div>
//       <div className="text-[#100E3A] font-[Muli] text-[20px] py-2 font-bold leading-[28px]">
//         {price}
//       </div>
//       <div className="text-[#100E3A] font-[Muli] text-[16px] py-2 font-semibold leading-[22.4px]">
//         {productName}
//       </div>

//       <div className="text-[#B6BAC3] font-[Muli] text-[16px] py-2 font-semibold leading-[22.4px]">
//         {unit}
//       </div>
//     </div>
//   );
// };
// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (productName) => dispatch({ type: "ADD_TO_CART", productName }),
//   removeFromCart: (productName) =>
//     dispatch({ type: "REMOVE_FROM_CART", productName }),
// });

// export default connect(null, mapDispatchToProps)(ProductItem);
