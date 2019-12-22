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
  topTab: {
    position: 'absolute',
    top: 30,
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 3,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    paddingLeft: 5,
  },
  tabImg: {
    height: 30,
    width: 30,
  },
  play: {
    marginTop: 250,
  },
  playText: {
    fontSize: 24,
    color: 'white',
  },
});

export default styles;
