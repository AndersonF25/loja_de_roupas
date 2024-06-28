import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/types";

export default function useDetailsProduct() {
  const [productDetail, setProductDetail] = useState<Product | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`https://api.mercadolibre.com/items/${id}/description`)
          .then((response) => response.json())
          .then((description) => {
            setProductDetail({ ...data, description: description.plain_text });
          });
      });
  }, [id]);

  return { productDetail };
}
