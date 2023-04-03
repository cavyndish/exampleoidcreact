import React from 'react';
import { AuthProvider } from 'oidc-react';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './LoggedIn';
//import configData from '../config.json';

const redirectUri = function () {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://pingonedemos1.azurewebsites.net';
};

const oidcConfig = {
  onSignIn: async (user: any) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.hash = '';
  },

  authority:
    'https://auth.pingone.com/f5561d77-6f62-4dd3-b7d9-581d9aa5ffaa/as/',
  clientId: '03781782-2c30-4e75-b72e-9afb59c17d4d',
  responseType: 'token id_token',
  scope: 'openid profile',
  redirectUri: redirectUri(),
};

//console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);
//console.log(redirectUri());

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>OIDC React</p>
          <LoggedIn />
        </header>
      </div>
      <div></div>
    </AuthProvider>
  );
}

export default App;
