import "./homeIcons.style";
import {
  ContainerIcons,
  Content,
  Description,
  Item,
  List,
  Logo,
  Title,
} from "./homeIcons.style";
import { FaCreditCard } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";
import { GiShakingHands } from "react-icons/gi";

const HomeIcons = () => {
  return (
    <ContainerIcons>
      <List>
        <Item>
          <Logo>
            <FaCreditCard size={37} />
          </Logo>

          <Content>
            <Title>Métodos de Pagamento</Title>
            <Description>
              Aceitamos Pix e Cartão de Crédito. Parcele em até 3x sem juros!
            </Description>
          </Content>
        </Item>
        <Item>
          <Logo>
            <LuBadgePercent size={37} />
          </Logo>
          <Content>
            <Title>Descontos Progressivos</Title>
            <Description>
              Compre mais de 1 item selecionado e tenha descontos progressivos
              no carrinho.
            </Description>
          </Content>
        </Item>
        <Item>
          <Logo>
            <BsTruck size={37} />
          </Logo>
          <Content>
            <Title>Frete Grátis</Title>
            <Description>
              Tenha o envio de graça na compra de 4 camisetas premium ou +
            </Description>
          </Content>
        </Item>
        <Item>
          <Logo>
            <GiShakingHands size={37} />
          </Logo>
          <Content>
            <Title>Troca Grátis</Title>
            <Description>
              Compre tranquilo, se não gostar ou não servir a primeira troca é
              de graça!
            </Description>
          </Content>
        </Item>
      </List>
    </ContainerIcons>
  );
};

export default HomeIcons;
