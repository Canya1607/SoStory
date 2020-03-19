import {StyleSheet} from 'react-native';
import { Height, Width } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  textLogo: {
    fontSize: 40,
    fontFamily: 'DancingScript-Bold'
  },
  dotsLoaderContainer: {
    paddingVertical: Height * 0.02
  },
  inputContainer: {
    flexDirection: 'row',
    width: Width * 0.86,
    alignItems: 'center',
    marginTop: Height * 0.01,
    marginBottom: Height * 0.02
  },
  textInput: {
    flex: 1,
    paddingHorizontal: Width * 0.025,
    marginRight: 16,
    borderRadius: Height * 0.005,
    fontFamily: 'BalooChettan2-Regular',
    fontSize: 20,
    backgroundColor: '#13333740'
  },
  sendIcon: {
    width: Height * 0.07,
    height: '100%'
  }
});

export default styles;
