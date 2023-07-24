import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import Fonts from '../../assets/fonts';
import Colors from '../../assets/colors';

export default function CustomButton({
  txt = '',
  customViewStyle = {},
  btntxtColor = 'black',
  handleClick = null,
  disable = false,
}) {
  return (
    <TouchableOpacity
      disabled={disable}
      style={[Styles.appButtonContainer, customViewStyle]}
      onPress={handleClick}>
      <Text style={[Styles.appButtonText, {color: btntxtColor}]}>{txt}</Text>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  product: {
    borderWidth: 1,
    borderColor: '#9e9e9e',
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    borderRadius: 3,
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: 69,
    height: 89,
  },
  textContainer: {
    flexsDirection: 'column',
    justifyContent: 'space-evenly',
  },
  bold: {
    fontWeight: '800',
  },
  appButtonContainer: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 5,
    elevation: 5,
  },
  appButtonText: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    alignSelf: 'center',
  },
});
