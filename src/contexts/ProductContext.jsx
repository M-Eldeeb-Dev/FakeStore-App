import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(0);
  const [loading, setLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  function getCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }

  function getProducts() {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }

  function getProductsByCategory(category) {
    const checkCategory =
      category === "all" ? "" : categories.find((cat) => cat === category);

    const apiLink = `https://fakestoreapi.com/products/${
      checkCategory === "" ? "" : `category/${checkCategory}`
    }`;

    setLoading(true);
    axios
      .get(apiLink)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }

  function getProductsById(id) {
    setProductLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setProductLoading(false));
  }

  function addToCart() {
    setCart((prevCart) => prevCart + 1);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        cart,
        loading,
        productLoading,
        getProductsByCategory,
        getProductsById,
        addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;
