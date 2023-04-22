const planos = [
    {
        "id": 1,
        "nome": "Básico com anúncios ",
        "preco": "R$ 18,90",
        "detalhes": "1 tela, resolução 720p e sem opção de download",
    },
    {
        "id": 2,
        "nome": "Padrão",
        "preco": "R$ 39,90",
        "detalhes": "2 telas simultâneas, resolução 1080p e opção de download",
    },
    {
        "id": 3,
        "nome": "Premium",
        "preco": "R$ 55,90",
        "detalhes": "4 telas simultâneas, resolução 4K + HDR e opção de download",
    },
]

export default function Planos() {

    return (
        <div class="container">
            <div class="row">
                {planos.map((plano, i) => (
                    <div className="col" key={i}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{plano.nome} </h5>
                                <p className="card-text">{plano.preco}</p>
                                <p className="card-text">{plano.detalhes}</p>

                                <div className="btn btn-primary"> Adquirir</div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
