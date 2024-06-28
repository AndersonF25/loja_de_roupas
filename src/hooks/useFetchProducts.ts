import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

export const fetchProducts = async (query: string) => {
  try {
    const response = await api.get(`/sites/MLB/search?q=${query}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
