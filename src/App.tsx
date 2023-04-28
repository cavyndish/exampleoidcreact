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
    : 'https://azureb2cs3demo.azurewebsites.net/';
};

const oidcConfig = {
  onSignIn: async (user: any) => {
    console.log('You just signed in, congratz!');
    // alert('You just signed in, congratz! Check out the console!');
    window.location.hash = '';
  },
  autoSignIn: false,
  authority:
    'https://twelveb2corg.b2clogin.com/twelveb2corg.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN_S3_EXAMPLE',
  clientId: 'cab54079-6749-4ca0-b508-24f6eec1aa27',
  responseType: 'id_token',
  scope: 'openid',
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
