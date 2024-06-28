import { createContext, useState } from "react";
import { MyContextProps, Product, ProviderContextProps } from "../types/types";
import { useHandleCartItems } from "../hooks/useHandleCartItems";
import { useSearchValue } from "../hooks/useSearchValue";

export const MyContext = createContext<MyContextProps>({} as MyContextProps);

const Provider = ({ children }: ProviderContextProps) => {
  const {
    searchValue,
    setSearchValue,
    handleSearch,
    loading,
    setLoading,
    productsSearch,
    setProductsSearch,
    error,
    setError,
  } = useSearchValue();

  const {
    cartItems,
    setCartItems,
    handleAddToCartItems,
    handleRemoveFromCartItems,
    handleUpdateCartItems,
    totalValueFromCartItems,
  } = useHandleCartItems();

  const [dinamicQuery, setDinamicQuery] = useState<Product[]>([]);

  return (
    <MyContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCartItems,
        handleRemoveFromCartItems,
        handleUpdateCartItems,
        totalValueFromCartItems,
        searchValue,
        setSearchValue,
        handleSearch,
        loading,
        productsSearch,
        setLoading,
        setProductsSearch,
        error,
        setError,
        dinamicQuery,
        setDinamicQuery,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
