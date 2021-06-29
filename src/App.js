import React from 'react';
import './Components/index.css';
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom'
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Skills} from './Components/Skills';
import {Navigation} from './Components/Navigation';
function App(){
    return(
        <BrowserRouter>
        <div className="container">
        <Navigation/> 
            <Switch>
                <Route path='/' component={Home}exact/>
                <Route path='/About'component={About}/>
                <Route path='/Skills'component={Skills}/>
            </Switch>
            </div>
                </BrowserRouter>
        
    );
}
export default App;

