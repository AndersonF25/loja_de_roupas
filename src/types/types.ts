export type Product = {
  item: Product;
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  description?: string;
  quantity: number;
  pictures?: { url: string }[];
};

export type MyContextProps = {
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  productsSearch: Product[];
  setProductsSearch: (productsSearch: Product[]) => void;
  error: string;
  setError: (error: string) => void;
  dinamicQuery: Product[];
  setDinamicQuery: (dinamicPage: Product[]) => void;
  handleSearch: (e: React.FormEvent) => void;
  handleAddToCartItems: (product: Product) => void;
  handleRemoveFromCartItems: (product: Product) => void;
  handleUpdateCartItems: (id: string, quantity: number) => void;
  totalValueFromCartItems: () => void;
};

export type ProviderContextProps = {
  children: React.ReactNode;
};

export type ChildrenProp = {
  children: React.ReactNode;
  onClick: (product: Product[]) => void;
};

export type ProductDetails = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  pictures?: { url: string }[];
  description?: string;
  quantity: number;
  removeItem: Product;
  idParams?: string;
};
