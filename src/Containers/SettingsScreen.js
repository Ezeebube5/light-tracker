import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
import styles from './Styles/AuthenticatedScreenStyle';
import LoginActions from '../Redux/LoginRedux';
import Icon from 'react-native-vector-icons/FontAwesome';

class SettingsScreen extends React.Component {
  static navigationOptions = {

   tabBarLabel: 'activity',
   tabBarIcon: ({ tintColor }) => <Icon size={30} name={'cog'} color={tintColor} />

 }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You are logged in</Text>

        <RoundedButton text="Logout" onPress={this.props.logout} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(LoginActions.logout()),
});

export default connect(null, mapDispatchToProps)(SettingsScreen);
