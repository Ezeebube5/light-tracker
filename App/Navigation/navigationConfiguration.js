import { TabNavigator } from 'react-navigation';
import { Colors } from '../Themes';
// Tab-Navigators
import HomeScreen from '../Containers/HomeScreen';
import NotificationScreen from '../Containers/NotificationScreen';
import ActivityScreen from '../Containers/ActivityScreen';
import SettingsScreen from '../Containers/SettingsScreen';


const routeConfiguration = {
  TabOneNavigation: { screen: HomeScreen },
  TabTwoNavigation: { screen: NotificationScreen },
  TabThreeNavigation: { screen: ActivityScreen },
  TabFourNavigation: { screen: SettingsScreen },

};

const tabBarConfiguration = {
  // ...other configs

  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,


  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'black',
    inactiveTintColor: 'white',
// background color is for the tab component
    activeBackgroundColor: 'white',
    inactiveBackgroundColor: 'white',
    indicatorStyle: {
      backgroundColor: Colors.move,
    },
    style: {
      backgroundColor: Colors.move },
    showIcon: true,
    showLabel: false,
  },

};
export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);
