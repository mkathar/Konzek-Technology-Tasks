import React, { useState } from "react";
import { useSelector } from "react-redux";

function ShowProducts() {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const [visibleCount, setVisibleCount] = useState(10);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="products">
      <h1 className="products__title">Products</h1>
      <div className="products__group">
        {filteredProducts ? (
          filteredProducts.slice(0, visibleCount).map((product, index) => (
            <div className="products__item" key={index}>
              <img className="products__item__img" src={product.image} alt="" />
              <div className="products__item__content">
                <p className="products__item__content__name">{product.title}</p>
                <div className="products__item__content__price">
                  <p className="products__item__content__price-amount">
                    {product.price}
                  </p>
                  <p className="products__item__content__price-currency">$</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="products__wait">
            Our products are feeling a bit shy today, but don't worry, they'll
            be here shortly! I guess they wanted to add a little mystery to the
            wait. 😊
          </h1>
        )}
      </div>

      {filteredProducts && filteredProducts.length > visibleCount && (
        <button className="products__btn" onClick={showMoreProducts}>
          Show More
        </button>
      )}
    </div>
  );
}

export default ShowProducts;
