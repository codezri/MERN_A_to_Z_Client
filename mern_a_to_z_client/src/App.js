import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ShowBookList/>} />
        <Route path='/create-book' element={<CreateBook/>} />
        <Route path='/edit-book/:id' element={<UpdateBookInfo/>} />
        <Route path='/show-book/:id' element={<ShowBookDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
