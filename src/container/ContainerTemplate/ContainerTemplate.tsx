import { ChildrenProp } from "../../types/types";
import "./containterTemplate.style";

const ContainerTemplate = ({ children, onClick }: ChildrenProp) => {
  return <ContainerTemplate onClick={onClick}>{children}</ContainerTemplate>;
};

export default ContainerTemplate;
