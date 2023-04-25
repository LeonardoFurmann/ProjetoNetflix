import { useEffect } from "react";

const comentarios = [{
    "filme": "85", "comentarios": [{
        "usuario": "leo",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "leo02",
        "comentario": "filmaço"
    },
    {
        "usuario": "leo03",
        "comentario": "Muito bom!"
    }
    ]
},
{
    "filme": "78", "comentarios": [{
        "usuario": "leo",
        "comentario": "Meu filme preferido"
    },
    {
        "usuario": "leo05",
        "comentario": "Gostei muito!"
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = comentarios.filter(f =>f.filme === filme);
    
       
    if(comentariosFilme.length === 0){
        return(
             <h1 class="display-5 text-center mb-4" style={{ marginTop: "50px" }}>Sem Comentários</h1>
            )
         }  else {
            return (
                <div className="container" style={{ marginTop: "50px" }}> 
                    <h1 class="display-5 text-center mb-4">Comentários</h1>
                    {comentariosFilme[0].comentarios.map((comment, i) => (
                        <ul class="list-unstyled">
                            <li class="media my-4">
                                <div className="media-body">
                                    <h5 class="mt-0">{comment.usuario}</h5>
                                    {comment.comentario}
                                </div>
                            </li>
                        </ul>
        
                    ))}
                </div>
            )
         }                 
    
    
}