import React from 'react';
import { useAuth } from 'oidc-react';


const LoggedIn = () => {
  const auth = useAuth();
 
  if (auth && auth.userData) {
    return (
      <div>
        <strong>Logged in! 🎉</strong>
        <br />
        Hello {auth.userData?.profile.name}{' '}
        <br />
        <button onClick={() => auth.signOut()}>Log out!</button>
      </div>
    );
  }

  return <button onClick={() => auth.signIn()}>Log in</button>;
};

export default LoggedIn;
//<button onClick={auth.signinRedirect}>Log in</button>;