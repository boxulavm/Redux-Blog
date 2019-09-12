import React, { useEffect } from 'react';

import Navbar from './components/layout/Navbar'
import Search from './components/layout/Search'
import Posts from './components/posts/Posts'
import AddBtn from './components/layout/AddBtn'
import AddPostModal from './components/posts/AddPostModal'
import EditPostModal from './components/posts/EditPostModal'

import { Provider } from 'react-redux'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

const App = () => {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })

  return (
  <Provider store={store} >
  <Navbar />
  <div className="container">
    <Search />
    <Posts />
    <AddBtn />
    <AddPostModal />
    <EditPostModal />
  </div>
  </Provider>
  );
}

export default App;
