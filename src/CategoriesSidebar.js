import React, { useState, useRef, useEffect } from "react";
import ProductItemData from "./ProductItemData";
import ArrowBlack from "./Images/arrowBlack.svg";
import ArrowWhite from "./Images/arrowWhite.svg";

const CategoriesSidebar = () => {
  const categories = [
    "Fruits",
    "Vegetables",
    "Meat and Poultry",
    "Seafood",
    "Dairy Products",
    "Grains and Cereals",
    "Legumes and Pulses",
    "Sweets and Desserts",
    "Beverages",
    "Condiments and Sauces",
    "Snacks",
    "Ethnic and Regional Cuisine",
    "Produce",
    "Prepared foods",
    "Canned foods & Soups",
    "Bakery",
    "Dairy & Eggs",
    "Frozen",
    "Meat & Seafood",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && selectedCategory !== null) {
      const selectedCategoryElement = contentRef.current.querySelector(
        `[data-index="${selectedCategory}"]`
      );
      if (selectedCategoryElement) {
        const scrollTop =
          selectedCategoryElement.offsetTop - contentRef.current.offsetTop;
        scrollSmoothly(contentRef.current, scrollTop, 3000);
      }
    }
  }, [selectedCategory]);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  const scrollSmoothly = (element, to, duration) => {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <div className="flex w-full">
      <div className="bg-gray-200 w-[20%] h-full p-2">
        <div className="custom-scrollbar px-2">
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={`text-[#737D94] font-[Muli] text-[20px] font-extrabold py-4 px-4 cursor-pointer ${
                  selectedCategory === index
                    ? "bg-[#5DA9E9] text-white rounded-[10px] drop-shadow-lg"
                    : ""
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:w-[80%] w-full h-full p-2">
        <div
          className="hideScrollBar h-screen overflow-y-auto px-2"
          ref={contentRef}
        >
          {categories.map((category, index) => (
            <>
              <div
                key={index}
                className={`flex border-b font-[Mortise] font-bold text-[30px] leading-[42px] text-[#100E3A] py-2 ${
                  selectedCategory === index ? "bg-gray-500 text-white" : ""
                }`}
                data-index={index}
              >
                {category}
                <a href="#scrollToTop">
                  <img
                    src={selectedCategory === index ? ArrowWhite : ArrowBlack}
                    alt="Arrow"
                    className="pt-1"
                  />
                </a>
              </div>
              <ProductItemData key={index} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSidebar;