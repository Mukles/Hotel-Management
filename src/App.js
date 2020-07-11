import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Rooms from './Components/Rooms';
import SingleRoom from './Components/SingleRoom';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/room/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
