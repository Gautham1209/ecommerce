import React from "react";
import Cart from "./Images/Cart.svg";
import { useCart } from "./CartContext";

function TopNavBar() {

  const { cart } = useCart();

  const cartCount = Object.values(cart).reduce(
    (total, count) => total + count,
    0
  );

  return (
    <div className="bg-[#FFE475] p-4 shadow-md">
      <div className="container flex mx-auto justify-between items-center">
        <div className="text-[25px] font-bold text-[#100E3A] leading-[42px]">
          E-Commerce
        </div>
        <div className="flex items-center bg-white rounded-full px-5 py-3">
          <button className="flex items-center space-x-2 ">
            <img src={Cart} alt="CartTrolly" height={30} width={30} />
            <span className="text-black text-[20px]">{cartCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;

// USING REDUX (Cart Count)------------------------------------------------>

// import React from "react";
// import Cart from "./Images/Cart.svg";
// import { connect } from "react-redux";

// function TopNavBar({cart}) {

//   const cartCount = Object.values(cart).reduce(
//     (total, count) => total + count,
//     0
//   );

//   return (
//     <div className="bg-[#FFE475] p-4 shadow-md">
//       <div className="container flex mx-auto justify-between items-center">
//         <div className="text-[25px] font-bold text-[#100E3A] leading-[42px]">
//           E-Commerce
//         </div>
//         <div className="flex items-center bg-white rounded-full px-5 py-3">
//           <button className="flex items-center space-x-2 ">
//             <img src={Cart} alt="CartTrolly" height={30} width={30} />
//             <span className="text-black text-[20px]">{cartCount}</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   cart: state.cart,
// });

// export default connect(mapStateToProps)(TopNavBar);
