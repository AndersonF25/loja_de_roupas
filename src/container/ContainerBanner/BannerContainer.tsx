import { ContainerBanner, Banner } from "./containerBanner.style";

type BannerContainerProps = {
  img: string;
};

const BannerContainer = ({ img }: BannerContainerProps) => {
  return (
    <ContainerBanner>
      <Banner>
        <img src={img} alt="banner" />
      </Banner>
    </ContainerBanner>
  );
};

export default BannerContainer;
