import { IoCloseOutline, IoSearch } from "react-icons/io5";
import "./modalInput.style";
import { ContainerIcon, ContainerModal, Form, Input } from "./modalInput.style";

import { MyContext } from "../../context/Provider";
import { useContext } from "react";
import useModalClose from "../../hooks/useHandleCloseModal";

type ModalProps = {
  setOpenModalSearch: (value: boolean) => void;
};

const ModalSearchInput = ({ setOpenModalSearch }: ModalProps) => {
  const { setSearchValue, handleSearch, searchValue } = useContext(MyContext);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setOpenModalSearch(false);
    }

    return () => window.removeEventListener("resize", () => {});
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      setOpenModalSearch(false);
    }
    return () => window.removeEventListener("scroll", () => {});
  });

  const {handleClose,isClosing} = useModalClose(setOpenModalSearch)

  return (
    <ContainerModal isClosing ={isClosing}>
      <ContainerIcon>
        <IoCloseOutline
          size={35}
          onClick={handleClose}
          color="#fff"
          cursor={"pointer"}
        />
      </ContainerIcon>

      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Procurando por algo especifico?"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <IoSearch size={30} color="#fff" type="submit" />
      </Form>
    </ContainerModal>
  );
};
export default ModalSearchInput;
