import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './cadastroprograma.scss';

export default function Programa() {

    const [canalId, setCanalId] = useState(0);
    const [nomePrograma, setNomePrograma] = useState('');
    const [generoPrograma, setGeneroPrograma] = useState('');
    const [horaPrograma, setHoraPrograma] = useState('00:00:00');

    const { id } = useParams();

    async function Salvar() {
        const paramCorpo = {
            "canal": canalId,
            "nome": nomePrograma,
            "genero": generoPrograma,
            "horario": horaPrograma
        }

        const url = 'http://localhost:3200/canalPrograma/';
        let resp = await axios.post(url, paramCorpo);

        alert('Programa adicionado, ID: ' + resp.data.novoId);
    }

    async function Alterar() {
        const paramCorpo = {
            "canal": canalId,
            "nome": nomePrograma,
            "genero": generoPrograma,
            "horario": horaPrograma
        }

        const url = `http://localhost:3200/canalPrograma/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert('Canal alterado, ID: ' + id);
    }

    async function Deletar() {
        const url = `http://localhost:3200/canal/${id}`
        let resp = await axios.delete(url)

        alert('Canal removido, ID: ' + id)
    }

    async function Buscar() {
        const url = `http://localhost:3200/canalPrograma/${id}`;
        let resp = await axios.get(url);

        console.log(resp.data);


        setCanalId(id);
        setNomePrograma(resp.data.nome);
        setGeneroPrograma(resp.data.genero);
        setHoraPrograma(resp.data.horario);
    }

    useEffect(() => {
        Buscar()
    }, [])

    return (
        <div className='pagina-programa'>
            <Cabecalho />

            <h1>Cadastrar Programas</h1>
            <h1 className='id'>Id: {id}</h1>

            <div className='conteudo'>

                <div>
                    <label htmlFor="">ID do Canal:</label>
                    <input type="text" value={canalId} onChange={e => setCanalId(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Nome do Programa:</label>
                    <input type="text" value={nomePrograma} onChange={e => setNomePrograma(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Genêro do Programa:</label>
                    <input type="text" value={generoPrograma} onChange={e => setGeneroPrograma(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Horário do Programa:</label>
                    <input type="time" value={horaPrograma} onChange={e => setHoraPrograma(e.target.value)} />
                </div>

            </div>

            {id > 0 ? <button onClick={Alterar}> Alterar </button> : <button onClick={Salvar}> Salvar </button>}
            {id > 0 ? <button onClick={Deletar}> Deletar </button> : ''}

        </div>
    )
}