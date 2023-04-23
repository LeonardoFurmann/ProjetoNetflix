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

    const options = {
        method: 'GET'
    };

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setFilmes(data))
            .catch(err => console.error(err))
    }, []);

        
       const filmesBuscados = useMemo(() => {
       const lowerBusca = busca.toLowerCase();
            return filmes.filter((filme) => filme.titulo.toLowerCase().includes(lowerBusca));
       },[busca]);          

    return (

        <div className="container text-center">

            <Titulo/>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Pesquisar Filmes" aria-label="Pesquisar Filmes" value ={busca} onChange={(ev) => setBusca(ev.target.value)}/>
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

        </div>
    );
}


