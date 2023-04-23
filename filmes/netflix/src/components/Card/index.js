import React, { useState, useEffect, useMemo } from 'react';
import Titulo from '../Titulo';

function IsAssistido({ isAssitido }) {

    if (isAssitido) {
        return true;
    }
    return false;

}



export default function Card() {

    const [filmes, setFilmes] = useState([]);
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState('');
    const [filmesBuscados, setfilmesBuscados] = useState([]);

    const options = {
        method: 'GET'
    };

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setFilmes(data))
            .then(data => setfilmesBuscados)
            .catch(err => console.error(err));
    }, []);

     useEffect(() => {
        const lowerBusca = busca.toLowerCase();
         const filmesBuscados = filmes.filter((filme) => {
       return filme.titulo.toLowerCase().includes(lowerBusca);
        });
        setfilmesBuscados(filmesBuscados);
    }, [busca, filmes]);

    useEffect(() => {
        const filmesFiltrados = [...filmesBuscados].sort((a,b) => {
            if(filtro === "1"){
                return a.titulo.localeCompare(b.titulo);
            } 
            if(filtro === "2"){
                return b.ano - a.ano;
            }
            if(filtro === "3"){
                return b.nota - a.nota;
            }
        });
        setfilmesBuscados(filmesFiltrados);
    }, [filtro]);


    return (

        <div className="container text-center">
            <Titulo />  
            <div class="input-group mb-3">
                
                <input type="text" class="form-control" placeholder="Pesquisar Filmes" aria-label="Pesquisar Filmes" value={busca} onChange={(ev) => setBusca(ev.target.value)} />

                {/* <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Pesquisar</button>
                </div> */}
        
                <select class="custom-select" id="inputGroupSelect02" onChange={(ev) => setFiltro(ev.target.value)}>  
                    <option selected>Filtrar Filmes</option>
                    <option value="1">Titulo</option>
                    <option value="2">Ano</option>
                    <option value="3">Nota</option>
                </select>
            </div>


            <div class="row">
                {filmesBuscados.map((filme, i) => (

                    <div class="col-lg-4 col-md-4 col-sm-12" key={i}>
                        <div className="card">
                            <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{filme.titulo} ({filme.ano}) </h5>
                                <p>Nota: {filme.nota}</p>
                                <a href={`/detalhes/${filme.id}`}>
                                    <div className="btn btn-primary">
                                        {<IsAssistido />
                                            ? <p>Assistir</p>
                                            : <p>Assistir Novamente</p>
                                        }</div>
                                </a>
                            </div>
                        </div>
                    </div>


                ))}
            </div>

        </div >
    );
}


