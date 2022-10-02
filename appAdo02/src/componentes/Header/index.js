import {Link} from 'react-router-dom'
import './style.css'
function Header(){
    
    return(
        <header>
            <h1 align='center'>OZUS RUbank</h1>
            
        <div className='menu'><br/>

        <Link to="/financiamento">Financiamento</Link>&nbsp;
        <Link to="/cadastro" >Cadastro</Link>&nbsp;
        <Link to="/contacorrente">Conta Corrente</Link>&nbsp;
        <Link to="/sobrenos">Sobre Nós</Link>
        <Link to="/">Home</Link>
    
            </div>
        </header>
    );
}
export default Header;