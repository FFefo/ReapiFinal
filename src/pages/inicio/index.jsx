import Cabecalho from "../../components/cabecalho"
import Caixinha from "../../components/caixinhas"
import "./index.scss"

export default function Inicio() {
    return (
        <div className="pagina-inicio">
            <Cabecalho />

            <div className="conteúdo">
                <h2>Selecione com qual tabela você deseja interagir:</h2>

                <div className="caixinhas">
                    <Caixinha titulo='Canal' link='canal'/>
                    <Caixinha titulo='Canal Programa' link='programa'/>
                    <Caixinha titulo='Usuário' link='usuario'/>
                    <Caixinha titulo='Programa Favorito' link='favorito'/>

                </div>

            </div>

        </div>
    )
}