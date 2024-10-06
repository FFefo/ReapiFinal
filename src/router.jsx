import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/inicio";

import Canal from "./pages/inserirCanal/index.jsx";
import Favorito from "./pages/inserirFavorito/index.jsx";
import Usuario from "./pages/inserirUsuario/cadastrousuario.jsx";
import Programa from "./pages/inserirCanalPrograma/cadastroprograma.jsx";

import ConsultarCanal from "./pages/consultarCanal/index.jsx";
import ConsultarFavorito from "./pages/consultarFavorito/index.jsx";
import ConsultarPrograma from "./pages/consultarCanalPrograma/consultaprograma.jsx";
import ConsultarUsuario from "./pages/consultarUsuario/consultausuario.jsx";


export default function Navegation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inserir-canal/" element={<Canal />} />
                <Route path="/inserir-canal/:id" element={<Canal />} />
                <Route path="/inserir-favorito/" element={<Favorito />} />
                <Route path="/inserir-favorito/:id" element={<Favorito />} />
                <Route path="/inserir-programa/" element={<Programa />} />
                <Route path="/inserir-programa/:id" element={<Programa />} />
                <Route path="/inserir-usuario/" element={<Usuario />} />
                <Route path="/inserir-usuario/:id" element={<Usuario />} />
                <Route path="/consultar-canal" element={<ConsultarCanal />} />
                <Route path="/consultar-favorito" element={<ConsultarFavorito />} />
                <Route path="/consultar-usuario" element={<ConsultarUsuario />} />
                <Route path="/consultar-programa" element={<ConsultarPrograma />} />
            </Routes>
        </BrowserRouter>
    )
}