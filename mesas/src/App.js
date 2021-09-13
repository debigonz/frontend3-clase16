
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Perritos from './pages/Perritos';
import Gatitos from './pages/Gatitos';
import "./styles.css";

const Nav = () => {
 return (
  <ul>
      <li>
        <Link to="/">
          <span aria-label="emoji-rock" role="img">
            🏠🏠
          </span>
          Home
          <span aria-label="emoji-rock" role="img">
            🏠🏠
          </span>
        </Link>
      </li>
      <li>
        <Link to="/Perritos">
          <span aria-label="emoji-rock" role="img">
            🐶
          </span>
          GuauGuau
          <span aria-label="emoji-rock" role="img">
            🐶
          </span>
        </Link>
      </li>
      <li>
        <Link to="/Gatitos">
          <span aria-label="emoji-rock" role="img">
          🐱
          </span>
          Miaumiau
          <span aria-label="emoji-rock" role="img">
          🐱
          </span>
        </Link>
      </li>
    </ul>
 );
}

   

export default class App extends Component {
  render (){
    return (
      <Router>
        <Nav />
        <div>
          <h1> <span role="img">✨✨</span>
          Tenemos
          <span role="img">✨✨</span>
          </h1>
        </div>
         <Switch>
           <Route exact path="/Perritos" component={() => <Perritos /> }/>
           <Route exact path="/Gatitos" component={() => <Gatitos /> }/>
         </Switch>
      </Router>
    )
  }
  
  
}


