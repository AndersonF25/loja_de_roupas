import "./slides.style";
import Banner1 from "../../imgs/Banner-page-home/BannerSlide50Off.jpg";
import Banner2 from "../../imgs/Banner-page-home/BANNER30OFF.jpg";
import Banner1_1200PX from "../../imgs/Banner-page-home/BANNER1200PX.jpg";
import Banner2_1200PX from "../../imgs/Banner-page-home/BANNER2_1200PX.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ContainerCarousel, Img } from "./slides.style";
import { useEffect, useState } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slides = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleSize);

    return () => removeEventListener("resize", handleSize);
  }, []);

  const getBanner1 = () => (windowWidth >= 1200 ? Banner2 : Banner1_1200PX);
  const getBanner2 = () => (windowWidth >= 1200 ? Banner1 : Banner2_1200PX);

  useEffect;
  return (
    <ContainerCarousel>
      <Carousel
        responsive={responsive}
        showDots={false}
        draggable={false}
        keyBoardControl={true}
        swipeable={true}
      >
        <Img src={getBanner1()} />
        <Img src={getBanner2()} />
      </Carousel>
    </ContainerCarousel>
  );
};

export default Slides;
