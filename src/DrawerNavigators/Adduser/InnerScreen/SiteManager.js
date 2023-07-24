import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, Platform, PanResponder } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Fonts from '../../../../assets/fonts'
import Colors from '../../../../assets/colors'
import CommonHeards from '../../../Screens/Common/CommonHeards'
import CommonTextInputs from '../../../Components/CommonTextInputs'

const SiteManager = () => {
  const navigation = useNavigation()
  const [input, setInput] = useState({
    fullname: '',
    PhnNo: '',
    email: '',
    logId: '',
    password: '',
    salary: '',
    project: ''
  });


  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({ ...prevInput, [field]: value }));
  }
  const HandleValidate = () => {
    if (!input.PhnNo || !input.fullname || !input.email || !input.busName || !input.busAddress) {
      console.log("please enter field")
    }
    else {
      handleSubmitUser()
      // navigation.navigate('Otpscreen')
    }
  }

  const handleSubmitUser = () => {
    console.log("sucessful")
  };

  return (
    <>
      <CommonHeards title={"Site Manager"} />
      <ScrollView style={{
        backgroundColor: '#fff',
        flex: 1
      }}>
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
          <TouchableOpacity style={styles.LoginButton}
            onPress={() => HandleValidate()}
          >
            <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Save User</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>


  )
}

export default SiteManager
const { width, height } = Dimensions.get('screen')

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
    // marginHorizontal: 40,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 20,
    alignSelf: 'center'
  }
})