import { Product } from "../types/types";

type HandleOrderProps = {
  listItems: Product[];
  setListItems: (products: Product[]) => void; // Corrigi o tipo da função
  order: string;
};

export const handleSortItemsByPrice = ({
  order,
  listItems,
  setListItems,
}: HandleOrderProps) => {
  const sortedList = [...listItems].sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    }
    if (order === "desc") {
      return b.price - a.price;
    }
    return 0; 
  });

  setListItems(sortedList);
}




export const handleSortItemsPerAlphabeticOrder = ({
  order,
  listItems,
  setListItems,
}: HandleOrderProps) => {
  const alphabeticalOrder = [...listItems].sort((a, b) => {
    if (order === "A-Z") {
      return a.title.localeCompare(b.title);
    }
    
    return 0;
  });

  setListItems(alphabeticalOrder);
};
