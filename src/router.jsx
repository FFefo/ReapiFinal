import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Usuario from "./pages/usuario/cadastrousuario.jsx";
import Canal from "./pages/canal";
import Programa from "./pages/canalPrograma/cadastroprograma.jsx";
import Favorito from "./pages/programaFavorito";

export default function Navegation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/canal" element={<Canal />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route path="/favorito" element={<Favorito />} />
                <Route path="/programa" element={<Programa />} />
            </Routes>
        </BrowserRouter>
    )
}