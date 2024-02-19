import React, { useEffect } from "react";
import Header from "./components/header";
import ShowProducts from "./components/showProducts";
import Aside from "./components/aside";
import { useDispatch } from "react-redux";

import { fetchProduct } from "./redux/productsSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Aside />
      <ShowProducts />
    </div>
  );
}

export default App;
