import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {bottomNavParams} from '../../config/router/bottomTab';
import {rootNavParams} from '../../config/router/router';

export type NavToDetail = CompositeNavigationProp<
  BottomTabNavigationProp<bottomNavParams, 'home' | 'search' | 'ticket'>,
  StackNavigationProp<rootNavParams>
>;

export type DetailScreenRouteProp = RouteProp<rootNavParams, 'detail'>;

export type HomeNavProp = BottomTabNavigationProp<bottomNavParams, 'home'>;
