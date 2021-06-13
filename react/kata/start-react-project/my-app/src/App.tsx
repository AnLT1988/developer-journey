import { Home, AboutUs, Products, ErrorPage, NavBar } from 'components'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss'

const App = () => {
    return (
        <Router>
            <div>This is my app</div>
            <NavBar></NavBar>
            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route path='/aboutus'>
                    <AboutUs></AboutUs>
                </Route>
                <Route path='/products'>
                    <Products></Products>
                </Route>
                <Route path='*'>
                    <ErrorPage></ErrorPage>
                </Route>
            </Switch>

        </Router>
    )
}

export default App