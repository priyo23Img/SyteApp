import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../assets/colors'
import Fonts from '../../../../assets/fonts'
import { Dropdown } from 'react-native-element-dropdown';
import DropDown from '../../../Components/DropDown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const AddNewMaterial = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{}}>
      <View style={styles.TopHeader}>

        <Text style={{ fontSize: 17, fontFamily: Fonts.Poppins600, color: Colors.CommonColor }}>Add New Material</Text>
      </View>
      <View style={styles.TopSubheader}>
        <Text style={styles.Title}>Material</Text>
        <Text style={styles.Title}>Quantity</Text>
        <Text style={styles.Title}>Unit</Text>

      </View>
      <View style={styles.ContentBox}>

        <TextInput style={[styles.InputStyle]} />
        <TextInput style={[styles.InputStyle]} />
        <View style={{width:80,   borderRadius:5    }}>
          <DropDown setState={setValue} state={value} data={data} />
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.buttonText}>Save Material</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddNewMaterial
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  TopHeader: {
    width: width,
    height: "15%",
    backgroundColor: Colors.MainColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TopSubheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  Title: {
    fontFamily: Fonts.Poppins500,
    color: Colors.CommonColor,
    fontSize: 15
  },
  ContentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#fff',
    // elevation: 3,
    marginTop: 20,
    // marginBottom: 20,
    // paddingBottom: 20,
    paddingHorizontal: 15
  },
  InputStyle: {
    width: '25%',
    marginRight:10,
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: '#F7F8F9',
    borderColor: Colors.MainColor,
    borderWidth: 1,
    elevation: 2,
    height:40,
    borderRadius:5

  },
  buttonText: {
    fontFamily: Fonts.Inter600,
    color: Colors.CommonColor,
    fontSize: 17,
  },
  nextButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MainColor,
    borderRadius: 5,
    elevation: 5,
    width: '50%',
    alignSelf: 'center',
    marginTop: 10,
    // marginBottom: 20,
    // zIndex:-1,
    // position:"absolute",
    // bottom:10
  },
  ContentButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    flex: 1,
    elevation: 5,
    paddingVertical: 20,
    // lineHeight:30,
    width: '30%',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15
  },
  ContentTitle: {
    fontFamily: Fonts.Lato400,
    color: Colors.CommonColor,
    fontSize: 12
  },
 
  icon: {
    marginRight: 5,
  },


})