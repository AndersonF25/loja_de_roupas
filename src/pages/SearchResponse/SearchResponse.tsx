import { useContext } from "react";
import { MyContext } from "../../context/Provider";
import Loader from "../../components/Loader/Loader";
import GridProducts from "../../grid/GridProducts/GridProducts";
import { ContainerTemplate } from "../../container/ContainerTemplate/containterTemplate.style";
import Template from "../../components/TemplateProduct/Template";
import { Container } from "../Home/home.style";
import { ContainerStandard } from "../../container/ContainerStandard/container.style";
import Pagination from "../../components/Pagination/Pagination";
import { usePagination } from "../../hooks/usePagination";
import SubMenu from "../../components/SubMenuNav/SubMenu";
import {
  handleSortItemsByPrice,
  handleSortItemsPerAlphabeticOrder,
} from "../../hooks/useOrderProducts";

const SearchResponse = () => {
  const { productsSearch, loading, setProductsSearch } = useContext(MyContext);
  const {
    changeCurrentPage,
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    currentItems,
  } = usePagination(productsSearch, 15);

  const sortItemsPerPrice = (order: string) => {
    handleSortItemsByPrice({
      order,
      listItems: productsSearch,
      setListItems: setProductsSearch,
    });
  };

  const sortItemsPerAlphabeticalOrder = (order: string) => {
    handleSortItemsPerAlphabeticOrder({
      order,
      listItems: productsSearch,
      setListItems: setProductsSearch,
    });
  };

  return (
    <>
      {loading && <Loader />}
      <Container>
        <ContainerStandard direction="column">
          <SubMenu
            handleAscendingPrice={() => sortItemsPerPrice("asc")}
            handleDescendingPrice={() => sortItemsPerPrice("desc")}
            handleAlphabeticOrder={() => sortItemsPerAlphabeticalOrder("A-Z")}
          />
          <GridProducts>
            {currentItems?.map((item) => (
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
          <Pagination
            onNext={nextPage}
            onPageChange={changeCurrentPage}
            onPrev={prevPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </ContainerStandard>
      </Container>
    </>
  );
};

export default SearchResponse;
