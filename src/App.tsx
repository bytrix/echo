import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import User from './pages/User';
import Waterfall from './pages/Waterfall';
import PostView from './pages/Post/PostView';
import ExploreView from './pages/Explore/ExplorerView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/p">
            <PostView />
          </Route>
          <Route path="/explore">
            <ExploreView />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Waterfall />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
