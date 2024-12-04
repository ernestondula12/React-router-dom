import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importando as nossas paginas
import Home  from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

//Importando o nosso componente Header
import Header from "./components/Header";

//Criando a nossa função de roteamento
function RoutesApp(){

    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/sobre" element={ <Sobre /> }/>
                <Route path="/contato" element={ <Contato />}/>
                <Route path="/produto/:id" element={ <Produto /> }/>

                <Route path="*" element={ <Erro />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;