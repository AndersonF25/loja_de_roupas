import { FaArrowUp } from "react-icons/fa";
import "./scrollToTop.style";
import { BtnScrollToTop } from "./scrollToTop.style";

const ScrollTotop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BtnScrollToTop title="voltar ao topo" onClick={handleScrollToTop}>
        <FaArrowUp />
      </BtnScrollToTop>
    </>
  );
};

export default ScrollTotop;
