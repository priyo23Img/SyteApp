import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import Login from './Login';
import Register from './Register';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
const { width, height } = Dimensions.get('screen');
const DummyText = ({ setSelectText, selectText,onPressTouch}) => {
    return (

        <View style={styles.contentContainer}>
            <View style={styles.contentTextWrap}>
                <TouchableOpacity onPress={() => {
                    setSelectText(false)
                      onPressTouch()}}
            
            >
                    <Text style={[styles.contentText, !selectText ? styles.ButtonBorder : null]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectText(true)}>
                    <Text style={[styles.contentText, selectText ? styles.ButtonBorder : null]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            {selectText ? <Register /> : <Login onPressTouch={onPressTouch} />}

        </View>

    );
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: Colors.MainColor,
        width: width,
        height: height,
    },
    Logo: {
        width: 80,
        height: 80,
    },
    Logotext: {
        textTransform: 'uppercase',
        color: Colors.CommonColor,
        fontFamily: Fonts.LatoBold,
        fontSize: 40,
    },
    subLogotext: {
        textTransform: 'uppercase',
        color: Colors.CommonColor,
        fontFamily: Fonts.LatoBold,
        letterSpacing: 5,
        lineHeight: 20,
    },
    LogoWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    LoginText: {
        color: Colors.CommonColor,
        fontSize: 40,
        fontFamily: Fonts.JosefinSans600,
    },
    LoginTextWrapper: {
        marginHorizontal: 15,
        marginTop: 15,
    },
    LoginSubtext: {
        color: Colors.CommonColor,
        fontFamily: Fonts.JosefinSansregular,
        fontSize: 17,
        marginTop: 20,
    },
    contentContainer: {

        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingBottom: 30,
        // marginTop:40
    },
    contentText: {
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        fontSize: 25,
    },
    contentTextWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginHorizontal: 25,
    },
    ButtonBorder: {
        borderBottomColor: Colors.CommonColor,
        borderBottomWidth: 1,
    },
});

export default DummyText;