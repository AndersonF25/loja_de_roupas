import { useState } from "react";
import { Product } from "../types/types";
import toast from "react-hot-toast";

export const useHandleCartItems = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCartItems = (product: Product) => {
    setCartItems((previtems) => {
      const existItems = previtems.find((item) => item.id === product.id);

      if (existItems) {
        toast.success("Quantidade do item atualizada!");
        return previtems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success("item adicionado ao carrinho");
        return [...previtems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateCartItems = (id: string, quantity: number) => {
    toast.success("Quantidade do item atualizada!");
    setCartItems((previtems) =>
      previtems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleRemoveFromCartItems = (product: Product) => {
    toast.success("item removido do carrinho");
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const totalValueFromCartItems = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return {
    cartItems,
    setCartItems,
    handleUpdateCartItems,
    handleRemoveFromCartItems,
    handleAddToCartItems,
    totalValueFromCartItems,
  };
};
