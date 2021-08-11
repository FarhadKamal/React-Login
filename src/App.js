import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menubar from './pages/Menubar'
import Home from './pages/Home'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Switch>
        <Route path='/Home' exact component={() => <Home />} />
        <Route path='/Register' component={() => <Register />} />
        <Route path='/Login' component={() => <Login />} />
        <Route path='/secret' component={() => <Secret />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
