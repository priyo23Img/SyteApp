import { StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import React, { memo } from 'react'
import Fonts from '../../assets/fonts'
import Colors from '../../assets/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import Entypo from 'react-native-vector-icons/Entypo';


const CommonTextInputs = ({ Headername, setInput, input, placeholderText, Inputname, Inputfieldname, Icon,OnChangeFunction}) => {
  // console.log(placeholderText,Inputname,"place")
  return (
    <View>
      <Text style={styles.TopHeading}>{Headername}</Text>
      <View style={[styles.Inputcontainer, styles.shadowProp]}>
        {Inputfieldname === "PhnNo" || Inputfieldname === "AltPhnNo" || Inputfieldname === "cusNumber"   ?
          <Text style={{ borderRightWidth: 1, paddingRight: 10, borderRightColor: 'rgba(0, 0, 0, 0.25)', color: 'rgba(0, 0, 0, 0.25)' }}>+91</Text>
           :  Inputfieldname === "salary" ? 
           <FontAwesomeIcon name={Icon} /> :
           Inputfieldname === "builduparea" ||   Inputfieldname === "carpetarea" ||  Inputfieldname === "saleablearea"  ? 
           <Text style={{ borderRightWidth: 1, paddingRight: 10, borderRightColor: 'rgba(0, 0, 0, 0.25)', color: 'rgba(0, 0, 0, 0.25)' }}>Sq</Text>
:
          <MaterialCommunityIcons name={Icon} style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
        }

        <TextInput
          placeholder={placeholderText && placeholderText}
          autoCapitalize="characters"
          placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
          value={Inputname}
          maxLength={Inputfieldname ==="PhnNo"  || Inputfieldname ==="cusNumber"? 10 : null}
          keyboardType={ Inputfieldname ==="PhnNo" || Inputfieldname ==="cusNumber" ?'number-pad':null}
          onChangeText={(text) => OnChangeFunction(Inputfieldname, text)}
          style={styles.InputStyle}
        />
      </View>
    </View>
  )
}

export default React.memo(CommonTextInputs)

const styles = StyleSheet.create({
  TopHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 15,
  },
  InputStyle: {
    // marginTop:15,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,
    // elevation:5
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    marginTop: 15,
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Platform.OS === "ios" ? 15 : 5,
    borderRadius: 4,
    elevation: 4,
    shadowColor: 'rgba(0,0,0.25)',
    marginBottom: 10
  },
  shadowProp: {
    shadowColor: 'rgba(0,0,0.25)',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
})