import "./section.style";
import {
  Btn,
  ContainerLeftMan,
  ContainerMen,
  ContainerRightMan,
  ContainerSection,
  ContainerWoman,
  Content,
  ContentLeftWoman,
  ContentRightWoman,
  H3,
  Img,
  Span,
} from "./section.style";

import BannerWoman from "../../imgs/Banner-page-home/BannerFeminino2.jpg";
import BannerMan from "../../imgs/Banner-page-home/BannerMan2.jpg";
import { useNavigate } from "react-router-dom";
import HomeIcons from "../SectionHomeIcons/HomeIcons";

const SectionHome = () => {
  const navigate = useNavigate();
  return (
    <ContainerSection>
      <HomeIcons />
      <ContainerWoman>
        <ContentLeftWoman>
          <Img src={BannerMan} />
        </ContentLeftWoman>
        <ContentRightWoman>
          <Content>
            <H3>Masculino</H3>
            <Span>confira a seleção de moda masculina</Span>
            <Btn onClick={() => navigate("/man")}>comprar</Btn>
          </Content>
        </ContentRightWoman>
      </ContainerWoman>
      <ContainerMen>
        <ContainerLeftMan>
          <Content>
            <H3>Feminino</H3>
            <Span>confira a seleção de moda feminina</Span>
            <Btn onClick={() => navigate("/women")}>comprar</Btn>
          </Content>
        </ContainerLeftMan>
        <ContainerRightMan>
          <Img src={BannerWoman} />
        </ContainerRightMan>
      </ContainerMen>
    </ContainerSection>
  );
};

export default SectionHome;
