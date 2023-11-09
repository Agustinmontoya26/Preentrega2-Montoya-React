import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Home/>
   <Routes>
    <Route path='/category/:id' element={<ItemListContainer/>}/>
    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
   </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
