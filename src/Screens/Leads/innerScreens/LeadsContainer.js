import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    TextInput,
    Linking
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons2 from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import Fonts from '../../../../assets/fonts';
import Colors from '../../../../assets/colors';
import call from 'react-native-phone-call';

const LeadsContainer = ({ item, index, refRBSheet, setBottomSheet }) => {
 const [inputValue, setInputValue] = useState('7732914129');


 const triggerCall = () => {
    // Check for a perfect 10 digit length
    if (inputValue.length !== 10) {
      console.log('Please insert a correct contact number');
      return;
    }

    const phoneNumber = `tel:${inputValue}`;

    Linking.openURL(phoneNumber)
      .catch((error) => {
        console.log('Failed to open phone app:', error);
      });
  };



    const handleNavigation=(data)=>{
console.log(data,"data")
navigation.navigate('Commonscreen',{
    Data:data,
    openBottomSheet:refRBSheet,
    setBottomSheet,setBottomSheet,
 CallFunction:triggerCall,
 
})
    }
    console.log(item, "all item");
    const navigation = useNavigation()
    return (
        <View
            style={[styles.Card,styles.shadowProp]}>
            <TouchableOpacity
    
                style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                <Text
                    style={{
                        padding: 3,
                        textAlign: 'center',
                        backgroundColor: Colors.MainColor,
                        fontFamily: Fonts.OpenSans600,
                        borderRadius: 13,
                        fontSize: 12,
                        lineHeight: 16,
                        width: '25%',
                        color: Colors.CommonColor
                    }}>
                    {item.source}
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        // backgroundColor: 'green',
                        width: '33%',
                        padding: 20,

                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                    onPress={()=> handleNavigation(item)}
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#F2FEDC',
                            // padding: 12,
                            paddingHorizontal:10,
                            paddingVertical:10,
                            alignItems: 'flex-start',
                            borderRadius: 10,
                            elevation: 5,
                            // paddingHorizontal: 5,
                        }}>
                        {/* <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}> */}
                            {item.leadStatus === "New Lead" ? (
                                <Entypo name='new' size={23} color="red" style={styles.Freshicons} />
                            ) : (
                                <Icons name={'calendar'} size={20} color="#000000" style={{alignSelf:'flex-start'}} />
                            )}
                        {/* </View> */}
                        <Text
                            style={{
                                fontSize: 10,
                                fontFamily: Fonts.OpenSans600,
                                lineHeight: 13,
                                marginTop:10,
                                marginBottom: 4,
                                color:Colors.CommonColor,
marginLeft:-3,
                                alignSelf: item.leadStatus=== "New Lead" ? 'center' :'flex-start'

                            }}>
                            {item.Date}
                        </Text>

                        <Text
                            style={{
                                fontSize: 10,
                                fontFamily: Fonts.OpenSans600,
                                color:Colors.CommonColor,
                                lineHeight: 13,
                                marginBottom: 6,
                                alignSelf: item.leadStatus=== "New Lead" ? 'center' :'flex-start'
                            }}>
                           
                            {item.leadStatus}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        width: '60%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        margin: 8,
                    }}>
                    <Text
                        style={{
                            fontFamily: Fonts.OpenSans600,
                            fontSize: 12,
                            color: 'black',
                            marginBottom: 8,
                        }}>
                        {item.leadsname}
                    </Text>
                    <Text
                        style={{
                            fontFamily: Fonts.OpenSans600,
                            fontSize: 12,
                            color: 'black',
                            marginBottom: 8,
                        }}>
                        {item.project}
                    </Text>
                    <Text
                        style={{
                            fontFamily: Fonts.OpenSans400,
                            fontSize: 10,
                            color: '#1F1F1F',
                            marginBottom: 10,
                            // marginTop:10
                        }}>
                        July 04,2023 | 12:09pm
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: 5,
                            width: '80%',
                        }}>
                        <TouchableOpacity
                        onPress={()=>triggerCall()}
                            style={{
                                backgroundColor: Colors.MainColor,
                                // padding: 3,
                                paddingHorizontal: 7,
                                marginRight:5,
                                paddingVertical: 5,
                                borderRadius: 4,
                                // marginRight: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icons2 name={'phone'} style={styles.Icons} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.MainColor,
                                paddingHorizontal: 5,
                                paddingVertical: 5,
                                borderRadius: 4,
                                marginRight:5,

                                // marginRight: 5,
                            }}
                            onPress={() => {
                                setBottomSheet('WhatsApp');
                                refRBSheet.current.open();
                            }}>
                            <Icons2 name={'whatsapp'} style={styles.Icons} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.MainColor,
                                paddingHorizontal: 5,
                                paddingVertical: 5,
                                borderRadius: 4,
                                marginRight: 5,
                            }}
                            onPress={() => {
                                setBottomSheet('Text Message');
                                refRBSheet.current.open();
                            }}>
                            <MessageIcon name='message-processing-outline' style={styles.Icons} />

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.MainColor,
                                paddingHorizontal: 5,
                                paddingVertical: 5,
                                borderRadius: 4,
                                 marginRight: 5,
                            }}
                            onPress={() => {
                                setBottomSheet('Email');
                                refRBSheet.current.open();
                            }}>
                            <MessageIcon name={'email'} style={styles.Icons} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                <Text
                    style={{
                        padding: 3,
                        textAlign: 'center',
                        fontFamily: Fonts.OpenSans400,
                        fontSize: 12,
                        lineHeight: 16,
                        width: '25%',
                    }}>
                    Creaded By
                </Text>
            </View>
        </View>
    );
};

export default LeadsContainer
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    Icons: {
        color: '#000000',
        fontSize: 25,
    },
    Freshicons:{
        alignSelf:'center',
        fontSize: 25,


        // justifyContent:'center'
    },
    shadowProp: {
        shadowColor: 'rgba(0,0,0.25)',
        shadowOffset: { width: -2, height: 1},
        shadowOpacity: 0.2,
        // shadowRadius: 3,
      },
      Card:{
        // flexDirection: 'row',
        width: width < 500 ? width / 1.1 : 392,
        height: 210,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 12,
        borderRadius: 20,
        elevation: 5,
    }
})