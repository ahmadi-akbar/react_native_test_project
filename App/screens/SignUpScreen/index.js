import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

export class SignInScreen extends PureComponent {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
        <ImageBackground
          style={styles.container}
          resizeMode="cover"
          source={require('../../assets/img/back.jpg')}>
          <View style={styles.content}>
            <TextInput
              style={[styles.text, styles.textInput]}
              placeholder="نام کاربری"
              keyboardType="numbers-and-punctuation"
            />
            <TextInput
              style={[styles.text, styles.textInput]}
              placeholder="ایمیل"
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.text, styles.textInput]}
              secureTextEntry={true}
              placeholder="رمز عبور"
            />
            <TextInput
              style={[styles.text, styles.textInput]}
              secureTextEntry={true}
              placeholder="تکرار رمز عبور"
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, styles.bigText]}>ثبت نام</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <View style={[styles.text, styles.signIn]}>
              <Text style={styles.text}>already have acount? </Text>
              <TouchableOpacity onPress={() => navigate('SignIn')}>
                <Text style={styles.signInText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);
