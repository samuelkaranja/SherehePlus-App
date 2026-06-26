import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Ticket, User, LucideIcon } from 'lucide-react-native';
import { Colors } from '../constants/theme';
import { AppTabParamList } from './types';
import HomeScreen from '../screens/Home/HomeScreen';
import ExploreScreen from '../screens/Explore/ExploreScreen';
import TicketsScreen from '../screens/Tickets/TicketsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator<AppTabParamList>();

type TabConfig = {
  name: keyof AppTabParamList;
  component: React.ComponentType<any>;
  Icon: LucideIcon;
};

const TAB_CONFIG: TabConfig[] = [
  { name: 'Home', component: HomeScreen, Icon: Home },
  { name: 'Explore', component: ExploreScreen, Icon: Search },
  { name: 'Tickets', component: TicketsScreen, Icon: Ticket },
  { name: 'Profile', component: ProfileScreen, Icon: User },
];

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#AAAAAA',
        tabBarLabelStyle: styles.label,
        tabBarIcon: ({ focused, color }) => {
          const tab = TAB_CONFIG.find(t => t.name === route.name);
          if (!tab) return null;
          const { Icon } = tab;
          return (
            <View style={styles.iconWrap}>
              <Icon size={22} color={color} strokeWidth={focused ? 2.5 : 1.8} />
              {focused && <View style={styles.activeDot} />}
            </View>
          );
        },
      })}
    >
      {TAB_CONFIG.map(({ name, component }) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 64,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingBottom: 8,
    paddingTop: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
  },
});
