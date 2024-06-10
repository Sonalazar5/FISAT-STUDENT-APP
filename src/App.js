import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStudent/>}/>
    <Route path='/SearchStudent' element={<SearchStudent/>}/>
    <Route path='/ViewAll' element={<ViewAll/>}/>
   
    </Routes></BrowserRouter>
  );
}

export default App;
