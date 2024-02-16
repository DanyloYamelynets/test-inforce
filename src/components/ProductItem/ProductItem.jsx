import React from "react";
import { Image, Info, InfoCont, OneProduct, Title } from "./ProductItemStyled";

export const ProductItem = ({ product }) => {
  const { imageUrl, name, count, size, weight } = product;

  return (
    <OneProduct>
      <Image src={imageUrl} alt={name} />
      <Title>{name}</Title>
      <InfoCont>
        <Info>Count: {count}</Info>
        <Info>
          Size:{" "}
          {size ? `${size.width} cm x ${size.height} cm` : "Not specified"}
        </Info>
        <Info>Weight: {weight}</Info>
      </InfoCont>
    </OneProduct>
  );
};
