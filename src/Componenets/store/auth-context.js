// AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const isLoggedIn = !!token;

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken('');
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
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
