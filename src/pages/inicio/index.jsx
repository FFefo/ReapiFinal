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
                    <Caixinha titulo='Canal' linkC='consultar-canal' linkI='inserir-canal' />
                    <Caixinha titulo='Canal Programa' linkC='consultar-programa' linkI='inserir-programa' />
                    <Caixinha titulo='Usuário' linkC='consultar-usuario' linkI='inserir-usuario' />
                    <Caixinha titulo='Programa Favorito' linkC='consultar-favorito' linkI='inserir-favorito' />

                </div>

            </div>

        </div>
    )
}