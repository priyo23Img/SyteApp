import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import Rupee from 'react-native-vector-icons/FontAwesome';
import UserIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../../../assets/fonts';
import Colors from '../../../../assets/colors';
import CommonHeards from '../../Common/CommonHeards';
import AvailableScreen from '../Available/AvailableScreen';
import BookedScreen from '../Booked/BookedScreen';
import ReservedScreen from '../Reserve/ReservedScreen';
import CommonTextInputs from '../../../Components/CommonTextInputs';
const AddUnit = ({route}) => {
  const navigation = useNavigation();
   
console.log(route.params,"Value,SetValue")
const {value} = route.params
const{setValue}=route.params

  const [selectedOptions, setSelectedOptions] = useState('');
  const [isChoose, setChoose] = useState('');



  const [input, setInput] = useState({
    unitname: '',
    carpetarea: '',
    builduparea: '',
    saleablearea: '',
    rate: '',
  });







  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({ ...prevInput, [field]: value }));
  };





  const handleOptionSelect = (option) => {
    if (selectedOptions === option) {
      setSelectedOptions(null)
    } else {
      setSelectedOptions(option);
    }

  };


  const handleSelect = (option) => {
    if (isChoose === option) {
      setChoose(null)
    } else {
      setChoose(option);
    }

  };


  
  // console.log(selectedOptions, "optionchoose")

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <CommonHeards title={"Add Unit Details"} />
      <ScrollView >
        <KeyboardAvoidingView style={styles.LoginContainer}>



 <CommonTextInputs
            Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Unit Name"}
            placeholderText={'Enter unit Name'}
            Inputname={input.unitname}
            Inputfieldname={'unitname'}
            OnChangeFunction={handleInputChange}

          />


          <Text style={styles.TopHeading}>Unit Type</Text>

          <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('1BHK')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === '1BHK' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                1BHK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('2BHK')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === '2BHK' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                2BHK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('3BHK')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === '3BHK' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                3BHK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('3.5BHK')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === '3.5BHK' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                3.5BHK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('4BHK')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === '4BHK' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                4BHK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('5BHK')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === '5BHK' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                5BHK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('Shop')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === 'Shop' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                Shop
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('Office Space')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === 'Office Space' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                Office Space
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contentWrap}
              onPress={() => handleOptionSelect('Row House')}
            >
              <TouchableOpacity
                style={[styles.EmptyView, selectedOptions === 'Row House' && styles.SelectedView]}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >
                Row House
              </Text>
            </TouchableOpacity>
          </View>
            <CommonTextInputs
            // Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Carpet Area"}
            placeholderText={'Enter Carpet Area in sq metrs'}
            Inputname={input.carpetarea}
            Inputfieldname={'carpetarea'}
            OnChangeFunction={handleInputChange}
          />
          <CommonTextInputs
            // Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Buildup Area"}
            placeholderText={'Enter Area in sq mtrsr'}
            Inputname={input.builduparea}
            Inputfieldname={'builduparea'}
            OnChangeFunction={handleInputChange}
          />
          <CommonTextInputs
            // Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Saleable Area"}
            placeholderText={'Enter Area in sq mtrs'}
            Inputname={input.saleablearea}
            Inputfieldname={'saleablearea'}
            OnChangeFunction={handleInputChange}
          />
          <CommonTextInputs
            // Icon='account'
            setInput={setInput}
            input={input}
            Headername={"Rate"}
            placeholderText={'Enter Unit Rate in INR'}
            Inputname={input.rate}
            Inputfieldname={'rate'}
            OnChangeFunction={handleInputChange}
          />

          <Text style={styles.TopHeading}>Unit Status</Text>
          <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20, marginBottom: 30 }}>
            <TouchableOpacity style={styles.OptionWrap}
              onPress={() => handleSelect("Available")}
            >
              <View style={[styles.EmptyView, isChoose === 'Available' && styles.SelectedView]} />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >Available</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OptionWrap}
              onPress={() => handleSelect("Reserved")}

            >
              <View style={[styles.EmptyView, isChoose === 'Reserved' && styles.SelectedView]} />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >Reserved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.OptionWrap}
              onPress={() => handleSelect("Booked")}

            >
              <View style={[styles.EmptyView, isChoose === 'Booked' && styles.SelectedView]} />
              <Text
                style={{
                  fontSize: 13,
                  color: Colors.CommonColor,
                  fontFamily: Fonts.OpenSans400
                }}
              >Booked</Text>
            </TouchableOpacity>
          </View>


          {isChoose==="Available" && <AvailableScreen />}
          {isChoose==="Reserved" && <ReservedScreen   value={value} setValue={setValue}/>}
          {isChoose==="Booked" && <BookedScreen />}

          {/* <View style={styles.container}> */}

{/* </View> */}

        </KeyboardAvoidingView>
      </ScrollView>
      
    </View>

  );
};

export default AddUnit

const { width, height } = Dimensions.get('screen');
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;

const styles = StyleSheet.create({
  TopHeading: {
    fontSize: fontSize,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 20
  },
  LoginContainer: {
    marginHorizontal: 15,
  },
  InputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '90%',
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
 
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 5
  },
  contentWrap: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
    width: '25%',

  },
  EmptyView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginRight: 10,
  },
  Filledview: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.AvailableFlat
  },
  SelectedView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    color: Colors.AvailableFlat,
    backgroundColor: Colors.AvailableFlat,
    marginRight: 10,
  },
  OptionWrap: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: 'rgba(0,0,0.25)',
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
 
});
