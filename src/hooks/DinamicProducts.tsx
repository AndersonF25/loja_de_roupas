import { Suspense, lazy, useContext, useEffect } from "react";
import { fetchProducts } from "./useFetchProducts";
import { ContainerStandard } from "../container/ContainerStandard/container.style";
import { Container } from "../pages/Home/home.style";
import { MyContext } from "../context/Provider";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import { usePagination } from "../hooks/usePagination";
import SubMenu from "../components/SubMenuNav/SubMenu";
import {
  handleSortItemsByPrice,
  handleSortItemsPerAlphabeticOrder,
} from "./useOrderProducts";

const DinamicPage = lazy(() => import("../pages/DinamicPage/DinamicPage"));

type DinamicProductsProps = {
  query: string;
};

const DinamicProducts = ({ query }: DinamicProductsProps) => {
  const {
    loading,
    error,
    dinamicQuery,
    setDinamicQuery,
    setLoading,
    setError,
  } = useContext(MyContext);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(query);
        setDinamicQuery(data);
      } catch (error) {
        console.log(error);
        setError("Falha ao buscar produtos");
      } finally {
        setLoading(false);
      }
    };

    fetch();

    return () => {
      setDinamicQuery([]);
    };
  }, [query, setDinamicQuery, setLoading, setError]);

  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    changeCurrentPage,
  } = usePagination(dinamicQuery, 15);

  const sortItemsPerPrice = (order: string) => {
    handleSortItemsByPrice({
      order,
      listItems: dinamicQuery,
      setListItems: setDinamicQuery,
    });
  };

  const sortItemsPerAlphabeticalOrder = (order: string) => {
    handleSortItemsPerAlphabeticOrder({
      order,
      listItems: dinamicQuery,
      setListItems: setDinamicQuery,
    });
  };

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <ContainerStandard>
          {loading && <Loader />}
          {error && <p>{error}</p>}
          <SubMenu
            handleAscendingPrice={() => sortItemsPerPrice("asc")}
            handleDescendingPrice={() => sortItemsPerPrice("desc")}
            handleAlphabeticOrder={() => sortItemsPerAlphabeticalOrder("A-Z")}
          />

          <DinamicPage items={currentItems} query={query} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={nextPage}
            onPrev={prevPage}
            onPageChange={changeCurrentPage}
          />
        </ContainerStandard>
      </Container>
    </Suspense>
  );
};

export default DinamicProducts;
