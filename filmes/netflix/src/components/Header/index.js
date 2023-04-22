import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="container">

            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li> <Link to='/' class="nav-link px-2 link-secondary">Home</Link> </li>
                    <li> <Link to='/planos' class="nav-link px-2 link-dark">Planos</Link></li>
                    <li> <Link to='/sobre' class="nav-link px-2 link-dark">Sobre</Link></li>
                    <li> <Link to='/cadastro' class="nav-link px-2 link-dark">Cadastrar</Link></li>
                </ul>
            </header>
        </div>
    )
}



