
import { StyleSheet, Text, View, Dimensions, TextInput, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../assets/colors'
import Fonts from '../../../../assets/fonts'
import UserIcon from 'react-native-vector-icons/Entypo';

const EditProfile = () => {

    const [input, setInput] = useState({
        name: '',
        PhnNo: '',
        email: '',
    });


    const handleInputChange = (field, value) => {
        setInput((prevInput) => ({ ...prevInput, [field]: value }));
    }

  

    return (
        <View >
            <View style={styles.TopHeader}>

                <Text style={{ fontSize: height>900?17:15, fontFamily: Fonts.Poppins600, color: Colors.CommonColor }}>Edit profile Details</Text>
            </View>
<View style={{marginHorizontal:15}}>

         
<Text style={styles.TopHeading}> Name</Text>
            <View style={styles.Inputcontainer}>
                <UserIcon name='user' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
                <TextInput
                    placeholder='Enter your Name'
                    autoCapitalize='characters'
                    placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                    value={input.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                    style={styles.InputStyle}
                />
            </View>

            <Text style={styles.TopHeading}>Contact Number</Text>
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

            <Text style={styles.TopHeading}>Email ID</Text>
            <View style={styles.Inputcontainer}>
                <UserIcon name='mail' style={{ color: 'rgba(0, 0, 0, 0.25)', fontSize: 20 }} />
                <TextInput
                    placeholder='Enter your email address'
                    autoCapitalize='characters'
                    placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                    value={input.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    style={styles.InputStyle}
                />
            </View>

            </View>


            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.buttonText}>Save Details</Text>
            </TouchableOpacity>

        </View>
    )
}

export default EditProfile
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    TopHeader: {
        width: width,
        height: "12%",
        backgroundColor: Colors.MainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopHeading: {
        fontSize: 15,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 20,
        marginHorizontal: 15

    },
    Inputcontainer: {
        backgroundColor: '#fff',
        elevation: 3,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 15

    },
    InputStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '93%',
        marginLeft: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    CalenderBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 7,
        width: '93%',
        // borderColor: Colors.CommonColor,
        // borderWidth: 1,
        justifyContent: 'space-between',
        borderRadius: 5,
        marginHorizontal: 15,
        elevation: 5,
        backgroundColor: '#fff'

    },
    Date: {
        color: 'rgba(0, 0, 0, 0.25)',
        fontSize: 15,
        fontFamily: Fonts.Arial400
    },
    IconsWrap: {
        fontSize: 20,
        color: Colors.CommonColor
    },
    buttonText: {
        fontFamily: Fonts.Inter600,
        color: Colors.CommonColor,
        fontSize: height>900?17:15,
    },
    nextButton: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.MainColor,
        borderRadius: 5,
        elevation: 5,
        width: '50%',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    TopHeading: {
        fontSize: 15,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 20
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

})