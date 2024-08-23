import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Autenticar/login';
import { Cadastro } from './Pages/Autenticar/Cadastro';
import { useState } from 'react';
import TokenContext from './contexts/TokenContext';
import UserContext from './contexts/UserContext';
import TodasTarefas from './Pages/TodasTarefas/TodasTarefas';
import CriarTarefa from './Pages/CriarTarefa/CriarTarefa';
import MinhasTarefas from './Pages/MinhasTarefas/MinhasTarefas';





function App() {
  const [token, setToken] = useState('') 
  const [usuario, setUsuario] = useState('')
  const [nome, setNome] = useState('')

  return (
    
     <TokenContext.Provider value={{ token, setToken }}>   {/* passando o token  via conxtext */}
       <UserContext.Provider value={{ usuario, setUsuario, nome, setNome }  } >  {/* passando o usuario  via conxtext */}
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/tarefas" element={<TodasTarefas />} />
          <Route path="/criarTarefa" element={<CriarTarefa />} />
          <Route path="/minhastarefas" element={<MinhasTarefas />} />
         

          

        </Routes>
      </Router>
      </UserContext.Provider>
    </TokenContext.Provider>
  )
}

export default App
