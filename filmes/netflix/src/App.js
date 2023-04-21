import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Pages/home'
import Planos from './Pages/planos';
import Sobre from './Pages/sobre';
import Detalhes from './Pages/detalhes';
import Cadastro from './Pages/cadastro';

export default function App() {
  return (
    <Router>
      <div className="container">

        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li> <Link to='/' class="nav-link px-2 link-secondary">Home</Link> </li>
            <li> <Link to='/planos' class="nav-link px-2 link-dark">Planos</Link></li>
            <li> <Link to='/sobre/leo' class="nav-link px-2 link-dark">Sobre</Link></li>
            <li> <Link to='/cadastro' class="nav-link px-2 link-dark">Cadastro</Link></li>
          </ul>
        </header>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/planos' element={<Planos />}></Route>
          <Route path='/sobre/:name' element={<Sobre />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/detalhes/:filme' element={<Detalhes />}></Route>
          <Route path='*' element={<h1>Página não encontrada</h1>} />
        </Routes>

        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg class="bi" width="30" height="24"></svg>
            </a>
            <span class="text-muted">© Dev Web Avançado</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
          </ul>
        </footer>

      </div>
    </Router>



  );
}


