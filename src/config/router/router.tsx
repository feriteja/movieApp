import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import BottomTab, {bottomNavParams} from './bottomTab';
import {Detail} from '../../screens';
import {item} from '../../constant/type/normalType';

type RootScreenNavProp = NavigatorScreenParams<bottomNavParams>;

export type rootNavParams = {
  home: RootScreenNavProp;
  detail: {item: item};
};

const RootStack = createStackNavigator<rootNavParams>();

const router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="home" component={BottomTab} />
        <RootStack.Screen name="detail" component={Detail} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default router;
