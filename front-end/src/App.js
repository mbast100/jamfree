import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import NewAccount from './components/NewAccount';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/new">
            <NewAccount/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home" >
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
