import React, { useEffect, useState } from "react";
import { GetProductsList } from "../../api";
import { ProductItem } from "../ProductItem/ProductItem";
import { ProductListContainer, ProductListWrapper } from "./ProductListStyled";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productList = await GetProductsList();
        const sortedProducts = productList.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return a.count - b.count;
        });
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductListContainer>
      <ProductListWrapper>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductListWrapper>
    </ProductListContainer>
  );
};
