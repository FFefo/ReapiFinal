import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
        <div className='comp-cabecalho'>
            <h1>ReAPI</h1>

            <Link to="/">Início</Link>

        </div>
    )
}