import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Post from './pages/Post';
import Waterfall from './pages/Waterfall';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/p">
            <Post />
          </Route>
          <Route path='/'>
            <Waterfall />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
