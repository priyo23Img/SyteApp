import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';

const SalesHeader = () => {
  const navigation = useNavigation();
  const [bar, setBar] = useState(false);
  return (
    <View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.TextContainer}>Syte</Text>
        <TouchableOpacity style={styles.Icons}>
          <Icons name="settings" style={styles.IconsConatainer} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SalesHeader;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  HeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: Colors.MainColor,
    paddingVertical: 20,
    // justifyContent:'space-evenly'
  },
  IconsConatainer: {
    color: Colors.CommonColor,
    // backgroundColor:'#000',
    fontSize: 25,
  },
  TextContainer: {
    color: Colors.CommonColor,
    fontSize: 20,
    fontFamily: Fonts.Montserrat700,
    flex: 1,
    textAlign: 'center',
  },
  Icons: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
