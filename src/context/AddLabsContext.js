import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

//Firebase
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from './AuthContext';

const AddLabsContextProvider = ({children}) => {
  const {user} = useContext(AuthContext);
  const [prescriptions, setPrescriptions] = useState([]);
  const [custom, setCustom] = useState([]);
  const [report, setReport] = useState([]);

  // const addCustomLabs = data => {
  //   firestore()
  //     .collection('Custom') // Table Name
  //     .doc(user.uid) // Any Id else left this section
  //     .set(data)
  //     .then(() => {
  //       alert('Custom Lab Created!');
  //     });
  // };

  const addPrescriptions = data => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('Prescriptions')
      .add(data)
      .then(() => {
        alert('New Prescription Added');
      });
  };

  const deletePrescriptions = id => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('Prescriptions')
      .doc(id)
      .delete()
      .then(() => {
        alert('Prescription Deleted!');
      });
  };

  const getPrescriptions = () => {
    firestore()
      .collection('Labs') // Table Name
      .doc(user.uid)
      .collection('Prescriptions')
      .onSnapshot(snaps => {
        if (!snaps.empty) {
          const data = snaps.docs.map(data => ({...data.data(), id: data.id}));
          setPrescriptions(data);
        }
      });
  };

  const addCustomWidget = data => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('CustomWidget')
      .add(data)
      .then(() => {
        alert('Custom Widget Added!');
      });
  };

  const getCustomWidget = data => {
    firestore()
      .collection('Labs') // Table Name
      .doc(user.uid)
      .collection('CustomWidget')
      .onSnapshot(snaps => {
        if (!snaps.empty) {
          const data = snaps.docs.map(data => ({...data.data(), id: data.id}));
          setCustom(data);
        }
      });
  };

  const addCustomLab = data => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('Custom')
      .add({...data, createdAt: firestore.FieldValue.serverTimestamp()})
      .then(() => {
        alert('Custom Lab Added!');
      });
  };

  const addDiabetesLab = data => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('Diabetes')
      .add({...data, createdAt: firestore.FieldValue.serverTimestamp()})
      .then(() => {
        alert('Diabetes Lab Added!');
      });
  };

  const addHeartLab = data => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('Heart')
      .add({...data, createdAt: firestore.FieldValue.serverTimestamp()})
      .then(() => {
        alert('Heart Lab Added!');
      });
  };

  const addKidneyLab = data => {
    firestore()
      .collection('Labs')
      .doc(user.uid)
      .collection('Kidney')
      .add({...data, createdAt: firestore.FieldValue.serverTimestamp()})
      .then(() => {
        alert('Kidney Lab Added!');
      });
  };

  const getReports = template => {
    if (template !== '') {
      firestore()
        .collection('Labs') // Table Name
        .doc(user.uid)
        .collection(template || 'Custom')
        .orderBy('createdAt', 'asc')
        .onSnapshot(snaps => {
          if (!snaps.empty) {
            const data = snaps.docs.map(data => ({
              ...data.data(),
              id: data.id,
            }));
            setReport(data);
          }
        });
    }
  };
  useEffect(() => {
    if (user.uid !== '') {
      const template = user.template || 'Custom';
      getPrescriptions();
      getCustomWidget();
      getReports(template);
    }
  }, [user]);

  return (
    <AddLabsContext.Provider value={{prescriptions, custom, report}}>
      <AddLabsAction.Provider
        value={{
          addPrescriptions,
          deletePrescriptions,
          addCustomWidget,
          addCustomLab,
          addDiabetesLab,
          addHeartLab,
          addKidneyLab,
        }}>
        {children}
      </AddLabsAction.Provider>
    </AddLabsContext.Provider>
  );
};

export default AddLabsContextProvider;

// AddLabs Context
export const AddLabsContext = createContext();
export const AddLabsAction = createContext();
