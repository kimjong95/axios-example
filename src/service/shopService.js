import axios from "axios";

const axiosApi = axios.create();

export async function getProductsByCategory(category, limit) {
  const url = `https://fakestoreapi.com/products/category/${category}?limit=${limit}}`;
  return axiosApi.get(url).then((res) => res && res.data);
}
