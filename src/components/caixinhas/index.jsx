import './index.scss';
import { Link } from 'react-router-dom';

export default function Caixinha(props) {
    return (
        <div className='comp-caixinha'>
            <h3>{props.titulo}</h3>


            <div className='botões'>
                <Link to={`/${props.linkC}`}>Consultar</Link>
                <Link to={`/${props.linkI}`}>Inserir</Link>
            </div>
        </div>
    )
}