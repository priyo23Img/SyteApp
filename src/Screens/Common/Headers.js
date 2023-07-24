import {StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';

const Headers = ({title}) => {
  const navigation= useNavigation()
  return (
    <View>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icons name="arrow-back-ios" style={styles.IconsConatainer} />
        </TouchableOpacity>
        <Text style={styles.TextContainer}>{title}</Text>
      </View>
    </View>
  );
};

export default Headers;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  HeaderContainer: {
    width: width,
    alignItems: 'center',
    flexDirection:'row',
    paddingHorizontal:20,
    paddingTop:30,
    backgroundColor:Colors.SplashBack

  },
  IconsConatainer: {
    color: 'black',
    fontSize: 25,
  },
  TextContainer:{
    color:'#fff',
    fontSize:15,
    fontFamily:Fonts.Montserrat700,
    marginLeft:10,
    marginTop:5,


  }
});
