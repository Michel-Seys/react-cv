import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Knowledges" component={Knowledges}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route path="/Portfolio" component={Portfolio}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
