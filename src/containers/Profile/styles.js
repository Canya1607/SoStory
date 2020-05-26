import { StyleSheet } from 'react-native';
import { Height, Width } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Width * 0.07
  },
  contentContainer: { 
    alignItems: 'center',
    paddingTop: Height * 0.02,
    paddingBottom: Height * 0.01
  },
  avatar: {
    width: Height * 0.20,
    height: Height * 0.20,
    borderRadius: Height * 0.1
  },
  usernameContainer: {
    paddingVertical: Height * 0.01
  },
  username: {
    fontSize: 36,
    fontFamily: 'DancingScript-Bold'
  },
  divider: {
    width: Width * 0.72,
    height: 0.5,
    marginBottom: Height * 0.02,
    backgroundColor: '#808080'
  },
  boxesContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Height * 0.02
  },
  box: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Width * 0.275,
    height: Width * 0.275,
    paddingTop: Width * 0.02,
    paddingBottom: Width * 0.01,
    borderRadius: Width * 0.02
  },
  boxIcon: {
    width: Width * 0.175,
    height: Width * 0.175
  },
  boxText: {
    fontSize: 18,
    fontFamily: 'BalooChettan2-Regular'
  },
  lastStoriesText: {
    fontSize: 30,
    fontFamily: 'BalooChettan2-Medium'
  }
});

export default styles;
