import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Cabecalho from '../../components/cabecalho';

import './index.scss';


export default function Canal() {

    const [nomeCanal, setNomeCanal] = useState('');
    const [numeroCanal, setNumeroCanal] = useState(0);
    const [canalAberto, setCanalAberto] = useState(true);

    const { id } = useParams()

    async function Salvar() {
        const paramCorpo = {
            "nome": nomeCanal,
            "numero": numeroCanal,
            "aberto": canalAberto
        }

        const url = 'http://localhost:3200/canal/';
        let resp = await axios.post(url, paramCorpo);

        alert('Programa adicionado, ID: ' + resp.data.novoId);
    }

    async function Alterar() {
        const paramCorpo = {
            "nome": nomeCanal,
            "numero": numeroCanal,
            "aberto": canalAberto
        }

        const url = `http://localhost:3200/canal/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert('Canal alterado, ID: ' + resp.data.novoId);
    }

    async function Deletar() {
        const url = `http://localhost:3200/canal/${id}`
        let resp = await axios.delete(url)

        alert('Canal removido, ID: ' + id)
    }

    async function Buscar() {
        const url = `http://localhost:3200/canal/${id}`;
        let resp = await axios.get(url);

        console.log(resp.data);


        setNomeCanal(resp.data.nome);
        setNumeroCanal(resp.data.numero);
        setCanalAberto(resp.data.aberto);
    }

    useEffect(() => {
        Buscar()
    }, [])

    return (
        <div className='pagina-canal'>
            <Cabecalho />

            <h1>Cadastrar Canais</h1>
            <h1>{id}</h1>

            <div className='conteudo'>

                <div>
                    <label htmlFor="">Nome do Canal:</label>
                    <input type="text" value={nomeCanal} onChange={e => setNomeCanal(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Número do Canal:</label>
                    <input type="text" value={numeroCanal} onChange={e => setNumeroCanal(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Canal Aberto:</label>
                    <input type="checkbox" value={canalAberto} onChange={e => setCanalAberto(e.target.checked)} />
                </div>

            </div>

            {id > 0 ? <button onClick={Alterar}> Alterar </button> : <button onClick={Salvar}> Salvar </button>}
            {id > 0 ? <button onClick={Deletar}> Deletar </button> : ''}



        </div >
    )
}