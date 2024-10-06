import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cabecalho from '../../components/cabecalho';
import './consultaprograma.scss'

export default function ConsultarPrograma() {

    const [programa, setPrograma] = useState([]);

        async function Buscar() {
        const url = 'http://localhost:3200/canalPrograma/';
        let resp = await axios.get(url);
        setPrograma(resp.data);
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
                    {programa.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.canal}</td>
                            <td>{item.nome}</td>
                            <td>{item.genero}</td>
                            <td>{item.horario}</td>
                            <td><Link to= {`/cadastrar/${item.id}`}>Alterar</Link></td>
                        </tr>
                    )}
                </tbody>

            </table>

        </div>
    )
}