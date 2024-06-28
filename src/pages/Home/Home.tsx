import Footer from "../../components/Footer/Footer";
import SectionHome from "../../components/SectionHome/SectionHome";
import Slides from "../../components/Slides/Slides";

import "./home.style";
import { Container } from "./home.style";

const Home = () => {
  return (
    <Container>
      <Slides />
      <SectionHome />
      <Footer/>
    </Container>
  );
};

export default Home;
