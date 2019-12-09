import React from 'react'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import home from './components/home'
import Login from './components/Login'
import Moviedetails from './components/Moviedetails'
import Register from './components/Register'
import Flag from './components/Flag'



const App= ( ) => {

  return (
    <div>
      <BrowserRouter>
    <Switch>
      <Route path='/' exact component={home} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Register} />
      <Route path='/movie/:imdbID' exact component={Moviedetails} />
      <Route path='/flag' exact component={Flag} />
      
    </Switch>
      </BrowserRouter>
    </div>

  )
}

export default  App
