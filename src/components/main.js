import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './homepage';
import About from './aboutme';
import Contact from './contact';
import  Cv from './cv';
import Projects from './projects';

 const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/aboutme" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/cv" component={Cv}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
 );

export default Main;