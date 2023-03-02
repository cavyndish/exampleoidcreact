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

const redirectUri = function () {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://localhost:3000';
};

  const oidcConfig = {
    onSignIn: async (user: any) => {
      alert('You just signed in, congratz! Check out the console!');
      console.log(user);
      window.location.hash = '';
    },

    authority: 'https://umg-poc.us.auth0.com/.well-known/openid-configuration',
    clientId: 'lE06KTKk7VQAvGfg4UbGdL01AEODubMU',
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
