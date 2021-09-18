import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './components/AppLayout';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <ProtectedRoute exact path="/app" component={AppLayout}/>
      <Route path="*" component={() => "404 page not found"} />
    </Switch>
    </div>
  );
}

export default App;
