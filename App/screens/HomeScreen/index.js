import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

export class HomeScreen extends PureComponent {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.green, styles.play]}
          onPress={() => navigate('Tabs')}>
          <Text style={styles.playText}>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.green, styles.play]}
          onPress={() => navigate('SignIn')}>
          <Text style={styles.playText}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.green, styles.play]}
          onPress={() => navigate('SignUp')}>
          <Text style={styles.playText}>SignUp</Text>
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
)(HomeScreen);
