import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Autenticar/login';
import { Cadastro } from './Pages/Autenticar/Cadastro';



function App() {
 return (
  <Router>
  <Routes>
  
    <Route path="/" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
   
  </Routes>
</Router>
  )
}

export default App
