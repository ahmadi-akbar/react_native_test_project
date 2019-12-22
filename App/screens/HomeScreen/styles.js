import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(50,70,163)',
    paddingHorizontal: 45,
    paddingVertical: 30,
  },
  green: {
    marginVertical: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(39,148,83)',
    borderRadius: 30,
    height: 55,
    // android
    elevation: 5,
    // ios
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  playText: {
    fontSize: 24,
    color: 'white',
  },
});

export default styles;
