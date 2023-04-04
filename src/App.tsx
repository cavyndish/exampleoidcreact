import React from 'react';
import { AuthProvider, useAuth } from 'oidc-react';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './LoggedIn';
import { sign } from 'crypto';

//import configData from '../config.json';

const redirectUri = function () {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://pingonedemos2.azurewebsites.net';
};

const oidcConfig = {
  onSignIn: async (user: any) => {
    console.log('You just signed in, congratz!');
    // alert('You just signed in, congratz! Check out the console!');
    window.location.hash = '';
  },
  autoSignIn: false,
  authority:
    'https://auth.pingone.com/f5561d77-6f62-4dd3-b7d9-581d9aa5ffaa/as/',
  clientId: 'c7f3fc1f-8741-4151-bbb6-8b2059c4fff1',
  responseType: 'token id_token',
  scope: 'openid profile',
  redirectUri: redirectUri(),
};

//console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);
//console.log(redirectUri());

function App() {
  
  // Function to clear complete cache data
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    console.log('cache has been cleared');
  };

  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <LoggedIn />
      </div>
    </AuthProvider>
  );
}

export default App;
