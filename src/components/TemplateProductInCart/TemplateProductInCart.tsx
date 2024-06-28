import { FaRegTrashAlt } from "react-icons/fa";
import "./templateProductInCart.style";
import {
  BtnTrash,
  Container,
  ContainerDescription,
  ContainerQuantity,
  HeaderDescription,
  Img,
  Input,
  Price,
  Title,
} from "./templateProductInCart.style";
import { ProductDetails } from "../../types/types";
import { useFormatQualityPhoto } from "../../hooks/useFormatQualityPhoto";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";
import { useContext } from "react";
import { MyContext } from "../../context/Provider";
import { Link } from "react-router-dom";

const TemplateProductInCart = ({
  id,
  price,
  quantity,
  thumbnail,
  title,
  removeItem,
  idParams,

}: ProductDetails) => {
  const { formatCurrency } = useFormatCurrency();
  const { handleUpdateCartItems, handleRemoveFromCartItems } =
    useContext(MyContext);

  return (
    <Container key={id}>
      <Img src={useFormatQualityPhoto(thumbnail)} alt={title} />
      <ContainerDescription >
        <HeaderDescription>
          <Title>
            <Link
              style={{ color: "var(--font-primary)" }}
              to={`/product/${idParams}`}
              title={title}
            >
              {title.split("").slice(0, 32)}
            </Link>
          </Title>
          <BtnTrash
            onClick={() => handleRemoveFromCartItems(removeItem)}
            title="remover item"
          >
            <FaRegTrashAlt />
          </BtnTrash>
        </HeaderDescription>

        <ContainerQuantity>
          <Input
            type="number"
            value={quantity}
            min={1}
            max={20}
            onChange={(e) =>
              handleUpdateCartItems(id, parseInt(e.target.value))
            }
          />
          <Price> {formatCurrency(quantity * price)}</Price>
        </ContainerQuantity>
      </ContainerDescription>
    </Container>
  );
};

export default TemplateProductInCart;
