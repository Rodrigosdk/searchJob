import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from '../Pages/Main'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
