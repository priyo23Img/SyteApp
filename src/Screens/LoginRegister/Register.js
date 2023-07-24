import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import Mobilephone from 'react-native-vector-icons/FontAwesome';
import UserIcon from 'react-native-vector-icons/Entypo';
// import Idcardicon from 'react-native-vector-icons/AntDesign';
import CityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ApiController from '../../ApiController/ApiController';


const Register = () => {
  const navigation = useNavigation();
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [ispasswordValid, setIsPasswordValid] = useState(false);
  const [isFullname, setFullname] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isbusaddress, setbusaddress] = useState(false);

  const [isbusName, setbusName] = useState(false);
  const [regData, setRegdata] = useState([])

  const [input, setInput] = useState({
    PhnNo: '',
    fullname: '',
    email: '',
    busName: '',
    busAddress: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    PhnNo: '',
    fullname: '',
    email: '',
    busName: '',
    busAddress: '',
    password: '',
  });

  const handleSubmitUser = () => {
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
    if (!input.fullname) {
      errors.fullname = 'Full Name is required';
      isValid = false;
    }

    if (!input.busName) {
      errors.busName = 'Business Name is required';
      isValid = false;
    }
    if (!input.email) {
      errors.email = 'Please enter your Business Email Address';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Please enter a valid Email Address';
    }
    if (!input.busAddress) {
      errors.busAddress = 'Business Address is required';
      isValid = false;
    }
    if (!input.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (input.password.length !== 8) {
      errors.password = 'Password must be 8 characters long';
      isValid = false;
    }

    setErrors(errors);

    if (isValid) {
      const data = {
        phone: input.PhnNo,
        name: input.fullname,
        email: input.email,
        business_name: input.busName,
        business_address: input.busAddress,
        password: input.password,
      };
      ApiController.userSignup('/tempuserregister', data)
        .then(function (response) {
          let newData = response.data;
          setRegdata(newData)
          // console.log(newData, '  register api response');
          if (newData?.data?.tempuser?.length > 0) {
            navigation.navigate('Otpscreen', {
              newData,
            });
          }
          if (newData?.message == "Please Login you are already registerd") {
            ToastShow()
          }
        })
        .catch((error) => {
          console.error(error, 'registererror');
        });
      setInput('')
    }



  };

  console.log(regData, "registerdata")


  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({ ...prevInput, [field]: value }));
    if (field === 'PhnNo') {
      const phoneNumberPattern = /^\d{10}$/;
      const isValid = phoneNumberPattern.test(value);
      setIsPhoneNumberValid(isValid);
    } else if (field === 'fullname') {
      // const capitalizedName = value.toUpperCase();
      // setInput({ [field]: capitalizedName })
      if (value.length < 6) {
        setFullname(true);
      } else {
        setFullname(false);
      }
    } else if (field === 'password') {
      if (value.length !== 8) {
        setIsPasswordValid(true);
      } else {
        setIsPasswordValid(false);
      }
    } else if (field === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }

    } else if (field === 'busName') {
      if (value.length < 4) {
        setbusName(true);
      } else {
        setbusName(false);
      }
    } else if (field === 'busAddress') {
      if (value.length < 10) {
        setbusaddress(true);
      } else {
        setbusaddress(false);
      }
    }
  };




  const ToastShow = () => {
    ToastAndroid.show("Please Login you are already registerd", ToastAndroid.SHORT);
  }




  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.LoginContainer}>


        <Text style={styles.TopHeading}>Phone Number*</Text>
        <View style={styles.Inputcontainer}>
          <Text style={{ borderRightWidth: 1, paddingRight: 10, borderRightColor: 'rgba(0, 0, 0, 0.25)', color: 'rgba(0, 0, 0, 0.25)' }}>+91</Text>
          <TextInput
            placeholder='Enter your Phone Number'
            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
            value={input.PhnNo}
            maxLength={10}
            onChangeText={(text) => handleInputChange('PhnNo', text)}


            keyboardType='number-pad'
            style={styles.InputStyle}
          />
        </View>
        {errors.PhnNo && <Text style={styles.errorText}>{errors.PhnNo}</Text>}
        {!isPhoneNumberValid && <Text style={styles.errorText}>Please enter a valid phone number</Text>}
        <Text style={styles.TopHeading}>Full Name*</Text>
        <View style={styles.Inputcontainer}>
          <UserIcon name='user' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
          <TextInput
            placeholder='Enter your Full Name'
            autoCapitalize='characters'
            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
            value={input.fullname}
            onChangeText={(text) => handleInputChange('fullname', text)}
            style={styles.InputStyle}
          />
        </View>
        {errors.fullname && <Text style={styles.errorText}>{errors.fullname}</Text>}
        {isFullname && <Text style={styles.errorText}>please enter atleast 6 char</Text>}


        <Text style={styles.TopHeading}>Business Email Address</Text>
        <View style={styles.Inputcontainer}>
          <UserIcon name='mail' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
          <TextInput
            placeholder='Enter your Business Email Address'
            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
            value={input.email}
            onChangeText={(text) => handleInputChange('email', text)}
            style={styles.InputStyle}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>please enter valid email id</Text> : null}


        <Text style={styles.TopHeading}>Business Name*</Text>
        <View style={styles.Inputcontainer}>
          {/* <Idcardicon name='idcard' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} /> */}
          <TextInput
            placeholder='Enter your Business Name'
            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
            value={input.busName}
            onChangeText={(text) => handleInputChange('busName', text)}
            style={[styles.InputStyle, { textTransform: 'uppercase' }]}
          />
        </View>
        {errors.busName && <Text style={styles.errorText}>{errors.busName}</Text>}
        {isbusName ? <Text style={styles.errorText}>please enter atleast 4 char</Text> : null}


        <Text style={styles.TopHeading}>Business Address*</Text>
        <View style={styles.Inputcontainer}>
          <CityIcon name='city' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
          <TextInput
            placeholder='Enter your Business Address'
            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
            value={input.busAddress}
            onChangeText={(text) => handleInputChange('busAddress', text)}
            style={styles.InputStyle}
          />
        </View>
        {errors.busAddress && <Text style={styles.errorText}>{errors.busAddress}</Text>}
        {isbusaddress ? <Text style={styles.errorText}>please enter atleast 10 char</Text> : null}

        <Text style={styles.TopHeading}>Password*</Text>
        <View style={styles.Inputcontainer}>
          <CityIcon name='city' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
          <TextInput
            placeholder='Enter your Password'
            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
            value={input.password}
            onChangeText={(text) => handleInputChange('password', text)}
            style={styles.InputStyle}
          />
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        {ispasswordValid ? <Text style={styles.errorText}>password must be 8 character</Text> : null}



        <Text style={styles.BottomText}>By proceeding, you agree to our terms and conditions</Text>
        <TouchableOpacity style={styles.LoginButton} onPress={handleSubmitUser}>
          <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Request OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  TopHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 20
  },
  LoginContainer: {
    marginHorizontal: 15,  },
  InputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5
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
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 5,
    elevation: 5
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5
  }
});
