import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../../../assets/colors'
import Fonts from '../../../../assets/fonts'
import Headers from '../../Common/Headers';
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiController from '../../../ApiController/ApiController';
import { AuthContext } from '../../../../App';






const OtpScreen = ({ route }) => {
    const { setToken } = React.useContext(AuthContext)
    const userId = route.params.newData?.data?.tempuser

    console.log(route.params.phone, "login")

    const PhoneNum = route.params?.phone
    console.log(setToken, "data")
    // const setToken = React.useContext(AuthContext);


    console.log(userId, "route")
    const [otp, setOtp] = useState('');

    const navigation = useNavigation()

    const handleOtpSubmit = async () => {
        const Otpdata = {
            tempuser: userId,
            otp: otp,
        };
        ApiController.otpVerification("/register", Otpdata)
            .then(async function (response) {
                let newData = response.data;
                console.log('otp response', newData);
                if (newData.status === true) {
                    console.log(newData?.data?.access_token, "TOKEN.....")
                    getSaveToken(newData?.data?.access_token)

                }
            })
            .catch((error) => {
                console.log("dhfhdfdhzfh", error.response)
            });
    };

    const getSaveToken = async data => {
        await AsyncStorage.setItem('token', data);
        setToken(data);
        console.log(data, "ASYNC......   `")
        navigation.navigate('SubScription');

    };





    const handleVerifyOt = () => {
        const OtpLogindata = {
            phone: PhoneNum,
            otp: otp,
        };
        ApiController.VerifyOtp("/verifyotp", OtpLogindata)
            .then(async function (response) {
                let newData = response.data;
                console.log('Loginotp response', newData);
                if (newData.status === true) {
                    // console.log(newData?.data?.access_token, "TOKEN.....")
                    getSaveToken(newData?.data?.access_token)

                }
            })
            .catch((error) => {
                console.log("dhfhdfdhzfh", error.response)
            });

    }


    return (
        <>
            <Headers />

            <View style={styles.Container}>
                <Text style={styles.TopHead}>Verify Phone Number</Text>
                <Text style={styles.SubHead}>Please enter the 6 digit code sent to {'\n'}<Text style={{ color: Colors.CommonColor }}>+91 {PhoneNum}</Text> through SMS</Text>

                <OTPInputView
                    style={styles.inputBox}
                    pinCount={6}
                    onCodeChanged={otp => {
                        console.log('otp', otp);
                        setOtp(otp);
                    }}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={otp => {

                    }}
                />

                <Text style={{ marginTop: 10, color: '#7E7E7E' }}>Didn’t recieve a code?<Text style={{ color: '#7C15FF' }}> Resend SMS</Text></Text>

                <Text style={{ color: Colors.CommonColor, marginTop: 10 }}>Wrong number</Text>
                <TouchableOpacity style={styles.Otpbutton} onPress={() => userId ? handleOtpSubmit() : handleVerifyOt()}>
                    <Text style={{ color: Colors.CommonColor, fontFamily: Fonts.JosefinSans500, fontSize: 15 }}>Verify Number</Text>
                </TouchableOpacity>
                <Text style={styles.ButtomText}>By continuing you’re indicating that you accept our<Text style={{ borderBottomColor:'#7E7E7E', borderBottomWidth: 1 }}> Terms of Use</Text> and our <Text>Privacy Policy</Text></Text>
            </View>
        </>

    )
}

export default OtpScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.SplashBack,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    TopHead: {
        color: Colors.CommonColor,
        fontFamily: Fonts.Montserrat700,
        fontSize: 20

    },
    SubHead: {
        textAlign: 'center',
        fontFamily: Fonts.JosefinSans600,
        color: '#7E7E7E',
        fontSize: 13,
        marginTop: 10

    },
    Otpbutton: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFDF16',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        elevation: 5,
        borderRadius: 5
    },
    ButtomText: {
        color: '#7E7E7E',
        textAlign: 'center',
        width: '85%',
        lineHeight:22
    },
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 20 },
    codeFieldRoot: {
        marginTop: 30,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
    },



    cellText: {
        color: '#000',
        fontSize: 28,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },
    cellRoot: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: Colors.CommonColor,
        borderBottomWidth: 1,
        marginBottom: 30
    },
    underlineStyleBase: {
        width: 50,
        height: 50,
        fontSize: 20,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#000000',
        marginRight: 10,
        borderBottomColor: Colors.CommonColor
    },
    underlineStyleHighLighted: {
        borderColor: Colors.CommonColor,
    },
    inputBox: {
        width: '95%',
        height: 100,
        overflow: 'hidden',
        paddingBottom: 5
    },
})