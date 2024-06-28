import { Btn, ListPagination, NavPagination, Ul } from "./pagination.style";

type PaginationProps = {
  currentPage?: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  totalPages,

  onPageChange,
}: PaginationProps) => {
  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <NavPagination>
      <Ul>
        <ListPagination>
          {pageNumbers.map((n) => (
            <Btn key={n} onClick={() => onPageChange(n)}>
              {n}
            </Btn>
          ))}
        </ListPagination>
      </Ul>
    </NavPagination>
  );
};

export default Pagination;
