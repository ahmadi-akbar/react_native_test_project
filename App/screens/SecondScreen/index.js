import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import TabIcon from '../../components/TabIcon';
import {BottomTabIcons} from '../../components/constants';
import styles from './styles';

export class SecondScreen extends PureComponent {
  static navigationOptions = {
    tabBarIcon: <TabIcon icon={BottomTabIcons.shop} />,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.playText}>SecondScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecondScreen);
