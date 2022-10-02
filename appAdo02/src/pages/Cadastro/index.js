import {Link} from 'react-router-dom';
import {useState} from 'react';

function Cadastro(){

const [Nome, setNome]=useState('');
const [Email, setEmail]=useState('');
const [CPF, setCPF]=useState('');

const [Dados, setDados]=useState({
    Nomex:"-------------",
    Emailx:"-------------",
    CPFx:"000-000-000-00" 
})

    function Registro(eventox){
        eventox.preventDefault();
        window.alert('Dados Cadastrados !!')
        setDados({
            Nomex: Nome,
            Emailx: Email,
            CPFx: CPF
        })
        }
        return(
        <div align='left' >
            <h1 align ='center' >Cadastro de Cliente</h1>

            <form onSubmit={Registro}>
                
            <label>
                <strong>Nome:</strong></label><br/>
                 <input placeholder='Digite seu Nome' value={Nome} onChange={(evento)=>setNome(evento.target.value)}/><br/>

               <label>
                <strong>Email:</strong></label><br/>
                 <input placeholder='Digite seu email' value={Email} onChange={(evento)=>setEmail(evento.target.value)}/>
               <br/>

               <label>
                <strong>CPF:</strong></label><br/>
                <input placeholder='Digite seu nome' value={CPF}
                onChange={(evento)=>setCPF (evento.target.value)}/><br/>

                <button type='submit'>Cadastrar</button>
                <br/>

                <div>
                    <span>
                        Nome do Usuario:{Dados.Nomex}
                    </span><br/>
                    <span>
                        Email do Usuario:
                        {Dados.Emailx}
                    </span><br/>
                    <span>
                        CPF do Usuario:
                        {Dados.CPFx}
                    </span>
                </div>  
                </form> 
        </div>
   
   );
    
}
export default Cadastro;