import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import auth from '../Firebase/firebase.init';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //sign in with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const data = {
    user,
    loading,
    createUser,
    signIn,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
