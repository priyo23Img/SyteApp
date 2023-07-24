import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import Icon from 'react-native-vector-icons/Ionicons';

const CommonHeards = ({
  title = 'Syte',
  lasticonname = '',
  coustomstyle = '',
  titlestyle = '',
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={[styles.HeaderContainer, coustomstyle]}>
        {title === 'Syte' ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu-outline" size={35} color="#1F1F1F" />
          </TouchableOpacity>
        ) : title !== 'Sale' ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.Icons}>
            <Icons name="chevron-left" style={styles.IconsConatainer} />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        <Text style={[styles.titlestyle, titlestyle]}>{title}</Text>
        {lasticonname ? (
          <TouchableOpacity
          onPress={()=>navigation.navigate("Projectpage")}
          >
            <Icon name={lasticonname} size={25} color="#1F1F1F" />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default CommonHeards;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  HeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: Colors.MainColor,
    paddingVertical: 20,
    justifyContent: 'space-between',
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlestyle: {
    color: Colors.CommonColor,
    fontSize: 20,
    fontFamily: Fonts.Montserrat700,
    textAlign: 'center',
  },
});
