import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoadingScreenStyle';

class ActivityScreen extends React.Component {
  static navigationOptions = {
   tabBarLabel: 'activity',
   tabBarIcon: ({ tintColor }) => <Icon size={20} name={'film'} color={tintColor} />

 }
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

export default ActivityScreen;
