import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../../assets/fonts'
import Colors from '../../../assets/colors'
// import { TextInput } from 'react-native-paper';
import Mobilephone from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import ApiController from '../../ApiController/ApiController'
const Login = () => {
  const [input, setInput] = useState({
    PhnNo: '',
    password: ' ',

  });
  const [errors, setErrors] = useState({
    PhnNo: '',
   
  })
  const navigation = useNavigation()


  const HandleValidate = () => {
    const errors = {};
    let validationErrors = {};
    let isValid = true;

    if (!input.PhnNo) {
      isValid = false;
      errors.PhnNo = 'Please enter your Phone Number';
    } else if (!/^\d{10}$/.test(input.PhnNo)) {
      errors.PhnNo = 'Please enter a valid Phone Number';
      isValid = false;

    }
    else {
      handleLoginUser()
    }
    setErrors(errors)
  }
  const handleLoginUser = () => {
    const data = { 
      phone: input.PhnNo,
      // password: input.password
    };
    ApiController.LoginUser("/loginviamobile", data)
      .then(function (response) {
        let newData = response.data;
        console.log(newData, " login api response")
        newData.status == true &&
          navigation.navigate('Otpscreen', {
            phone:input.PhnNo,        })
            if( newData.status ==false){
              ToastShow()
             }
      })
    
      .catch(error => {
        console.error(error, "login error");
      });
  };

  
  const ToastShow = () => {
    ToastAndroid.show("please register first", ToastAndroid.SHORT);
  }
  return (
    <View style={styles.LoginContainer}>
      <Text style={styles.TopHeading}>Phone Number</Text>
      <View style={styles.Inputcontainer}>
        <Mobilephone name='mobile-phone' style={{ color: 'grey', fontSize: 40 }} />
        <TextInput
          placeholder='Enter your Phone Number'
          placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
          value={input.PhnNo}
          onChangeText={text => setInput({ ...input, PhnNo: text })}
          maxLength={10}
          keyboardType='number-pad'
          style={styles.InputStyle}
        />
      </View>
  
      {errors.PhnNo && <Text style={styles.errorText}>{errors.PhnNo}</Text>}

      <View style={{ flexDirection: 'row', marginBottom: 50 }}>
        <Text style={styles.BottomText}>Forgot Password?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Otpscreen',{
          newData
        })}>
          {/* <Text style={[styles.BottomText, { color: '#5470FF' }]}> Login with OTP</Text> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.LoginButton}
        onPress={() => HandleValidate()}
      >
        <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Login with OTP</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  TopHeading: {
    fontSize: 20,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor
  },
  LoginContainer: {
    marginTop: 70,
    marginHorizontal: 10,
    height: "auto"
  },
  InputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,

  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    // marginBottom: 20
  },
  BottomText: {
    fontFamily: Fonts.JosefinSans500,
    fontSize: 14,
    marginTop:20
  },
  LoginButton: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 5,
    elevation: 5
  },  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5
  }
})