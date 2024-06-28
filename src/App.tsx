import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Provider from "./context/Provider";
import "./global.css";
import { Router } from "./routes/routes";
import ScrollTotop from "./components/ScrollToTop/ScrollToTop";


function App() {
  return (
    <div style={{ position: "relative" }}>
      <Provider>
        <Header />
        <Router />
        <ScrollTotop />
      </Provider>
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000, style: { fontFamily: "Saira" } }}
      />
    </div>
  );
}

export default App;
