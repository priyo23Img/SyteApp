import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CommonHeards from '../../../Common/CommonHeards'
import Colors from '../../../../../assets/colors'
import Fonts from '../../../../../assets/fonts'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Checkicon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const DetailsPayment = () => {
  const navigation = useNavigation()
  const [ischoose, setChoose] = useState("Carpet Area")


  const handleSelect = (option) => {
    setChoose(option)
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <CommonHeards title={"Detailed Payment"} />
      <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1 }}>

        <Text style={styles.TotalAmt}>Total Amount :  ₹XXXXXXXX</Text>
      </View>
      <View style={styles.Topheader}>
        <Text style={styles.Title}>select</Text>
        <Text style={[styles.Title,{marginLeft:-20}]}>Heads</Text>
        <Text style={[styles.Title,{marginLeft:-20}]}>Sqr Mtr</Text>
        <Text style={styles.Title}>Rate</Text>
        <Text style={styles.Title}>Amount</Text>
      </View>
      <ScrollView>

        <View style={styles.ContentBox}>
          <TouchableOpacity

            onPress={() => setChoose("Carpet Area")}
          >
            <View style={[styles.Optionbox, ischoose === "Carpet Area" ? { backgroundColor: Colors.AvailableFlat } : null]}>
              <Checkicon name='check' style={{ color: '#fff', fontSize: 20 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Carpet Area</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            {/* <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View> */}

          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View>

          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View>

          </View>

        </View>


        <View style={styles.ContentBox}>
          <TouchableOpacity
            onPress={() => setChoose("Built-up Area")}
          >
              <View style={[styles.Optionbox, ischoose === "Built-up Area"  ? { backgroundColor: Colors.AvailableFlat } : null]}>
              <Checkicon name='check' style={{ color: '#fff', fontSize: 20 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Built-up Area </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            {/* <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View> */}

          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View>

          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View>

          </View>
        </View>

        <View style={[styles.ContentBox,{marginBottom:10}]}>
          <TouchableOpacity 
            onPress={() => setChoose("Saleable Area")}
          >
              <View style={[styles.Optionbox, ischoose === "Saleable Area"  ? { backgroundColor: Colors.AvailableFlat } : null]}>
              <Checkicon name='check' style={{ color: '#fff', fontSize: 20 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Saleable Area</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            {/* <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View> */}

          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View>

          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.InputStyle} />
            <View><Text style={{ color: Colors.CommonColor, fontWeight: 500 }}>₹</Text></View>

          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.Button}
        onPress={() =>
          navigation.navigate('Detailspayment2')}
      >
        <Text style={styles.ButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailsPayment
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 14 : height >= 800 ? 12 : 10;

const styles = StyleSheet.create({
  Topheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomColor: '#000',
    borderBottomWidth: .5,
    marginBottom: 10,
    backgroundColor:Colors.MainColor,borderTopColor:'#000',borderTopWidth:.5
  },
  Title: {
    fontFamily: Fonts.Poppins500,
    color: Colors.CommonColor,
    fontSize: fontSize
  },
  TotalAmt: {
    color: Colors.AvailableFlat,
    fontFamily: Fonts.OpenSans600,
    fontSize: fontSize,
    marginVertical: 15,
    marginHorizontal: 15
  },
  ContentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  InputStyle:{
    width: '80%',
    paddingHorizontal: 5
  },

  ContentTitle: {
    fontFamily: Fonts.Lato400,
    color: Colors.CommonColor,
    fontSize: 12,
  },
  ContentBack: {
    backgroundColor: Colors.MainColor,
    borderRadius:6,
    // paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 5,
    paddingVertical: 10,
    width: '20%',
    // borderRadius: 5,
  },
  ContentButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    flex: 1,
    elevation: 5,
    paddingVertical: 10,
    width: '30%',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10, marginHorizontal: 15
  },
  OptionWrap: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 15
  },
  Optionbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.CommonColor,

  },
  TopHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 15
  },
  OptionChoose: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: '#D6D6D6',
    borderWidth: 1
  },
  OptionChooseSelect: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: '#D6D6D6',
    backgroundColor: Colors.AvailableFlat,
    borderWidth: 1
  },
  Button: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 35,
    borderRadius: 5,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20
  },
  ButtonText: {
    color: Colors.CommonColor,
    fontSize: 15,
    fontFamily: Fonts.Poppins600
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    width: '20%',
    height: 40,
    borderWidth:1,
    borderColor:Colors.MainColor,
    backgroundColor:'rgba(247, 248, 249, 1)',
    borderRadius:6
  }


})