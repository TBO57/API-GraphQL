import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Index } from './components/index.jsx'
import { FormUpdate } from './components/formUpdate.jsx'

function App() {
  return (
    <>
      <div className="App">

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/actualizarusuario/:id' element={<FormUpdate />} />
      </Routes>
      
    </div>
    </>
  );
}

export default App;
