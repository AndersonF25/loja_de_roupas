import "./grid.style";
import { Grid } from "./grid.style";

type GridProductsProps = {
  children: React.ReactNode;
};

const GridProducts = ({ children }: GridProductsProps) => {
  return <Grid>{children}</Grid>;
};

export default GridProducts;
