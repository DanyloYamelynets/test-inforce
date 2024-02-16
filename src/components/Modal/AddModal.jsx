import React, { useState } from "react";
import {
  BtnCont,
  Button,
  ButtonCancel,
  Form,
  FormContainer,
  Input,
  Label,
} from "./AddModalStyled";

export const AddModal = ({ handleAddProduct, onClose }) => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    name: "",
    count: "",
    size: { width: "", height: "" },
    weight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "width" || name === "height") {
      setProductData((prevData) => ({
        ...prevData,
        size: {
          ...prevData.size,
          [name]: value,
        },
      }));
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddProduct(productData);
    console.log(productData);
  };

  const handleCancel = () => {
    setProductData({
      imageUrl: "",
      name: "",
      count: "",
      size: { width: "", height: "" },
      weight: "",
    });
    onClose();
  };

  return (
    <FormContainer>
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Image URL:
          <Input
            type="text"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Count:
          <Input
            type="text"
            name="count"
            value={productData.count}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Size (Width):
          <Input
            type="text"
            name="width"
            value={productData.size.width}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Size (Height):
          <Input
            type="text"
            name="height"
            value={productData.size.height}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Weight:
          <Input
            type="text"
            name="weight"
            value={productData.weight}
            onChange={handleChange}
            required
          />
        </Label>
        <BtnCont>
          <Button type="submit">Confirm</Button>
          <ButtonCancel type="button" onClick={handleCancel}>
            Cancel
          </ButtonCancel>
        </BtnCont>
      </Form>
    </FormContainer>
  );
};
