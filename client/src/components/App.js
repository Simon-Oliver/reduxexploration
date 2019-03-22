import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import VideoCreate from './video/VideoCreate';
import VideoList from './video/VideoList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={VideoList} />
        <Route path="/pagetwo" component={VideoCreate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
