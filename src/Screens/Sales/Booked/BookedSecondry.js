


import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity,ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import Colors from '../../../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../../assets/fonts';
import RBSheet from 'react-native-raw-bottom-sheet';
import Textarea from 'react-native-textarea';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import Rupee from 'react-native-vector-icons/FontAwesome'
import CommonHeards from '../../Common/CommonHeards';
import CalendeTimermodal from '../../Common/CalendeTimermodal';
import BookedScreen from './BookedScreen';



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
const BookedSecondry = () => {

    const navigation = useNavigation()
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [uservalue, setUserValue] = useState(null);
  const [isuserFocus, setIsUserFocus] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const [input, setInput] = useState({
    customerName: '',
    phnNum: '',
    email: '',
    amount: '',
  });
  const [textareatext, setTextareaText] = useState('');

  const handleInputChange = (field, value) => {
    console.log(value, field);
    setInput(prevInput => ({ ...prevInput, [field]: value }));
  };
  const refRBSheet = useRef();

  const handleTextareaChange = (value) => {
    setTextareaText(value)
  };
  const handleSubmitUser = () => {
  };
  console.log(value, "select")

  
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
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
        <CommonHeards  title={"New Booking"}/>
      <View style={styles.unitContainer}>
        <Text style={styles.header_text}>Unit Name </Text>
        <Text style={styles.header_text}>Project Name </Text>
      </View>
      <ScrollView>
        <View style={{marginHorizontal:15}}>

     <BookedScreen />
        </View>
      </ScrollView>
     
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={450}
        customStyles={{
          draggableIcon: {
            display: 'none',
          },
          container: { borderTopLeftRadius: 50, borderTopRightRadius: 50 },
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

export default BookedSecondry
const {width,height} = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;

const styles = StyleSheet.create({
  container: {},
  form_container:{
marginHorizontal:15
  },
  unitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: 'gray',
    marginTop:20,
    // marginHorizontal:15
    paddingHorizontal:15
  },
  header_text: {
    color: Colors.CommonColor,
    fontSize: fontSize,
    fontWeight: 'bold',
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
    paddingVertical: 20,
  },
  RBheading__container: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
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
    flex: 1 / 2,
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
    bottom: 0,
    paddingVertical: 10,
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
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 5,
  },
  dropdown: {
    height: 60,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: 10
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.50)'

  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
  Inputcontainer1: {
    backgroundColor: '#fff',
    elevation: 3,
    // marginTop: 15,
    // marginRight: 10,
    flexDirection: 'row',
    width: '40%',
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
});