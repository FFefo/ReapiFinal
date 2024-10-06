import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cabecalho from '../../components/cabecalho';
import './index.scss'

export default function ConsultarFavorito() {

    const [favorito, setFavorito] = useState([]);

    async function Buscar() {
        const url = 'http://localhost:3200/programaFavorito/';
        let resp = await axios.get(url);
        setFavorito(resp.data);
    }

    return (
        <div className='pagina-consultar-programa'>
            <Cabecalho />

            <h1>Consultar Favoritos</h1>

            <button onClick={Buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuário</th>
                        <th>Programa</th>
                        <th>Avaliação</th>
                    </tr>
                </thead>

                <tbody>
                    {favorito.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.usuario}</td>
                            <td>{item.programa}</td>
                            <td>{item.avaliacao}</td>
                            <td><Link to={`/inserir-favorito/${item.id}`}>Alterar</Link></td>
                            <td><Link to={`/inserir-favorito/${item.id}`}>Deletar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>

        </div>
    )
}