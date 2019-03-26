import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import VideoCreate from './video/VideoCreate';
import VideoList from './video/VideoList';
import VideoEdit from './video/VideoEdit';
import VideoDelete from './video/VideoDelete';
import VideoShow from './video/VideoShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={VideoList} />
          <Route path="/videos/new" component={VideoCreate} />
          <Route path="/videos/edit/:id" component={VideoEdit} />
          <Route path="/videos/delete/:id" component={VideoDelete} />
          <Route path="/videos/show/:id" component={VideoShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
