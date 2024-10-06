import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cabecalho from '../../components/cabecalho';
import './index.scss';


export default function Favorito() {

    const [idUsuario, setIdUsuario] = useState(0);
    const [idPrograma, setIdPrograma] = useState(0);
    const [valorAvaliacao, setValorAvaliacao] = useState(0);

    const { id } = useParams()

    async function Salvar() {
        const paramCorpo = {
            "usuario": idUsuario,
            "programa": idPrograma,
            "avaliacao": valorAvaliacao
        }

        const url = 'http://localhost:3200/programaFavorito/';
        let resp = await axios.post(url, paramCorpo);

        alert('Programa adicionado, ID: ' + resp.data.novoId);
    }

    async function Alterar() {
        const paramCorpo = {
            "usuario": idUsuario,
            "programa": idPrograma,
            "avaliacao": valorAvaliacao
        }

        const url = `http://localhost:3200/programaFavorito/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert('Canal alterado, ID: ' + resp.data.novoId);
    }

    async function Deletar() {
        const url = `http://localhost:3200/programaFavorito/${id}`
        let resp = await axios.delete(url)

        alert('Canal removido, ID: ' + id)
    }

    async function Buscar() {
        const url = `http://localhost:3200/programaFavorito/${id}`;
        let resp = await axios.get(url);

        console.log(resp.data);


        setIdUsuario(resp.data.usuario);
        setIdPrograma(resp.data.programa);
        setValorAvaliacao(resp.data.avaliacao);
    }

    useEffect(() => {
        Buscar()
    }, [])

    return (
        <div className='pagina-favorito'>
            <Cabecalho />

            <h1>Cadastrar Canais</h1>
            <h1>{id}</h1>

            <div className='conteudo'>

                <div>
                    <label htmlFor="">Id do Usuário:</label>
                    <input type="text" value={idUsuario} onChange={e => setIdUsuario(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Id do Programa:</label>
                    <input type="text" value={idPrograma} onChange={e => setIdPrograma(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Avaliação:</label>
                    <input type="text" value={valorAvaliacao} onChange={e => setValorAvaliacao(e.target.value)} />
                </div>

            </div>

            {id > 0 ? <button onClick={Alterar}> Alterar </button> : <button onClick={Salvar}> Salvar </button>}
            {id > 0 ? <button onClick={Deletar}> Deletar </button> : ''}
        </div>
    )
}