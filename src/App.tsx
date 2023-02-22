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
      ? 'https://localhost:3000/'
      : 'https://pingonedemos2.azurewebsites.net';
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
      'https://auth.pingone.com/f5561d77-6f62-4dd3-b7d9-581d9aa5ffaa/as/authorize',
    clientId: 'c7f3fc1f-8741-4151-bbb6-8b2059c4fff1',
    responseType: 'token id_token',
    scope: 'openid profile',
    redirectUri: redirectUri(),
  };

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
