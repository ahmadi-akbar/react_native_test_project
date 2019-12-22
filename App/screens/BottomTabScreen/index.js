import React, {PureComponent} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import TabIcon from '../../components/TabIcon';
import {BottomTabIcons, TopTabIcons} from '../../components/constants';
import styles from './styles';

export class BottomTabScreen extends PureComponent {
  static navigationOptions = {
    tabBarIcon: <TabIcon icon={BottomTabIcons.home} />,
  };
  state = {
    counter1: 1,
    counter2: 2,
  };
  render() {
    const {navigate} = this.props.navigation;
    const {counter1, counter2} = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.green, styles.topTab]}>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => this.setState({counter1: counter1 + 1})}>
            <Image
              source={TopTabIcons.pro}
              style={{height: 50, width: 50, borderRadius: 25}}
              resizeMode="cover"
            />
            <Text style={styles.tabText}>Farid</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => this.setState({counter1: counter1 + 1})}>
            <Image source={TopTabIcons.gold} style={styles.tabImg} />
            <Text style={styles.tabText}>{counter1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => this.setState({counter2: counter2 + 1})}>
            <Image source={TopTabIcons.question} style={styles.tabImg} />
            <Text style={styles.tabText}>{counter2}</Text>
          </TouchableOpacity>
          <Image source={TopTabIcons.icon} style={{height: 35, width: 35}} />
        </View>

        <TouchableOpacity
          style={[styles.green, styles.play]}
          onPress={() => {
            this.setState({counter1: 11});
            navigate('Home');
          }}>
          <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BottomTabScreen);
