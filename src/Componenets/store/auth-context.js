import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const preprocessEmail = (email) => {
    if (email) {
      return email.replace(/[@.]/g, '');
    }
    return '';
  };
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [email, setEmail] = useState(preprocessEmail(localStorage.getItem('email')) || '');

  const isLoggedIn = !!token;

  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', preprocessEmail(email)); 
  }, [token, email]);

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
  };

  const logoutHandler = () => {
    setToken('');
    setEmail('');
  };
  

  return (
    <AuthContext.Provider
      value={{
        token: token,
        email: email,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
