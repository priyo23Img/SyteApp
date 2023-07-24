import { Dimensions, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CommonTextInputs from '../../../Components/CommonTextInputs'
import moment from 'moment'
import Fonts from '../../../../assets/fonts'
import Colors from '../../../../assets/colors'
import Calendaricon from 'react-native-vector-icons/AntDesign'

const ReserveCustomer = ({showDatePicker ,selectedDate}) => {

    
    const [input, setInput] = useState({
        cusName: '',
        cusNumber: '',
        finaldate: '',

    });

    const handleInputChange = (field, value) => {
        setInput((prevInput) => ({ ...prevInput, [field]: value }));
    };
  return (
    <View>
   <CommonTextInputs
                        Icon='account'
                        setInput={setInput}
                        input={input}
                        Headername={"Customer Name*"}
                        placeholderText={'Enter Carpet Area in sq metrs'}
                        Inputname={input.cusName}
                        Inputfieldname={'cusName'}
                        OnChangeFunction={handleInputChange}
                    />
                    <CommonTextInputs
                        // Icon='account'
                        setInput={setInput}
                        input={input}
                        Headername={"Customer Number"}
                        placeholderText={'Enter Carpet Area in sq metrs'}
                        Inputname={input.cusNumber}
                        Inputfieldname={'cusNumber'}
                        OnChangeFunction={handleInputChange}

                    />
                    <Text style={styles.TopHeading}>Reserve Till </Text>
                    <View style={[styles.Inputcontainer,styles.shadowProp]}>
                        <TextInput
                            placeholder={selectedDate ? moment(selectedDate).format('DD MMM,YYYY') : "DD/MM/YYYY"}
                            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                            value={input.finaldate}
                            onChangeText={(text) => handleInputChange('finaldate', text)}
                            style={styles.InputStyle}
                        />
                        <Calendaricon name='calendar'
                            style={{ color: Colors.CommonColor, fontSize: 20 }}
                            onPress={() => showDatePicker()}
                        />
                    </View>
    </View>
  )
}

export default ReserveCustomer
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;
const styles = StyleSheet.create({
    TopHeading: {
        fontSize: fontSize,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 15
    },

    Inputcontainer: {
        backgroundColor: '#fff',
        elevation: 3,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical:  Platform.OS==="ios"? 14:  5
    },
    InputStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '90%',
        marginLeft: 20
    },
    shadowProp: {
        shadowColor: 'rgba(0,0,0.25)',
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        // shadowRadius: 3,
      },
})
