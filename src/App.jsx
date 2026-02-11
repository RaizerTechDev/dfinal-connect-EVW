import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyle.scss";
import PaginaInicial from "./pages/paginainicial/PaginaInicial";
import Doacao from "./pages/doacao/Doacao";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import EventosEPalestras from "./pages/eventosEPalestras/EventosEPalestras";
import Mentoria from "./pages/mentoria/Mentoria";
import Usuario from "./pages/usuario/Usuario";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/eventosEPalestras" element={<EventosEPalestras />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
