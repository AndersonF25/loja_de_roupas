type ScrollToSectionProps = {
  elementRef: React.RefObject<HTMLDivElement>;
};

export const ScrollToSection = ({ elementRef }: ScrollToSectionProps) => {
  if (elementRef.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }
};
