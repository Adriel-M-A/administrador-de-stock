import axios from "axios";
import { Product } from "../types/productTypes";

const BASE_URL = "https://fakestoreapi.com";

// 1) Listar todos los productos
export const fetchClothingProducts = async (): Promise<Product[]> => {
  const endpoints = [
    `${BASE_URL}/products/category/men's%20clothing`,
    `${BASE_URL}/products/category/women's%20clothing`,
  ];
  const [mens, womens] = await Promise.all(
    endpoints.map((url) => axios.get<Product[]>(url).then((res) => res.data))
  );
  return [...mens, ...womens];
};

// 2) Detalle de un producto
export const fetchProductById = async (id: number): Promise<Product> => {
  const { data } = await axios.get<Product>(`${BASE_URL}/products/${id}`);
  return data;
};
