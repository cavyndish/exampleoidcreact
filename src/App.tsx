import React from 'react';
import { AuthProvider } from 'oidc-react';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './LoggedIn';

const oidcConfig = {
  onSignIn: async (user: any) => {
    alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    window.location.hash = '';
  },
  authority:
    'https://twelveb2corg.b2clogin.com/twelveb2corg.onmicrosoft.com/b2c_1_susi_v2',
  clientId: '516246c7-af35-43bb-bf6b-cb40c333d3f9',
  responseType: 'id_token',
  redirectUri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://basicreactoidcex1.azurewebsites.net/',
};

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
