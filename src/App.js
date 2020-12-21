import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/board" component={MainContainer} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
  
    </div>
  );
}

export default App;
