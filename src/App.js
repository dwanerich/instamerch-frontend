import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/board" component={MainContainer} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
  
    </div>
  );
}

export default App;
