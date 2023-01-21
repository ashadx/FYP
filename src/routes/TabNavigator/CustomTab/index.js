import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTab = ({state, descriptors, navigation}) => {
  const route = state?.routes[state.index]?.state;
  const routeName = route?.routes[route?.index].name;
  const routes = ['NewsFeed', 'NewsView', 'Story', 'Search'];

  const insets = useSafeAreaInsets();

  return (
    // <SafeAreaView edges={['right', 'bottom', 'left']}>
    <View
      style={[
        routes.includes(routeName)
          ? {display: 'none'}
          : // !routes.includes(routeName) && {},
            {
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              borderTopWidth: 0.5,
              backgroundColor: '#0F8F9F',
              paddingBottom: insets.bottom,
            },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let iconName;
        label === 'Dashboard' &&
          (iconName = isFocused ? 'home' : 'home-outline');
        label === 'History' && (iconName = isFocused ? 'history' : 'history');
        label === 'Prescription' &&
          (iconName = isFocused ? 'plus' : 'plus-outline');
        label === 'Graph' && (iconName = isFocused ? 'graph' : 'graph-outline');
        label === 'AddLabs' &&
          (iconName = isFocused ? 'flask' : 'flask-outline');
        label === 'Profile' &&
          (iconName = isFocused ? 'account' : 'account-outline');

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <Icon
            key={index}
            name={iconName}
            color="#fff"
            size={35}
            onPress={onPress}
            style={{margin: 15}}
          />
        );
      })}
    </View>
    // </SafeAreaView>
  );
};

export default CustomTab;
