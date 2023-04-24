import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './../components/Comments/index';

function Detalhes() {
    const [filme, setFilme] = useState([]);
    const { id } = useParams();

    const options = {
        method: 'GET'
    };

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then(response => response.json())
            .then(data => setFilme(data))
            .catch(err => console.error(err))
    }, [id]);


    return (
        <div class="container">

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
        </div>
    )
}
export default Detalhes;