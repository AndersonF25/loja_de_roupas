import { IoClose } from "react-icons/io5";
import "./menuMobile.style";
import {
  ContainerIcon,
  ContainerMobile,
  GlobalStyle,
  NavList,
} from "./menuMobile.style";
import { Link } from "react-router-dom";

type MenuMobileProps = {
  setMenuIsVisible: (value: boolean) => void;
};

const MenuMobile = ({ setMenuIsVisible }: MenuMobileProps) => {
  return (
    <>
      <GlobalStyle isMenuOpen />
      <ContainerMobile>
        <ContainerIcon onClick={() => setMenuIsVisible(!true)}>
          <IoClose size={40} color="#fff" />
        </ContainerIcon>
        <NavList>
          <Link
            to={"/"}
            onClick={() => setMenuIsVisible(!true)}
            style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bolder" }}
          >
            Home
          </Link>
          <Link
            to={"#"}
            onClick={() => setMenuIsVisible(!true)}
            style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bolder" }}
          >
            Produtos
          </Link>
          <Link
            to={"#"}
            onClick={() => setMenuIsVisible(!true)}
            style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bolder" }}
          >
            Sobre nós
          </Link>
          <Link
            to={"/teste"}
            onClick={() => setMenuIsVisible(!true)}
            style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bolder" }}
          >
            Contato
          </Link>
        </NavList>
      </ContainerMobile>
    </>
  );
};

export default MenuMobile;
