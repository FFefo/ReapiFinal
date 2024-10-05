import './index.scss';
import { Link } from 'react-router-dom';

export default function Caixinha(props) {
    return (
        <div className='comp-caixinha'>
            <h3>{props.titulo}</h3>



            <Link to={`/${props.link}`}>Selecionar</Link>
        </div>
    )
}