import React from 'react';
import {Home, Ticket, Search, Profile} from '../../screens';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type bottomNavParams = {
  home: undefined;
  search: undefined;
  ticket: undefined;
  profile: undefined;
};

const BottomTab = createBottomTabNavigator<bottomNavParams>();

const bottomTab = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#ffffff22',

        tabStyle: {elevation: 0},
        style: {borderTopWidth: 0, backgroundColor: '#191A25'},
        showLabel: false,
      }}>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFeather name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFeather name="search" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ticket"
        component={Ticket}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconMCI name="ticket-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFeather name="user" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default bottomTab;
