import React, {useState, useEffect, useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// Screens

// Custom Tab View
import CustomTab from './CustomTab';
import Dashboard from '../../screens/Dashboard';
import History from '../../screens/History';
import Prescription from '../../screens/Prescription';
import ShowGraph from '../../screens/ShowGraph';
import LabsNavigation from '../LabsNavigation';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBar={props => {
        const {state} = props;
        // console.log(state.routes)
        if (getRouteName(state.routes[0]) === 'none') {
          return null;
        }
        return <CustomTab {...props} />;
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {display: getRouteName(route)},
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Prescription" component={Prescription} />
      <Tab.Screen name="Graph" component={ShowGraph} />
      <Tab.Screen name="AddLabs" component={LabsNavigation} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const getRouteName = route => {
  // console.log(route)
  const routeName = getFocusedRouteNameFromRoute(route);
  const routes = ['NewsFeed', 'NewsView', 'Story', 'Search'];

  if (routes.includes(routeName)) {
    return 'none';
  } else {
    return 'flex';
  }
};

export default TabNavigator;
