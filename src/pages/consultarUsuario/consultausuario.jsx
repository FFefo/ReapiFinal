import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cabecalho from '../../components/cabecalho';
import './consultausuario.scss'

export default function ConsultarUsuario() {

    const [usuario, setUsuario] = useState([]);

        async function Buscar() {
        const url = 'http://localhost:3200/usuario/';
        let resp = await axios.get(url);
        setUsuario(resp.data);
        }

    return (
        <div className='pagina-consultar-usuario'>
            <Cabecalho />

            <h1>Consultar Usuários</h1>

            <button onClick={Buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>

                <tbody>
                    {usuario.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td><Link to={`/inserir-usuario/${item.id}`}>Alterar</Link></td>
                            <td><Link to={`/inserir-usuario/${item.id}`}>Deletar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>

        </div>
    )
}