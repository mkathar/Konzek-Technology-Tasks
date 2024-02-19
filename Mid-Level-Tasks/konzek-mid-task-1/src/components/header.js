import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../redux/productsSlice";

function Header() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const [lastSelectedCategory, setLastSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    dispatch(filterByCategory(category));
    setLastSelectedCategory(category);
  };

  return (
    <div className="header">
      <h1 className="header__title">./KATAR'S SHOP</h1>
      <div className="header__category">
        <button
          className={`header__category__button ${
            lastSelectedCategory === "All"
              ? "header__category__button--active"
              : ""
          }`}
          onClick={() => handleCategoryChange("All")}
        >
          All Products
        </button>
        <button
          className={`header__category__button ${
            lastSelectedCategory === "men's clothing"
              ? "header__category__button--active"
              : ""
          }`}
          onClick={() => handleCategoryChange("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className={`header__category__button ${
            lastSelectedCategory === "women's clothing"
              ? "header__category__button--active"
              : ""
          }`}
          onClick={() => handleCategoryChange("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className={`header__category__button ${
            lastSelectedCategory === "electronics"
              ? "header__category__button--active"
              : ""
          }`}
          onClick={() => handleCategoryChange("electronics")}
        >
          Electronic
        </button>
        <button
          className={`header__category__button ${
            lastSelectedCategory === "jewelery"
              ? "header__category__button--active"
              : ""
          }`}
          onClick={() => handleCategoryChange("jewelery")}
        >
          Jewels
        </button>
      </div>
    </div>
  );
}

export default Header;
