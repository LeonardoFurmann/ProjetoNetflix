import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './Pages/home';
import Planos from './Pages/planos';
import Sobre from './Pages/sobre';
import Detalhes from './Pages/detalhes';
import Cadastro from './Pages/cadastro';

 function App() {
  return (
    <Router>  
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/planos' element={<Planos />}></Route>
          <Route path='/sobre' element={<Sobre />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/detalhes/:id' element={<Detalhes />}></Route>
          <Route path='*' element={<h1>Página não encontrada</h1>} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
