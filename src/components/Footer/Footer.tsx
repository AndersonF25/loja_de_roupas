import "./footer.style";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ContainerFooter, ContentFooter, H2, Sociais } from "./footer.style";

const Footer = () => {
  return (
    <ContainerFooter>
      <ContentFooter>
        <H2>Siga-nos em nossas redes sociais</H2>
        <Sociais>
          <FaInstagram size={28} title="Instagram" />
          <FaFacebookSquare size={28} title="Facebook" />
          <FaTiktok size={28} title="Tiktok" />
          <FaYoutube size={28} title="Youtube" />
          <FaLinkedinIn size={28} title="Linkedin" />
        </Sociais>
        <span>todos os direitos reservados® - 2024 </span>
      </ContentFooter>
    </ContainerFooter>
  );
};
export default Footer;
