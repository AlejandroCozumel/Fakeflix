import React from 'react';
import { render } from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { firebase } from './lib/firebase.info';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);