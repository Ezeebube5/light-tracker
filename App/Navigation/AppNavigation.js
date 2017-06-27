import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import LoadingScreen from '../Containers/LoadingScreen';
import TabBarNavigation from './TabBarNavigation';
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
export const PrimaryNav = StackNavigator({
  LoadingScreen: { screen: LoadingScreen },
  LoggedInStack: { screen: TabBarNavigation },
  NotLoggedInStack: { screen: NotLoggedInStackNavigator },
}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

const Navigation = ({ dispatch, navigation }) => (
  <PrimaryNav
    navigation={addNavigationHelpers({ dispatch, state: navigation })}
  />
  );

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  //  navigationState: state.tabBar,
  };
}

// export default PrimaryNav
export default connect(mapStateToProps)(Navigation);
