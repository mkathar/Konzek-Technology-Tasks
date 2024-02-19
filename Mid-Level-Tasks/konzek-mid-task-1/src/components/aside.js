import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByName, filterProductsByPrice } from "../redux/productsSlice";
import { Icon } from "../icon";

function Aside() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [productName, setProductName] = useState("");
  const dispatch = useDispatch();
  const handleFilter = () => {
    if (minPrice && !maxPrice) {
      dispatch(
        filterProductsByPrice({ minPrice: minPrice, maxPrice: Infinity })
      );
    } else if (!minPrice && maxPrice) {
      dispatch(filterProductsByPrice({ minPrice: 0, maxPrice: maxPrice }));
    } else {
      dispatch(
        filterProductsByPrice({
          minPrice: minPrice || 0,
          maxPrice: maxPrice || Infinity,
        })
      );
    }
    if (productName) {
      dispatch(filterByName(productName));
    }
  };
  return (
    <div className="aside">
      <div className="aside__box">
        <h4 className="aside__box__title">Products Filter</h4>
        <Icon name="filter" />
      </div>
      <div className="aside__filter">
        <label htmlFor="search" className="aside__filter__name__label">
          Search by Word
        </label>

        <input
          type="text"
          id="search"
          placeholder="Enter Product Name "
          className="aside__filter__input"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="price" className="header__filter__price__label">
          Price
        </label>
        <div className="aside__filter__group">
          <input
            id="price"
            className="aside__filter__group__input"
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            className="aside__filter__group__input"
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button className="aside__filter__button" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
}

export default Aside;
