import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import Colors from '../../../../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../../assets/fonts';
import RBSheet from 'react-native-raw-bottom-sheet';
import Textarea from 'react-native-textarea';
import { useNavigation } from '@react-navigation/native';
import Rupee from 'react-native-vector-icons/FontAwesome'
import CalendeTimermodal from '../../Common/CalendeTimermodal';
import CommonDropdown from '../../Common/Dropdowns/CommonDropdown';
import CommonTextInputs from '../../../Components/CommonTextInputs';



const data = [
  { label: 'Self', value: '1' },
  { label: 'Sales', value: '2' },
  { label: 'Agent', value: '3' },

];
const user = [
  { label: 'Akshay', value: '1' },
  { label: 'Rishabh', value: '2' },
  { label: 'Rohitt', value: '3' },

];
const BookedScreen = () => {
  const navigation = useNavigation()
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [uservalue, setUserValue] = useState(null);
  const [isuserFocus, setIsUserFocus] = useState(false);
  const [input, setInput] = useState({
    customerName: '',
    PhnNo: '',
    AltPhnNo: '',
    email: '',
    amount: '',
  });
  const [Chooseuser,setchooseUser] = useState()
  const [textareatext, setTextareaText] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const label = data?.map((item)=> item.label)
  const User = user?.map((item)=> item.label)
  // setchooseUser(User)




  const refRBSheet = useRef();

  const handleTextareaChange = (value) => {
    setTextareaText(value)
  };
  const handleSubmitUser = () => {
  };
  // console.log(value, "select")
  // console.log(height)

  const showDatePicker = () => {
    setDatePickerVisibility(true);
};

const hideDatePicker = () => {
    setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
    setStartDate(date)
    console.warn("A date has been picked: ", date);
    hideDatePicker();
    //   refollowRBSheet.current.close()
};

const handleInputChange = (field, value) => {
  setInput((prevInput) => ({ ...prevInput, [field]: value }));
}
  return (
    <View>
      {/* <View style={styles.unitContainer}>
        <Text style={styles.header_text}>Unit Name </Text>
        <Text style={styles.header_text}>Project Name </Text>
      </View> */}
      <View style={styles.form_container}>
        {/* -----------Name */}
  
          <CommonTextInputs
            Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Customer Name*"}
            placeholderText={'Enter your Full Name'}
            Inputname={input.customerName}
            Inputfieldname={'customerName'}
            OnChangeFunction={handleInputChange}

          />

<CommonTextInputs
            // Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Contact Number*"}
            placeholderText={'Enter your Phone Number'}
            Inputname={input.PhnNo}
            Inputfieldname={'PhnNo'}
            OnChangeFunction={handleInputChange}

          />

<CommonTextInputs
            // Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Alternate Contact Number*"}
            placeholderText={'Enter your Alternative Phone Number'}
            Inputname={input.AltPhnNo}
            Inputfieldname={'AltPhnNo'}
            OnChangeFunction={handleInputChange}

          />

<CommonTextInputs
            // Icon='account'
            Icon='email'
            setInput={setInput}
            input={input}
            Headername={"Email Id "}
            placeholderText={'Enter your Email Address'}
            Inputname={input.email}
            Inputfieldname={'email'}
            OnChangeFunction={handleInputChange}

          />



    

        <Text style={styles.FieldHeading}>Closed By</Text>
      <CommonDropdown
          setIsFocus={setIsFocus}
          setValue={setValue}
          data={data}
          value={value}
          isFocus={isFocus}
          placeholdertext='Select/Enter Closed By'
          Label={label}
        />
        <Text style={styles.FieldHeading}>Select User</Text>
        <CommonDropdown
          setIsFocus={setIsFocus}
          setValue={setValue}
          data={data}
          value={value}
          isFocus={isFocus}
          placeholdertext='Select/Enter User Name'
          Label={User? User : label}
        />
        <View style={styles.container}>
        </View>
        {value === "Self" ? null : (


<CommonTextInputs
             Icon='rupee'
            setInput={setInput}
            input={input}
            Headername={"Commission "}
            placeholderText={'Enter Total Amount'}
            Inputname={input.amount}
            Inputfieldname={'amount'}
            OnChangeFunction={handleInputChange}

          />
           
            
        )
        }
<View style={styles.filed_container}>
          <Text style={styles.FieldHeading}>Add Amount </Text>
          <View style={[styles.Inputcontainer,styles.shadowProp]}>
            <View
              style={styles.calendarContainer}
              onTouchEnd={() => navigation.navigate('Detailspayment1')}>
              <Text style={styles.scheduleDate_text}>
              Enter Total Amount
              </Text>
            </View>
            <MaterialCommunityIcons
              name="file-question-outline"
              size={20}
            // color={'rgba(0, 0, 0, 0.25)'}
            />
          </View>
        </View>


        {/* -------------payment */}

        <View style={styles.filed_container}>
          <Text style={styles.FieldHeading}>Payment Schedule </Text>
          <View style={[styles.Inputcontainer,styles.shadowProp]}>
            <View
              style={styles.calendarContainer}
              onTouchEnd={() => refRBSheet.current.open()}>
              <Text style={styles.scheduleDate_text}>
                Add Payment Schedule Dates
              </Text>
            </View>
            <MaterialCommunityIcons
              name="calendar-month"
              size={20}
            // color={'rgba(0, 0, 0, 0.25)'}
            />
          </View>
        </View>
        <Text style={styles.TopHeading}>Remark </Text>

        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          onChangeText={handleTextareaChange}
          defaultValue={textareatext}
          maxLength={120}
          placeholder={'Enter your remarks here'}
          placeholderTextColor={'#c7c7c7'}
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity style={styles.LoginButton} onPress={handleSubmitUser}>
          <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Save Booking</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={450}
        customStyles={{
          draggableIcon: {
            display: 'none',
          },
          container: { borderTopLeftRadius: 30, borderTopRightRadius: 0 },
        }}>
        <View style={styles.rbSheetInner__container}>
          <View style={styles.RBheading__container}>
            <Text style={styles.RBSheet_heading}>Schedule Payment</Text>
          </View>
          <View style={styles.amounContainer}>
            <Text style={styles.AmountText}>Total Amount ₹ XXXXXX</Text>
            <Text style={styles.AmountText}>Due Amount ₹ XXXXXX</Text>
          </View>
          <View style={styles.RbMain_container}>
            <View style={styles.paymentType__container}>
            <TextInput
                placeholder='Payment Type'
                style={styles.paymenttype_Text}
              />
              <View style={[styles.Inputcontainer1]}>
              <TextInput
                value={input.gst}
                onChangeText={(text) => handleInputChange('gst', text)}
                style={styles.InputStyle1}
              />
              <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

            </View>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={20}
                color="black"
                onPress={() => showDatePicker()}
              />
            </View>

            {/* -----------schedule btn */}
            <View
              style={styles.schedule_btn}
              onTouchEnd={() => refRBSheet.current.close()}>
              <Text style={styles.btnText}>Schedule Payment</Text>
            </View>
          </View>
        </View>
      </RBSheet>
      <CalendeTimermodal isDatePickerVisible={isDatePickerVisible}  handleConfirm={handleConfirm} hideDatePicker={hideDatePicker} />

    </View>
  );
}

export default BookedScreen;
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;
const styles = StyleSheet.create({
  container: {},
  paymenttype_Text: {
    borderBottomWidth: 1,
    flex: 1 / 2,
    fontSize: 14,
    color: Colors.CommonColor,
    paddingBottom: 0,
    // backgroundColor:'red'
  },
  Inputcontainer1: {
    backgroundColor: '#fff',
    elevation: 3,
    // marginTop: 15,
    marginRight: 10,
    flexDirection: 'row',
    width: '45%',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.MainColor,
    backgroundColor: 'rgba(247, 248, 249, 1)',
    borderRadius:6,
    

    // paddingVertical: 5
  },
  InputStyle1: {
    // backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '90%',

    // marginLeft: 20
  },
  unitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: 'gray',
  },
  header_text: {
    color: Colors.CommonColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  FieldHeading: {
    fontSize: fontSize,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 20,
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  text_91: {
    borderRightWidth: 1,
    paddingRight: 10,
    borderRightColor: 'rgba(0, 0, 0, 0.25)',
    color: 'rgba(0, 0, 0, 0.25)',
  },
  InputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 10,
  },
  scheduleDate_text: { color: ' rgba(0, 0, 0, 0.25)' },
  calendarContainer: {
    width: '97%',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  rbSheetInner__container: {
    flex: 1,
    alignItems: 'center',
    // paddingVertical: 20,
  },
  RBheading__container: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor:Colors.MainColor,
    height:60
  },
  RBSheet_heading: { color: Colors.CommonColor, fontSize: 24 },

  amounContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    width: '100%',
  },
  AmountText: {
    fontSize: 12,
    color: Colors.CommonColor,
  },
  RbMain_container: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
  paymentType__container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    elevation: 10,
  },
  paymenttype_Text: {
    borderBottomWidth: 1,
    width:'40%',
    fontSize: 14,
    color: Colors.CommonColor,
  },
  paymentAmount_Text: {
    borderBottomWidth: 1,
    flex: 1 / 3.5,
    fontSize: 14,
    color: Colors.CommonColor,
  },
  schedule_btn: {
    backgroundColor: Colors.MainColor,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 5,
  },
  btnText: {
    color: Colors.CommonColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textareaContainer: {
    height: height / 7,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D6D6D6', marginVertical: 20
  },
  textarea: {
    textAlignVertical: 'top',
    height: height / 8,
    fontSize: 14,
    color: Colors.CommonColor,
    fontFamily: Fonts.OpenSans400

  },
  TopHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 15
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
    elevation: 3,
    marginBottom: 20
  },

  icon: {
    marginRight: 5,
  },
  shadowProp: {
    shadowColor: 'rgba(0,0,0.25)',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    // shadowRadius: 3,
  },

});