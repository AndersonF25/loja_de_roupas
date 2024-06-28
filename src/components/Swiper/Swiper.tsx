import { Swiper, SwiperSlide } from "swiper/react";
import useDetailsProduct from "../../hooks/useDetailsProduct";

const SwiperPhotos = () => {
  const { productDetail } = useDetailsProduct();

  return (
    <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
      {productDetail?.pictures?.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.url} alt={productDetail.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperPhotos;
