import {createAppContainer} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Screens from './screens';

const TabNav = createBottomTabNavigator(
  {
    BottomTab: Screens.BottomTab,
    Second: Screens.Second,
    Third: Screens.Third,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      activeBackgroundColor: 'red',
      showLabel: false,
      style: {
        paddingHorizontal: 30,
        paddingBottom: 10,
        backgroundColor: 'rgb(50,70,163)',
      },
    },
  },
);

const StackNav = createStackNavigator(
  {
    Home: Screens.Home,
    Tabs: TabNav,
    SignIn: Screens.SignIn,
    SignUp: Screens.SignUp,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(StackNav);
