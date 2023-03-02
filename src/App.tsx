import React from 'react';
import { AuthProvider } from 'oidc-react';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './LoggedIn';
//import configData from '../config.json';

/*
const sleep = (time:any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
*/

//let redirectUri = function () {
  const redirectUri = function () {
    return process.env.NODE_ENV === 'development'
      ? 'https://localhost:80'
      : 'https://oktademos1.azurewebsites.net';
    /*
  let env = '';
  if (process.env.NODE_ENV === 'development') 
    env = 'https://localhost:3000/';
  else 
    env = 'https://pingonedemos1.azurewebsites.net';
  return env;
  */
  };

  const oidcConfig = {
    onSignIn: async (user: any) => {
      alert('You just signed in, congratz! Check out the console!');
      console.log(user);
      window.location.hash = '';
    },

    authority:
      'https://twelveb2corg.b2clogin.com/twelveb2corg.onmicrosoft.com/b2c_1_susi_v2',
    clientId: '7b4bff6e-1a62-436b-a271-c1650c4bbf51',
    responseType: 'token_id',
    scope: 'openid',
    redirectUri: redirectUri(),
  };
  // responseType: 'token id_token',
  //scope: 'openid profile',

console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);
console.log(redirectUri());

//sleep(20000);

//console.log('https://localhost/');
//console.log('https://pingonedemos1.azurewebsites.net');

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
    </AuthProvider>
  );
}

export default App;
