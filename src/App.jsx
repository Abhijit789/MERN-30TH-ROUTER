import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ContactList from './components/contactlist/ContactList'
import AddContact from './components/addcontact/AddContact'
import ViewContact from './components/viewcontact/ViewContact'
import PageNotFound from './components/page not found/PageNotFound'
import EditContact from './components/editcontact/EditContact'
import NavbarComponent from './components/navbar/NavbarComponent'

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          {/* <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path='/about' element={<h1>About Page</h1>}/>
          <Route path='/contact' element={<h1>Contact Page</h1>}/> */}
          <Route path='/' element={<NavbarComponent/>}>
          <Route index element={<ContactList/>}/>
          <Route path='/addContact' element={<AddContact/>}/>
          <Route path='/viewcontact/:id' element={<ViewContact/>}/>
          <Route path='/editcontact/:id' element={<EditContact/>}/>
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
          {/* <Route path='/' element={<NavbarComponent/>}/> */}
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App