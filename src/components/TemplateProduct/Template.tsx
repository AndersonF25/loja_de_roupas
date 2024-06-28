import { Box, Divider } from "@mui/material";
import "./template.style";
import {
  BtnAddCart,
  BtnViewProduct,
  ContainerBtn,
  Price,
  TemplateProduct,
  Title,
} from "./template.style";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";
import { useFormatQualityPhoto } from "../../hooks/useFormatQualityPhoto";
import { Product } from "../../types/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoEye } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

const Template = ({ thumbnail, price, title, item }: Product) => {
  const { formatCurrency } = useFormatCurrency();
  const { handleAddToCartItems } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <TemplateProduct>
      <LazyLoadImage
        src={useFormatQualityPhoto(thumbnail)}
        alt={title}
        style={{ borderRadius: "6px", maxWidth: "100%" }}
        effect="blur"
      />
      <Title>{title.slice(0, 29)}...</Title>
      <Divider />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Price>{formatCurrency(price)}</Price>
      </Box>
      <ContainerBtn>
        <BtnAddCart onClick={() => handleAddToCartItems(item)} title="Adicionar ao carrinho">
          <FaCartPlus />
        </BtnAddCart>
        <BtnViewProduct onClick={() => navigate(`/product/${item.id}`)} title="Ver detalhes">
          <IoEye />
        </BtnViewProduct>
      </ContainerBtn>
    </TemplateProduct>
  );
};

export default Template;
