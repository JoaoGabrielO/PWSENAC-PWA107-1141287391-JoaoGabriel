import {Link} from 'react-router-dom';
import {useState} from 'react';

function Conta (){

    const[Nome, setNome]=useState('');
    const[Saldo, setSaldo]=useState('');
    const[Saque, setSaque]=useState('');
    const[Deposito, setDeposito]=useState('');
    
    const[Dados, setDados]=useState({
        Nomex:"------------", 
        Saldox:"0",
        Saquex:"0",   
        Depositox:"------------",
    })

    function Registro(eventox){
        eventox.preventDefault();
        window.alert('Saldo Atualizado!!')
        setDados({
            Nomex:Nome,
            Saldox:Saldo,
            Saquex:Saque,
            Depositox:Deposito,
            
        })
    }

    return(
        <div align='left'>
            <h1 align='center'>Pagina da Conta Corrente</h1>

            <form onSubmit={Registro}>
            
            <label><strong>Nome:</strong></label><br/>
            <input placeholder='Digite seu Nome' value={Nome} onChange={(evento)=>setNome(evento.target.value)}/><br/>

            <label><strong>Saque:</strong></label><br/>
            <input placeholder='Saque Atual' value={Saque} onChange={(evento)=>setSaque
            (evento.target.value)}/><br/>

            <label><strong>Deposito:</strong></label><br/>
            <input placeholder='Valor Depositado' value={Deposito} onChange={(evento)=>setDeposito(evento.target.value)}/><br/>

            <label><strong>Saldo em Conta</strong></label><br/>
            <input placeholder='Saldo em conta' value={Saldo} onChange={(evento)=>setSaldo(evento.target.value)}/><br/>

            <button type='submit'>Atualizar Saldo</button>
                <br/>
                <div>
                    <span>
                        Nome do Usuario:{Dados.Nomex}
                    </span><br/>
                    <span>
                        Saldo do Usuario:
                        {Dados.Saldox}
                    </span><br/>
                    <span>
                        Valor Sacado:
                        {Dados.Saquex}
                    </span><br/>
                    <span>
                        Valor Depositado:
                        {Dados.Depositox}
                        </span>
                </div>  
                </form>
                </div>
    );
}
export default Conta;