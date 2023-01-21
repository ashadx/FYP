import React, {createContext, useEffect, useRef, useState} from 'react';

//Firebase
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});

  const onSignIn = async (email, password, navigation) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(Token => {
        const User = Token.user;

        // Data Get From Database
        firestore()
          .collection('Users') // Table
          .doc(User.uid) // Specific Data ID use this line only if you need specific Id data.
          .get()
          .then(doc => {
            const UserData = doc.data();
            setUser(UserData);
            navigation.navigate('Tabs');
          });
      })
      .catch(error => {
        error.code === 'auth/invalid-email'
          ? alert('This email address is invalid or does not exist!')
          : error.code === 'auth/wrong-password'
          ? alert('Your credentials are invalid!')
          : console.error(error);
      });
  };

  const onSignUp = async (obj, navigation) => {
    const {
      email,
      password,
      username,
      phone,
      gender,
      disease,
      height,
      weight,
      history,
      age,
    } = obj;

    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(Token => {
        const User = Token.user;

        User.updateProfile({
          displayName: username,
        });

        const data = {
          uid: User.uid,
          username: username,
          email: User.email,
          phone: phone,
          disease: disease,
          height: height,
          weight: weight,
          history: history,
          age: age,
          gender: gender,
          password: password,
          template: '',
        };

        // This is how data Add in database
        firestore()
          .collection('Users') // Table Name
          .doc(User.uid) // Any Id else left this section
          .set(data)
          .then(() => {
            alert('Successfully Logged In!');
            setUser(data);
            navigation.navigate('Template');
          });
      })
      .catch(error => {
        error.code === 'auth/email-already-in-use'
          ? alert('That email address is already in use!')
          : error.code === 'auth/invalid-email'
          ? alert('That email address is invalid!')
          : console.error(error);
      });
  };

  const onSetTemplate = (template, navigation) => {
    firestore()
      .collection('Users') // Table Name
      .doc(user.uid)
      .update({
        template: template,
      })
      .then(() => {
        firestore()
          .collection('Users') // Table
          .doc(user.uid) // Specific Data ID use this line only if you need specific Id data.
          .get()
          .then(doc => {
            const UserData = doc.data();
            console.log(UserData);
            setUser(UserData);
            navigation.navigate('Tabs');
          });
      });
  };

  const recoverPass = email => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Password Link send to your Email!');
      });
  };

  const onSignOut = async navigation => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('Auth');
        setUser({});
        alert('Logout');
      });
  };

  return (
    <AuthContext.Provider value={{user}}>
      <AuthAction.Provider
        value={{onSignOut, onSignUp, onSignIn, onSetTemplate}}>
        {children}
      </AuthAction.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// Auth Context
export const AuthContext = createContext();
export const AuthAction = createContext();
