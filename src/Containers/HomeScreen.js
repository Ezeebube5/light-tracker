import React from 'react';
import { View } from 'react-native';
import { Button, Card, CardItem, Fab, Text, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoadingScreenStyle';

class HomeScreen extends React.Component {
 //  constructor() {
 //   this.state = {
 //     active: 'true'
 //   };
 // }
  static navigationOptions = {
   tabBarLabel: 'home',
   tabBarIcon: ({ tintColor }) => <Icon size={30} name={'home'} color={tintColor} />
 }

  render() {
    return (
      <View style={{flex: 1}}>
        <Card>
          <CardItem header>
            <Text>Personal Health</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text> Weight </Text>
              <Text> BMI </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header>
            <Text> Fitness Statistics</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text> Daily Steps </Text>
              <Text> Distance Travelled </Text>
              <Text> Calorieis Burnt </Text>
              <Text> Badge </Text>

            </Body>
          </CardItem>
        </Card>

        <Fab
//          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#424242' }}
          position="bottomRight"
    //      onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="user" />
        </Fab>
      </View>
    );
  }
}

export default HomeScreen;
