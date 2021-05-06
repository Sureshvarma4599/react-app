import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Landing from './components/landingpage'
import User from './components/user'
import Admin from './components/admin'
import Login from './components/login'
import View from './components/mail'
import Send from './components/send'
import List from './components/list'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/">
       <Landing/>
    </Route>
    <Route  path="/user">
       <User/>
    </Route>
    <Route  path="/admin">
       <Admin/>
    </Route>
    <Route  path="/login">
       <Login/>
    </Route>
    <Route  path="/view">
       <View/>
    </Route>
    <Route  path="/list">
       <List/>
    </Route>
    <Route  path="/send">
       <Send/>
    </Route>
     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
