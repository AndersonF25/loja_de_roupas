import { IoCloseOutline, IoSearch } from "react-icons/io5";
import "./modalInput.style";
import { ContainerIcon, ContainerModal, Form, Input } from "./modalInput.style";

import { MyContext } from "../../context/Provider";
import { useContext } from "react";

type ModalProps = {
  setOpenModal: (value: boolean) => void;
};

const ModalSearchInput = ({ setOpenModal }: ModalProps) => {
  const { setSearchValue, handleSearch, searchValue } = useContext(MyContext);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setOpenModal(false);
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      setOpenModal(false);
    }
  });

  return (
    <ContainerModal>
      <ContainerIcon>
        <IoCloseOutline
          size={35}
          onClick={() => setOpenModal(!true)}
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
