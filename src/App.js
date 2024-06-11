import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginUser from './components/LoginUser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginUser/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/view' element={<ViewUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
