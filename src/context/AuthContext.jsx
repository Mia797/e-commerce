import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (userData) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${userData.id}`);
      const fullData = await res.json();
      const completeUser = { ...userData, ...fullData };

      setUser(completeUser);
      localStorage.setItem('user', JSON.stringify(completeUser));
      return completeUser;
    } catch (error) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
