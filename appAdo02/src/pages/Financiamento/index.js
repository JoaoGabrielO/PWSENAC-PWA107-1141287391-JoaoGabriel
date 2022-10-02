import {Link} from 'react-router-dom';
import {useState} from 'react';

function Financiamento(){

    const [Nome, setNome]=useState('');
    const [Taxa, setTaxa]=useState('');
    const [ValorSolicitado, setValor]=useState('');

const [Dados, setDados]=useState({
    Nomex:"-------------",
    Taxax:"-------------",
    Valorx:"-------------" 
})

    function Registro(eventox){
        eventox.preventDefault();
        window.alert('Valor Solicitado !!')
        setDados({
            Nomex: Nome,
            Valorx: ValorSolicitado
        })
        }
        return(
        <div align='left' >
            <h1 align ='center' >Financiamento</h1>

            <form onSubmit={Registro}>
                
            <label>
                <strong>Nome do Cliente:</strong></label><br/>
                 <input placeholder='Digite seu Nome' value={Nome} onChange={(evento)=>setNome(evento.target.value)}/><br/>
          
            <label>
                <strong>Valor Solicitado</strong></label><br/>
                <input placeholder='Insira o valor que deseja solicitar' value={ValorSolicitado}
                onChange={(evento)=>setValor (evento.target.value)}/><br/>     

                <button type='submit'>Calcular Financiamento</button>
                <br/>

                <div>
                    <span>
                        Nome do Cliente:{Dados.Nomex}
                    </span><br/>
                    <span>
                        Valor Solicitado:
                        {Dados.Valorx}
                    </span><br/>
                    <span>
                        Taxa de Juros:
                        {Dados.Contax}
                    </span><br/>
                </div>  
                </form> 
        </div>
   
   );
    
}
export default Financiamento;