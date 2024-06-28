import React, { useState } from "react";
import { fetchProducts } from "./useFetchProducts";
import { Product } from "../types/types";
import { useNavigate } from "react-router-dom";

export const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [productsSearch, setProductsSearch] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/search");
    setLoading(true);

    try {
      const response = await fetchProducts(searchValue);
      setProductsSearch(response);
    } catch (error) {
      setError("Algo deu errado, volte ao inicio e tente novamente!");
    } finally {
      setLoading(false);

      setSearchValue("");
    }
  };

  return {
    searchValue,
    setSearchValue,
    productsSearch,
    setProductsSearch,
    loading,
    setLoading,
    handleSearch,
    error,
    setError,
  };
};
