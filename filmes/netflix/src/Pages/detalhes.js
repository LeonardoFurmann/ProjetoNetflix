import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './../components/Comments/index';

function Detalhes() {
    const [filme, setFilme] = useState([]);
    const [data, setData] = useState([]);
    const { id } = useParams();
    var dataVazio;

    const options = {
        method: 'GET'
    };

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then(response => response.json())
            .then(data => setFilme(data))
            .catch(err => console.error(err));
    }, [id]);

    var dataVazio =  Array.isArray(data) && data.length === 0;
        
    return (
        <div class="container">
            {dataVazio? (
                <h1 class="display-6">Não foi possivel encontrar os detalhes do filme</h1>
            ) : (
            <div className="row">
                <><div className="col">
                    <div className="card" style={{ maxWidth: "500px" }}>
                        <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
                    </div>
                </div><div className="col">
                        <div className="card mx-auto p-3">

                            <h1 className='text-center'>{filme.titulo}</h1>
                            <p className='text-center'>{filme.ano}</p>
                            <p className='text-center'>{filme.sinopse}</p>
                        </div>
                    </div></>

                    <Comments filme={id}/>
            </div>
            )}
        </div>
    )
}
export default Detalhes;