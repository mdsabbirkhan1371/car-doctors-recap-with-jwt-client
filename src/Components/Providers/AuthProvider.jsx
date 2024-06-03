import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import axios from 'axios';
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
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout methode

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user exist or not check

  useEffect(() => {
    const unsubsCribe = () =>
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
        console.log('On Auth State new user', currentUser);

        // for jwt implement from here
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };

        if (currentUser) {
          axios
            .post('http://localhost:5000/jwt', loggedUser, {
              withCredentials: true,
            })
            .then(res => {
              console.log(res.data);
            });
        } else {
          axios
            .post('http://localhost:5000/logout', loggedUser, {
              withCredentials: true,
            })
            .then(res => {
              console.log(res.data);
            });
        }
      });
    return () => {
      return unsubsCribe();
    };
  }, []);

  const data = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
