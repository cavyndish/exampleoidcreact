import React from 'react';
import { useAuth } from 'oidc-react';


const LoggedIn = () => {
  const auth = useAuth();
 
  if (auth && auth.userData) {
    return (
      <div>
        <strong>Logged in! 🎉</strong>
           Hello {auth.userData?.profile.name} 
        <button onClick={() => auth.signOut()}>Log out</button>
      </div>
    );
  }

  return <button onClick={() => auth.signIn()}>Log in</button>;
};

export default LoggedIn;
