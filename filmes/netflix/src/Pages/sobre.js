import { useParams } from "react-router-dom"


export default function Planos() {

    return (
        <div class="row">

            <><div className="col" key={1}>

                <div className="card mx-auto p-3">
                    <p className="mx-auto p-5 align-middle"> Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.</p>
                </div>

            </div><div className="col " key={2} >
                    <div className="card " style={{ maxWidth: "450px" }}>
                        <img src='/assets/images/logo.png' className="card-img-top" />
                    </div>
                </div></>
        </div>
    )

}
