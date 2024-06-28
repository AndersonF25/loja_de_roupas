import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/bundle";
import "swiper/swiper-bundle.css";

import { IoArrowUndo } from "react-icons/io5";
import Loader from "../../components/Loader/Loader";
import {
  Btn,
  ContainerDescription,
  ContainerDetails,
  ContainerLoader,
  Description,
  DescriptionContent,
  EmptyDescription,
  BtnGoBack,
  Image,
  Price,
  Title,
  TitleDescription,
  ContainerSwiper,
} from "./details.style";
import { useContext } from "react";
import { MyContext } from "../../context/Provider";
import useDetailsProduct from "../../hooks/useDetailsProduct";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";
import { useNavigate } from "react-router-dom";

export default function DetailsProduct() {
  const { handleAddToCartItems } = useContext(MyContext);
  const { productDetail } = useDetailsProduct();
  const { formatCurrency } = useFormatCurrency();

  const navigate = useNavigate();

  if (!productDetail) {
    return (
      <ContainerLoader>
        <Loader />
      </ContainerLoader>
    );
  }

  return (
    <>
      <BtnGoBack onClick={() => navigate(-1)}>
        <IoArrowUndo />
      </BtnGoBack>
      <ContainerDetails>
        <ContainerSwiper>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
            loop={false}
          >
            {productDetail?.pictures?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.url.replace(/\w\.jpg/gi, "W.jpg")}
                  alt={productDetail?.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerSwiper>

        <ContainerDescription>
          <Title>{productDetail.title}</Title>

          <Price>{formatCurrency(productDetail.price)}</Price>
          <Btn onClick={() => handleAddToCartItems(productDetail)}>
            Adicionar ao carrinho
          </Btn>
          <DescriptionContent>
            {productDetail.description?.length === 0 ? (
              <EmptyDescription>
                Este produto não possui descrição.
              </EmptyDescription>
            ) : (
              <>
                <TitleDescription>Descrição</TitleDescription>
                <Description>{productDetail.description}</Description>
              </>
            )}
          </DescriptionContent>
        </ContainerDescription>
      </ContainerDetails>
    </>
  );
}
