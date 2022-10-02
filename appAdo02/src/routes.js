//Este componente serve para "Gestão" das rotas
//Navegação na WEB
import {BrowserRouter, Routes, Route} from "react-router-dom";
//
//import NOMEPAGINA from './pages/PASTA/NOMEPAGINA/index.js'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro';
import Conta from './pages/ContaCorrente';
import Financiamento from './pages/Financiamento'; 
import Header from "./componentes/Header";
import {Link} from 'react-router-dom';
import Erro from './pages/Erro'
import SobreNos from "./pages/SobreNos"
//Não é necessario escrever o index

function RouterApp (){
    return (
        <nav align = 'center'>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/contacorrente" element={<Conta/>}/>
                <Route path="/financiamento" element={<Financiamento/>}/>
                <Route path="/sobrenos" element={<SobreNos/>}/>
                <Route path="*" element={<Erro />}/>
                
            </Routes>
        </BrowserRouter>
        </nav>
    );

}
export default RouterApp;