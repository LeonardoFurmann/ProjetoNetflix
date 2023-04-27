import { useState } from 'react';
import "./cadastro.css";

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomeT, setNomeT] = useState("");
    const [numero, setNumero] = useState("");
    const [cvc, setCvc] = useState("");

    function handleNomeChange(event) {
        setNome(event.target.value);
    }

    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleEnderecoChange(event) {
        setEndereco(event.target.value);
    }

    function handleNomeTChange(event) {
        setNomeT(event.target.value)
    }

    function handleNumeroChange(event) {
        setNumero(event.target.value)
    }

    function handleCvcChange(event) {
        setCvc(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
 
    }

    window.onload = function () {

        const botao = document.getElementById("botao");

        let botaoSelecionado = false;

        botao.addEventListener("click", function () {

            if (botaoSelecionado) {

                botao.style.backgroundColor = "white";
                botaoSelecionado = false;
            } else {

                botao.style.backgroundColor = "red";
                botaoSelecionado = true;
            }
        });

        const botao2 = document.getElementById("botao2");

        let botao2Selecionado = false;

        botao2.addEventListener("click", function () {

            if (botao2Selecionado) {

                botao2.style.backgroundColor = "white";
                botao2Selecionado = false;
            } else {

                botao2.style.backgroundColor = "red";
                botao2Selecionado = true;
            }
        });

        const botaoVerificar = document.getElementById("verificarCartao");

        botaoVerificar.addEventListener("click", function () {
            const cartao = document.getElementById("cartao").value;
            const valorcvc = document.getElementById("cvc").value;

            if (cartao.length > 20 && cvc.length !== 3) {
                alert("O número do cartão de crédito deve possuir menos de 20 caracteres.");
                alert("O número de CVC deve possuir exatamente 3 caracteres.");
                return;
            }

            if (cartao.length > 20) {
                alert("O número do cartão de crédito deve possuir menos de 20 caracteres.");
                return;
            }

            if (valorcvc.length !== 3) {
                alert("O número de CVC deve possuir exatamente 3 caracteres.");
                return;
            }

            console.log(`Nome: ${nome}, Endereço: ${endereco}, Telefone: ${telefone}, Nome do titular: ${nomeT}, Número do cartão: ${numero}, CVC do cartão: ${cvc}`);

        });
    };

    return (
        <div>
            <div className="titulo">
                <h1>Cadastro de Assinante</h1>
            </div>
            <div className="container1">
                <div className="dados">
                    <div className="container-dadospessoais">
                        <form onSubmit={handleSubmit}>
                            <h1>Dados Pessoais</h1>
                            <label>
                                <input placeholder="Nome" type="text" value={nome} onChange={handleNomeChange} />
                            </label>

                            <br />

                            <label>
                                <input placeholder="Telefone" type="text" value={telefone} onChange={handleTelefoneChange} />
                            </label>

                            <br />

                            <label>
                                <input placeholder="Endereço" type="text" value={endereco} onChange={handleEnderecoChange} />
                            </label>

                        </form>

                        <div className="plano">
                            <h1 classname="titulo2">Plano Escolhido</h1>
                            <button id="botao" >Free</button>
                            <button id="botao2">Plus</button>
                        </div>

                    </div>
                </div>
                <div className="container-dadoscartao">
                    <form onSubmit={handleSubmit}>
                        <h1>Dados do cartão</h1>
                        <label>
                            <input placeholder="Nome do titular" type="text" value={nomeT} onChange={handleNomeTChange} />
                        </label>

                        <br />

                        <label for="cartao">
                            <input id="cartao" name="cartao" placeholder="Número do cartão" type="text" value={numero} onChange={handleNumeroChange} />
                        </label>

                        <br />

                        <label for="cvc">
                            <input id="cvc" name="cvc" placeholder="CVC" type="password" value={cvc} onChange={handleCvcChange} />
                        </label>

                    </form>
                </div>
            </div>

            <div className="container2">
                <button id="verificarCartao">Assinar</button>
            </div>
        </div>
        
        
    );
}