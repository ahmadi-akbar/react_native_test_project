import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import styles from './styles';

export default class CustomButton extends PureComponent {
  render() {
    const {icon, style} = this.props;
    return (
      <Image source={icon} style={[styles.img, style]} resizeMode="contain" />
    );
  }
}
