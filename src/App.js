import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './crud app/Home';
import Create from './crud app/Create';
import Update from './crud app/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
