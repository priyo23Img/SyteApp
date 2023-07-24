import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, Platform, PanResponder } from 'react-native'
import React, { useState } from 'react'

import Rupee from 'react-native-vector-icons/FontAwesome'
import Password from 'react-native-vector-icons/FontAwesome5'

import UserIcon from 'react-native-vector-icons/Entypo'
import Idcardicon from 'react-native-vector-icons/AntDesign'
import CityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import Fonts from '../../../../assets/fonts'
import Colors from '../../../../assets/colors'
import Headers from '../../../Screens/Common/Headers'
import CommonHeards from '../../../Screens/Common/CommonHeards'
import CommonTextInputs from '../../../Components/CommonTextInputs'

const SalesTeam = () => {
  const navigation = useNavigation()
  const [input, setInput] = useState({
    fullname: '',
    PhnNo: '',
    email: '',
    logId: '',
    password: '',
    salary: '',
    project: '',
    perSale: '',
    perBooking: ''
  });
  const [ischoose, setChoose] = useState(null)
  const [isShow, setShow] = useState(null)

  const HandleValidate = () => {
    if (!input.PhnNo || !input.fullname || !input.email || !input.busName || !input.busAddress) {
      console.log("please enter field")
    } else {
      handleSubmitUser()
      // navigation.navigate('Otpscreen')
    }
  }

  const handleSubmitUser = () => {
    console.log("successful")
  };

  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({ ...prevInput, [field]: value }));
  }

  return (
    <>
      <CommonHeards title={"Sales Team"} />
      <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
        <View style={styles.LoginContainer}>
          <CommonTextInputs
            Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Full Name*"}
            placeholderText={'Enter your Full Name'}
            Inputname={input.fullname}
            Inputfieldname={'fullname'}
            OnChangeFunction={handleInputChange}

          />
          <CommonTextInputs
            // Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Phone Number*"}
            placeholderText={'Enter your Phone Number'}
            Inputname={input.PhnNo}
            Inputfieldname={'PhnNo'}
            OnChangeFunction={handleInputChange}

          />
          <CommonTextInputs
            Icon='email'
            setInput={setInput}
            input={input}
            Headername={"Email ID*"}
            placeholderText={'Enter your Email ID'}
            Inputname={input.email}
            Inputfieldname={"email"}
            OnChangeFunction={handleInputChange}
          />
          <CommonTextInputs
            Icon='line-scan'
            setInput={setInput}
            input={input}
            Headername={"Login ID*"}
            placeholderText={'Enter your Login ID'}
            Inputname={input.logId}
            Inputfieldname={"logId"}
            OnChangeFunction={handleInputChange}
          />
          <CommonTextInputs
            Icon='form-textbox-password'
            setInput={setInput}
            input={input}
            Headername={"Password*"}
            placeholderText={'Enter Password for User'}
            Inputname={input.password}
            Inputfieldname={"password"}
            OnChangeFunction={handleInputChange}
          />
          <CommonTextInputs
            Icon='rupee'
            setInput={setInput}
            input={input}
            Headername={"Salary"}
            placeholderText={'Enter Salary in Rupees'}
            Inputname={input.salary}
            Inputfieldname={"salary"}
            OnChangeFunction={handleInputChange}
          />

          <Text style={styles.TopHeading}>Commission</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.OptionWrap}
              onPress={() => {

                setChoose(true)
                setShow(true)
              }}
            >
              <View style={[styles.Optionbox, ischoose === true ? { backgroundColor: 'green' } : null]}>
                <UserIcon name='check' style={{ color: '#fff', fontSize: 20 }} />
              </View>
              <Text style={{ marginRight: 20 }}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.OptionWrap}
              onPress={() => {
                setChoose(false)
                setShow(false)
              }}
            >
              <View style={[styles.Optionbox, ischoose === false ? { backgroundColor: 'green' } : null]}>
                <UserIcon name='check' style={{ color: '#fff', fontSize: 20 }} />
              </View>
              <Text style={{ marginRight: 20 }}>No</Text>
            </TouchableOpacity>
          </View>
          {
            isShow ? (
              <>
                <CommonTextInputs
                  Icon='city'
                  setInput={setInput}
                  input={input}
                  Headername={"Per Booking"}
                  placeholderText={'Enter in Rupees per Booking'}
                  Inputname={input.perBooking}
                  Inputfieldname={"perBooking"}
                  OnChangeFunction={handleInputChange}
                />
                <CommonTextInputs
                  Icon='city'
                  setInput={setInput}
                  input={input}
                  Headername={"Per Sale"}
                  placeholderText={'Enter in % of Booking/sale amount'}
                  Inputname={input.perSale}
                  Inputfieldname={"perSale"}
                  OnChangeFunction={handleInputChange}
                />
              </>
            ) : null
          }


          <CommonTextInputs
            Icon='city'
            setInput={setInput}
            input={input}
            Headername={"Project"}
            placeholderText={'Enter your Project'}
            Inputname={input.project}
            Inputfieldname={"project"}
            OnChangeFunction={handleInputChange}
          />

          <TouchableOpacity
            style={styles.LoginButton}
            onPress={() => HandleValidate()}
          >
            <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Save User</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default SalesTeam;

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({

  LoginContainer: {
    marginHorizontal: 15,
  },
  BottomText: {
    fontFamily: Fonts.JosefinSans500,
    fontSize: 14,
    marginHorizontal: 15,
    marginVertical: 20
  },
  LoginButton: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
    marginVertical: 20,
    alignSelf: 'center'
  },
  OptionWrap: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 15
  },
  Optionbox: { width: 20, height: 20, borderRadius: 5, borderWidth: 1, borderColor: Colors.CommonColor, marginRight: 5 }
});
