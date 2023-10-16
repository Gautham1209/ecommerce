import React, { useState, useRef } from "react";
import ProductItemData from "./ProductItemData";
import ArrowBlack from "./Images/arrowBlack.svg";
import ArrowWhite from "./Images/arrowWhite.svg";
import { FaCarrot, FaEgg } from "react-icons/fa";
import { LuCandy } from "react-icons/lu";
import { GiCannedFish, GiMilkCarton } from "react-icons/gi";
import { HiOutlineCake } from "react-icons/hi";

const TopBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryRefs = {};

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

  const categoryIcons = {
    Fruits: FaCarrot,
    Vegetables: FaCarrot,
    "Meat and Poultry": LuCandy,
    Seafood: GiCannedFish,
    "Dairy Products": GiMilkCarton,
    "Grains and Cereals": HiOutlineCake,
    "Legumes and Pulses": GiCannedFish,
    "Sweets and Desserts": LuCandy,
    Beverages: GiMilkCarton,
    "Condiments and Sauces": HiOutlineCake,
    Snacks: LuCandy,
    "Ethnic and Regional Cuisine": FaEgg,
    Produce: FaCarrot,
    "Prepared foods": HiOutlineCake,
    "Canned foods & Soups": GiCannedFish,
    Bakery: HiOutlineCake,
    "Dairy & Eggs": GiMilkCarton,
    Frozen: LuCandy,
    "Meat & Seafood": FaEgg,
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    if (categoryRefs[category]) {
      categoryRefs[category].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 p-2">
          {categories.map((category, index) => {
            const IconComponent = categoryIcons[category] || FaCarrot;

            const isSelected = selectedCategory === category;

            return (
              <div
                key={index}
                className={`flex-shrink-0 flex flex-col items-center cursor-pointer ${
                  isSelected ? "text-blue-500" : ""
                }`}
                onClick={() => handleCategorySelect(category)}
              >
                <div
                  className={`w-12 h-12 bg-gray-200 rounded-[10px] flex items-center justify-center ${
                    isSelected ? "bg-blue-200" : ""
                  }`}
                >
                  <IconComponent size={24} />
                </div>
                <div
                  className={`text-sm mt-2 ${
                    isSelected ? "font-semibold" : ""
                  }`}
                >
                  {category}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full h-full p-2">
        <div className="hideScrollBar h-screen overflow-y-auto px-2">
          {categories.map((category, index) => (
            <>
              <div
                key={index}
                ref={(ref) => (categoryRefs[category] = ref)}
                className={`flex border-b font-[Mortise] font-bold text-[28px] leading-[42px] text-[#100E3A] py-2 ${
                  selectedCategory === category ? "bg-gray-500 text-white" : ""
                }`}
                data-index={index}
              >
                {category}
                <a href="#scrollToTop">
                  <img
                    src={
                      selectedCategory === category ? ArrowWhite : ArrowBlack
                    }
                    alt="Arrow"
                    className="pt-1"
                  />
                </a>
                <span className="md:hidden hover:underline hover:underline-offset-4 text-[20px] text-[#5DA9E9]">
                  {" "}
                  View all{" "}
                </span>
              </div>
              <ProductItemData key={index} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopBar;