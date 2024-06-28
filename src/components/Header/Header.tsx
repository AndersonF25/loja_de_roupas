import "./index.style";
import {
  ContainerHeader,
  ContainerIcon,
  ContainerInput,
  ContainerInputAndIcon,
  ContentHeader,
  Input,
  Logo,
  MenuHamburguer,
  Quantity,
} from "./index.style";

import { PiShoppingBagOpen } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../context/Provider";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuMobile from "../MenuMobile/MenuMobile";
import ModalSearchInput from "../ModalSearchInput/ModalSearchInput";
import CartItems from "../../pages/CartItems/CartItems";

const Header = () => {
  const navigate = useNavigate();
  const { handleSearch, setSearchValue, cartItems, searchValue } =
    useContext(MyContext);

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <ContainerHeader>
      <ContentHeader>
        <Logo onClick={() => navigate("/")}>StrikeShop</Logo>

        <ContainerInputAndIcon>
          <ContainerInput onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="Procurando algo especifico?"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <CiSearch
              onClick={() => setOpenModal(true)}
              style={{
                marginRight: 10,
                cursor: "pointer",
                width: "30px",
                height: "30px",
              }}
              type="submit"
            />
          </ContainerInput>
          <ContainerIcon title="carrinho">
            {cartItems.length === 0 ? null : (
              <Quantity>{cartItems.length}</Quantity>
            )}
            <PiShoppingBagOpen
              style={{
                width: "40px",
                height: "35px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={() => setOpenCart(true)}
            />
          </ContainerIcon>

          <MenuHamburguer onClick={() => setMenuIsVisible(!false)}>
            <GiHamburgerMenu size={35} />
          </MenuHamburguer>

          {menuIsVisible ? (
            <MenuMobile setMenuIsVisible={setMenuIsVisible} />
          ) : null}

          {openModal ? <ModalSearchInput setOpenModal={setOpenModal} /> : null}

          {openCart ? <CartItems setOpenCart={setOpenCart} /> : null}
        </ContainerInputAndIcon>
      </ContentHeader>
    </ContainerHeader>
  );
};

export default Header;
