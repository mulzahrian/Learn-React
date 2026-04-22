import axios from "axios";
import { ENDPOINTS } from "../lib/endpoint";

const API_URL = import.meta.env.VITE_API_HOST;

const getProducts = async () => {
  try {
    const response = await axios.get(API_URL + ENDPOINTS.PRODUCT.GETPRODUCT);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getProducts ;