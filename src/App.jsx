import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Autenticar/login';
import { Cadastro } from './Pages/Autenticar/Cadastro';
import { useState } from 'react';
import TokenContext from './contexts/TokenContext';
import UserContext from './contexts/UserContext';
import PaginaTarefas from './Pages/PaginaTarefas/PaginaTarefas';



function App() {
  const [token, setToken] = useState('') 
  const [usuario, setUsuario] = useState('')

  return (
    
     <TokenContext.Provider value={{ token, setToken }}>   {/* passando o token  via conxtext */}
     
       <UserContext.Provider value={{ usuario, setUsuario }} >  {/* passando o usuario  via conxtext */}
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/tarefas" element={<PaginaTarefas />} />

        </Routes>
      </Router>
      </UserContext.Provider>
    </TokenContext.Provider>
  )
}

export default App
