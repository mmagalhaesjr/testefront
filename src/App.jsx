import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carros from "./Pages/Carros/Carros";

function App() {
 return (
  <Router>
  <Routes>
  
    <Route path="/carros" element={<Carros />} />
   
  </Routes>
</Router>
  )
}

export default App
