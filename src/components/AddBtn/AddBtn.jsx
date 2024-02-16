import React, { useState } from "react";
import Modal from "react-modal";
import { AddProduct } from "../../api";
import { AddModal } from "../Modal/AddModal";
import { AddButton } from "./AddBtnStyled";
Modal.setAppElement("#root");

export const AddBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddProduct = async (product) => {
    try {
      await AddProduct(product);
      closeModal();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <AddButton onClick={openModal}>Add</AddButton>
      <Modal
        style={{
          overlay: {
            backgroundColor: "rgba(150, 150, 150, 0.75)",
          },
          content: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 500,
            margin: "auto",
            border: "1px solid #ccc",
            background: "#d9f3ff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "15px",
            outline: "none",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <AddModal handleAddProduct={handleAddProduct} onClose={closeModal} />
      </Modal>
    </div>
  );
};
