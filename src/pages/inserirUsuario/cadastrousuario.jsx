import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './cadastrousuario.scss';

export default function Usuario() {

    const [usuarioNome, setUsuarioNome] = useState('');
    
    const { id } = useParams();

    async function Salvar(){
        const paramCorpo = {
            "nome": usuarioNome
        }

        const url = 'http://localhost:3200/usuario/';
        let resp = await axios.post(url, paramCorpo);

        alert('Usuario adicionado, ID: ' + resp.data.novoId);
    }

    async function Alterar() {
        const paramCorpo = {
            "nome": usuarioNome
        }

        const url = `http://localhost:3200/usuario/${id}`;
        let resp = await axios.put(url, paramCorpo);

        alert('Canal alterado, ID: ' + resp.data.novoId);
    }

    async function Deletar() {
        const url = `http://localhost:3200/usuario/${id}`
        let resp = await axios.delete(url)

        alert('Canal removido, ID: ' + id)
    }

    async function Buscar() {
        const url = `http://localhost:3200/usuario/${id}`;
        let resp = await axios.get(url);

        console.log(resp.data);


        setUsuarioNome(resp.data.nome);
    }

    useEffect(() => {
        Buscar()
    }, [])



    return (
        <div className='pagina-usuario'>
            <Cabecalho />

            <h1>Cadastrar Usuários</h1>
            <h1>{id}</h1>

            <div className='form'>

                <div>
                    <label htmlFor="">Nome do Usuário:</label>
                    <input type="text" value={usuarioNome} onChange={e => setUsuarioNome(e.target.value)} />
                </div>

            </div>

            <button onClick={Salvar}> Salvar </button>

        </div>
    )
}