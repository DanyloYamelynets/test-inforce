import axios from "axios";

axios.defaults.baseURL =
  "https://65cf5b65bdb50d5e5f5b1c14.mockapi.io/products-api/";

export async function GetProductsList() {
  const { data } = await axios.get(`products`);
  return data;
}

export async function AddProduct(product) {
  const { data } = await axios.post(`products`, product);
  return data;
}
