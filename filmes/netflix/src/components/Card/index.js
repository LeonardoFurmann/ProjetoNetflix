import React, { useState, useEffect } from 'react';

function IsAssistido({ isAssitido }){

    if(isAssitido){
        return true;
    } 
    return false;
    
}



export default function Card() {

    const [filmes, setFilmes] = useState([]);

    const options = {
        method: 'GET'
    };

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setFilmes(data))
            .catch(err => console.error(err))
    }, []);


    return (

        <div className="container text-center">

            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Catálogo disponível</h1>
                <p class="lead">Atualmente temos disponíveis os filmes listados abaixo.</p>
            </div>

            <div class="row">
                    {filmes.map((filme, i) => (
                       
                        <div class="col-lg-4 col-md-4 col-sm-12" key={i}>
                        <div className="card">
                        <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{filme.titulo} ({filme.ano}) </h5>
                                <p>Nota: {filme.nota}</p>
                                <a href={`/detalhes/${filme.id}`}>
                                    <div className="btn btn-primary"> 
                                    { <IsAssistido/>
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


