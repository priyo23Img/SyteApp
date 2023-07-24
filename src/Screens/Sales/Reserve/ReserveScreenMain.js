import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Modal, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import Fonts from '../../../../assets/fonts';
import Colors from '../../../../assets/colors';
import UserIcon from 'react-native-vector-icons/Entypo';
import { CommonActions, useNavigation } from '@react-navigation/native';
import moment from 'moment';
import Textarea from 'react-native-textarea';
import CommonHeards from '../../Common/CommonHeards';
import CalendeTimermodal from '../../Common/CalendeTimermodal';
import ReserveCustomer from '../InnerScreen/ReserveCustomer';

const data = [
    { label: 'For Owner', value: '1' },
    { label: 'For Customer', value: '2' },
];

const ReserveScreenMain = () => {

    const navigation = useNavigation()
    const [textareatext, setTextareaText] = useState('');


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isdate, setDate] = useState('')
    const [isChoose, setChoose] = useState("For Owner")
    const [input, setInput] = useState({
        cusName: '',
        cusNumber: '',
        finaldate: '',

    });
    const handleTextareaChange = (value) => {
        setTextareaText(value)
    };
    const handleSubmitUser = () => {
    };
    const handleSelectButton = (option) => {
        setChoose(option)
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date)
        // console.warn("A date has been picked: ", date);
        hideDatePicker();
        //   refollowRBSheet.current.close()
    };
    //  setValue(values)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <CommonHeards title={"Reserve Flat"} />
            <Text style={styles.TopHeading}>Reserve For</Text>
            <View>
                <View style={styles.Options}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}
                        onPress={() => handleSelectButton("For Customer")}
                    >

                        <View style={styles.EmptyView}>
                            <View style={{ backgroundColor: isChoose === "For Customer" ? "#5470FF" : "grey", width: 12, height: 12, borderRadius: 8 }} />
                        </View>
                        <Text>For Customer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row' }}
                        onPress={() => handleSelectButton("For Owner")}

                    >

                        <View style={styles.EmptyView}>
                            <View style={{ backgroundColor: isChoose === "For Owner" ? "#5470FF" : "grey", width: 12, height: 12, borderRadius: 8 }} />
                        </View>
                        <Text>For Owner</Text>
                    </TouchableOpacity>

                </View>
            </View>
            {isChoose && isChoose === "For Owner" ? null : (null
            )}

            {isChoose && isChoose === "For Customer" ? (
                <View style={{ marginHorizontal: 15 }}>
                    <ReserveCustomer />
                </View>
            ) : null}
            <View style={{ marginHorizontal: 15 }}>
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

            </View>

            <TouchableOpacity style={styles.LoginButton} onPress={handleSubmitUser}>
                <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Reserve Unit</Text>
            </TouchableOpacity>
            <CalendeTimermodal isDatePickerVisible={isDatePickerVisible} handleConfirm={handleConfirm} hideDatePicker={hideDatePicker} />

        </View>
    )
}

export default ReserveScreenMain
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;

const styles = StyleSheet.create({
    TopHeading: {
        fontSize: fontSize,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: fontSize,
        marginHorizontal: 15
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
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 10,
        elevation: 3,
    },
    Inputcontainer: {
        backgroundColor: '#fff',
        elevation: 3,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    InputStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '90%',
        marginLeft: 20
    },
    CalenderBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '40%',
        borderColor: Colors.CommonColor,
        borderWidth: 1,
        justifyContent: 'space-between',
        borderRadius: 5
    },
    Date: {
        color: Colors.CommonColor,
        fontSize: 15,
        fontFamily: Fonts.Arial400
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    EmptyView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#D6D6D6',
        borderWidth: 1,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Options: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20
    }
})