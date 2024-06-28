import { useContext } from "react";
import "./cartItems.style";
import { MyContext } from "../../context/Provider";
import {
  BtnFinish,
  ContainerCart,
  ContainerCloseIcon,
  ContainerDelivery,
  ContainerInfoPayment,
  ContainerWaningEmptyCart,
  Content,
  FreeDelivery,
  Infos,
  ListCards,
  Span,
  Summary,
  Warning,
} from "./cartItems.style";
import { IoClose } from "react-icons/io5";
import TemplateProductInCart from "../../components/TemplateProductInCart/TemplateProductInCart";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";

type CartItemsProps = {
  setOpenCart: (value: boolean) => void;
};

const CartItems = ({ setOpenCart }: CartItemsProps) => {
  const { cartItems } = useContext(MyContext);
  const { formatCurrency } = useFormatCurrency();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <ContainerCart>
      <ContainerCloseIcon>
        <IoClose
          onClick={() => setOpenCart(!true)}
          size={40}
          cursor="pointer"
          color="#000"
          style={{ zIndex: 100 }}
        />
      </ContainerCloseIcon>
      <Content>
        {cartItems.length === 0 ? (
          <ContainerWaningEmptyCart>
            <Warning>Seu carrinho esta vazio</Warning>
          </ContainerWaningEmptyCart>
        ) : (
          <>
            <ListCards>
              {cartItems?.map((item) => (
                <TemplateProductInCart
                  id={item.id}
                  price={item.price}
                  quantity={item.quantity}
                  thumbnail={item.thumbnail}
                  idParams={item.id}
                  title={item.title}
                  removeItem={item}
                />
              ))}
            </ListCards>

            <ContainerInfoPayment>
              <Summary>Resumo do pedido</Summary>
              <Infos>
                <Span>Subtotal de produtos</Span>
                <Span>{formatCurrency(totalPrice)}</Span>
              </Infos>
              <Infos>
                <Span>Entrega</Span>
                {cartItems.length >= 4 ? (
                  <FreeDelivery>Grátis</FreeDelivery>
                ) : (
                  <ContainerDelivery>
                    <FreeDelivery>
                      Faltam {4 - cartItems.length} item(s) para ter frete
                      grátis
                    </FreeDelivery>
                    <Span>R$ 40,00</Span>
                  </ContainerDelivery>
                )}
              </Infos>
              <BtnFinish>Finalizar pedido</BtnFinish>
            </ContainerInfoPayment>
          </>
        )}
      </Content>
    </ContainerCart>
  );
};
export default CartItems;
