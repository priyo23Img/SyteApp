import React, { useRef, useState } from 'react';
import { View, ScrollView, Image, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import DummyText from './DummyText';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import axios from 'axios';
import { API_BASE_URL } from '../../ApiController/ApiController';
const { width, height } = Dimensions.get('screen');

export const BANNER_H = height / 3.3
export const TOPNAVI_H = 50;

const LogRegisterMain = () => {
  const [selectText, setSelectText] = useState(false);

  const scrollA = useRef(new Animated.Value(0)).current;
  const [registerData, setRegisterData] = useState([])


  const scrollRef = useRef();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }



  return (
    <View>
      {/* <TopNavigation title="Home" scrollA={scrollA} /> */}
      <Animated.ScrollView
        scrollEnabled={selectText}
        style={styles.Container}
        ref={scrollRef}
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={




          Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: true },
          )}
        scrollEventThrottle={16}
      >
        <View style={styles1.bannerContainer}>
          {/* <Animated.Image
            style={styles.banner(scrollA)}
            source={require('./banner.jpg')}
          /> */}
          <Animated.View style={[styles1.banner(scrollA)]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Image source={require('../../../assets/images/SyteLogo.png')} style={styles.Logo} />
              <View>
                <Text style={styles.Logotext}>SYTE</Text>
                <Text style={styles.subLogotext}>AB KAAM HUA AASAAN</Text>
              </View>
            </View>
            <View style={styles.LoginTextWrapper}>
              <Text style={styles.LoginText}>{!selectText ? 'Login Account' : 'Sign Up Account'}</Text>
              <Text style={styles.LoginSubtext}>{!selectText ? 'Hello, welcome back to Syte' : 'It’s quick and easy!'}</Text>
            </View>

          </Animated.View>
        </View>
        <DummyText setSelectText={setSelectText} selectText={selectText} onPressTouch={onPressTouch} />
      </Animated.ScrollView>
    </View>
  );
};

const styles1 = {
  bannerContainer: {
    // marginTop: -1000,
    // paddingTop: 1000,

    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
    marginTop: 20
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '100%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H, 0, BANNER_H, BANNER_H * 0.75],
        }),
      },
      // {
      //   scale: scrollA.interpolate({
      //     inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
      //     outputRange: [2, 1, 0.5, 0.5],
      //   }),
      // },
    ],
  }),
};

export default LogRegisterMain;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.MainColor,
    width: width,
    // height: height,
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
    fontSize: 30,
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
    marginTop: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // marginHorizontal:10
    height: height
  },
  contentText: {
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    fontSize: 30,
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

