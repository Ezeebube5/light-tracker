import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoadingScreenStyle';

class HomeScreen extends React.Component {
  static navigationOptions = {
   tabBarLabel: 'home',
   tabBarIcon: ({ tintColor }) => <Icon size={20} name={'home'} color={tintColor} />
 }
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

export default HomeScreen;
