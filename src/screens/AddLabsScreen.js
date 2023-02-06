import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Diabetes from './Diabetes';
import Kidney from './Kidney';
import Custom from './Custom';
import Template from './Template';
import Heart from './Heart';
import {AuthContext} from '../context/AuthContext';

const AddLabsScreen = () => {
  const {user} = useContext(AuthContext);
  const [templatetype, setTemplateType] = useState(user?.template || '');

  console.log('user => ', user);
  useEffect(() => {
    console.log('user => ', user);
    setTemplateType(user?.template);
  }, [user]);

  return templatetype === 'Diabetes' ? (
    <Diabetes />
  ) : templatetype === 'Kidney' ? (
    <Kidney />
  ) : templatetype === 'Heart' ? (
    <Heart />
  ) : templatetype === 'Custom' ? (
    <Kidney />
  ) : (
    // <Custom />
    <Template />
  );
};

export default AddLabsScreen;
