import { useState} from 'react';

function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    function handleNomeChange(event){
        setNome(event.target.value);
    }

    function handleTelefoneChange(event){
        setTelefone(event.target.value);
    }

    function handleEnderecoChange(event){
        setEndereco(event.target.value);
    }

    function handleSubimit(event){
        event.preventDefault();
        console.log(`Nome:  ${nome}, Telefone: ${telefone} Telefone: ${endereco}`);
    }


  return (
    <div className="form-custom">
      <form onSubmit={handleSubimit}>
        <label>
            Nome:
            <input type="text" value={nome} onChange={handleNomeChange}/>
        </label>

        <br />

        <label>
           Telefone:
            <input type="text" value={telefone} onChange={handleTelefoneChange}/>
        </label>

        <br />

        <label>
           Endereço:
            <input type="text" value={endereco} onChange={handleEnderecoChange}/>
        </label>

         <br />

        <label for="exampleFormControlInput1"> 
           Numéro:
            <input type="text" value={endereco} onChange={handleEnderecoChange}/>
        </label>

        <br />

        <button type="submit">Enviar</button>

        </form>
    </div>
  );
}

export default Cadastro;
