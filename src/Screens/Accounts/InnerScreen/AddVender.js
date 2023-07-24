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
import CommonHeards from '../../Common/CommonHeards'


const AddVender = () => {
    const navigation = useNavigation()
    const [input, setInput] = useState({
        fullname: '',
        PhnNo: '',
        balance: '',
        date: '',
    });
    const [ischoose, setChoose] = useState(null)

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

    return (
        <>
            <CommonHeards title={"Add Vendor"} />
            <View style={styles.container} >
                <ScrollView>
                    <View style={styles.LoginContainer}>
                        <Text style={styles.TopHeading}>Vendor Name</Text>
                        <View style={styles.Inputcontainer}>
                            <UserIcon name='user' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
                            <TextInput
                                placeholder='Enter your  Name'
                                placeholderTextColor='rgba(0, 0, 0, 0.25)'
                                value={input.fullname}
                                onChangeText={text => setInput({ ...input, fullname: text })}
                                maxLength={10}
                                style={styles.InputStyle}
                            />
                        </View>

                        <Text style={styles.TopHeading}>Contact Number</Text>
                        <View style={styles.Inputcontainer}>
                            <Text style={{ borderRightWidth: 1, paddingRight: 10, borderRightColor: 'rgba(0, 0, 0, 0.25)', color: 'rgba(0, 0, 0, 0.25)' }}>+91</Text>
                            <TextInput
                                placeholder='Enter your Phone Number'
                                placeholderTextColor='rgba(0, 0, 0, 0.25)'
                                value={input.PhnNo}
                                onChangeText={text => setInput({ ...input, PhnNo: text })}
                                maxLength={10}
                                keyboardType='number-pad'
                                style={styles.InputStyle}
                            />
                        </View>

                        <Text style={styles.TopHeading}>Opening Balance</Text>
                        <View style={styles.Inputcontainer}>
                            <Rupee name='rupee' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
                            <TextInput
                                placeholder='Enter your balance'
                                placeholderTextColor='rgba(0, 0, 0, 0.25)'
                                value={input.balance}
                                onChangeText={text => setInput({ ...input, balance: text })}
                                style={styles.InputStyle}
                            />
                        </View>

                        <Text style={styles.TopHeading}>Due Date</Text>
                        <View style={styles.Inputcontainer}>
                            <TextInput
                                placeholder='Enter Date'
                                placeholderTextColor='rgba(0, 0, 0, 0.25)'
                                value={input.date}
                                onChangeText={text => setInput({ ...input, date: text })}
                                style={[styles.InputStyle, { marginLeft: 0 }]}
                            />
                            <CityIcon name='calendar-month-outline' style={{ color: 'black', fontSize: 20 }} />

                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <TouchableOpacity
                                style={styles.OptionWrap}
                                onPress={() => setChoose(true)}
                            >
                                <View style={[styles.Optionbox, ischoose === true ? { backgroundColor: Colors.AvailableFlat } : null]}>

                                    <UserIcon name='check' style={{ color: '#fff', fontSize: 15, textAlign: 'center', justifyContent: 'center' }} />

                                </View>
                                <Text style={{ marginRight: 20 }}>To Receive</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.OptionWrap}
                                onPress={() => setChoose(false)}
                            >
                                <View style={[styles.Optionbox, ischoose === false ? { backgroundColor: Colors.AvailableFlat } : null]}>
                                    <UserIcon name='check' style={{ color: '#fff', fontSize: 15, textAlign: 'center', justifyContent: 'center', }} />
                                </View>

                                <Text style={{ marginRight: 20 }}>To Pay</Text>
                            </TouchableOpacity>
                        </View>




                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.LoginButton}
                    onPress={() => HandleValidate()}
                >
                    <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Save Vendor</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default AddVender

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    TopHeading: {
        fontSize: 15,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 15
    },
    LoginContainer: {
        marginHorizontal: 15,
    },
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 5,
        marginVertical: 20,
        alignSelf: 'center',
        width: width * 0.5,
        // position:'absolute',
        // top:'90%'
    },
    OptionWrap: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 15
    },
    Optionbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: 'black',
        marginRight: 5,
        alignItems: 'center'
    }
});
