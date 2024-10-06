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

            <h1>Consultar Programas</h1>

            <button onClick={Buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Canal ID</th>
                        <th>Nome</th>
                        <th>Genêro</th>
                        <th>Horário</th>
                    </tr>
                </thead>

                <tbody>
                    {favorito.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.canal}</td>
                            <td>{item.nome}</td>
                            <td>{item.genero}</td>
                            <td>{item.horario}</td>
                            <td><Link to= {`/inserir-programa/${item.id}`}>Alterar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>

        </div>
    )
}