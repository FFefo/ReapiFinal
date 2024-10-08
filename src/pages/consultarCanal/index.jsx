import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cabecalho from '../../components/cabecalho';
import './index.scss'

export default function ConsultarCanal() {

    const [canal, setCanal] = useState([]);

    async function Buscar() {
        const url = 'http://localhost:3200/canal/';
        let resp = await axios.get(url);
        setCanal(resp.data);
    }

    return (
        <div className='pagina-consultar-canal'>
            <Cabecalho />

            <h1>Consultar Canais</h1>

            <button onClick={Buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Número</th>
                        <th>Aberto</th>
                    </tr>
                </thead>

                <tbody>
                    {canal.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.numero}</td>
                            <td>{item.aberto}</td>
                            <td><Link to={`/inserir-canal/${item.id}`}>Alterar</Link></td>
                            <td><Link to={`/inserir-canal/${item.id}`}>Deletar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>

        </div>
    )
}