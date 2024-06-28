import { Product } from "../../types/types";
import { ContainerTemplate } from "../../container/ContainerTemplate/containterTemplate.style";

import { Suspense, lazy } from "react";
import Loader from "../../components/Loader/Loader";

const GridProducts = lazy(() => import("../../grid/GridProducts/GridProducts"));
const Template = lazy(
  () => import("../../components/TemplateProduct/Template")
);

type DinamicPageProps = {
  items: Product[];
  query?: string;
};

const DinamicPage = ({ items }: DinamicPageProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <GridProducts>
        {items?.map((item) => (
          <ContainerTemplate key={item.id}>
            <Template
              item={item}
              id={item.id}
              quantity={item.quantity}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              pictures={item.pictures}
            />
          </ContainerTemplate>
        ))}
      </GridProducts>
    </Suspense>
  );
};

export default DinamicPage;
