import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useContext } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome'
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Flow from 'react-native-vector-icons/Entypo'
import Colors from '../../../../assets/colors'
import Fonts from '../../../../assets/fonts'
import CommonHeards from '../../Common/CommonHeards'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';
import ComponentButtons from './ComponentButtons';

const CommonScreen = ({route}) => {
    const navigation = useNavigation()
    const refRBSheet = React.useRef();
    const {Data,openBottomSheet,setBottomSheet,CallFunction} = route?.params;
    console.log(Data,"DATA")
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
        //   refollowRBSheet.current.close()
    };

    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = (date) => {
        // console.warn("A date has been picked: ", date);
        hideTimePicker();
        //   refollowRBSheet.current.close()
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <CommonHeards  title={Data?.leadStatus}/>
            <View style={styles.TopContainerwrap}>

                <View style={styles.TopContantwrap}>
                    <View style={{ width: '65%', marginLeft: 20 }}>
                        <Text style={styles.ContentText}>{Data?.leadsname}</Text>
                        <Text style={styles.ContentText}>{Data?.project}</Text>
                        <Text style={[styles.ContentText, { color: '#D6D6D6' }]}>july 04,2023 | 12.00pm</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.Hotleadimageback}>
                            <Image source={require('../../../../assets/images/Hotlead.png')} style={styles.Hotleadimage} />
                        </View>
                        <Text style={{ color: Colors.CommonColor, fontFamily: Fonts.Poppins500, fontSize: 15 }}>Hot Lead</Text>
                    </View>
                </View>

                <View style={styles.TopContantBottomWrap}>
                    <TouchableOpacity 
                     onPress={()=>CallFunction()}
                    style={styles.IconsBack}>

                        <Icons name='phone' style={styles.Icons} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconsBack} onPress={()=>{
                        setBottomSheet("whatsapp")
                        openBottomSheet.current.open()
                    }}>

                        <Icons name='whatsapp' style={styles.Icons}  />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconsBack} onPress={()=>{
                        setBottomSheet("Text Message")
                        openBottomSheet.current.open()
                    }}>

                        <MessageIcon name='message-processing-outline' style={styles.Icons} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconsBack} onPress={()=>{
                        setBottomSheet("Email")
                        openBottomSheet.current.open()
                    }}>

                        <MessageIcon name='email' style={styles.Icons} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.IconsBack} onPress={()=>{
                        setBottomSheet("Email")
                        openBottomSheet.current.open()
                    }}>

                        <MessageIcon name='pencil-outline' style={styles.Icons} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.ButtonsWrap}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Leadhistory")}
                    style={styles.Buttons}>
                    <Flow name='flow-line' style={styles.Icons} />
                    <Text style={styles.LeadText}>Lead History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Flow name='info-with-circle' style={[styles.Icons, { marginRight: 15 }]} />
                    <Text style={styles.LeadText}>More Info</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                borderBottomColor: '#D6D6D6',
                borderBottomWidth: 1
            }}>
                <View style={styles.Bodycontent}>
                    <Flow name='circular-graph' style={styles.BodyIcons} />
                    <Text style={styles.LeadStatus}>Lead Status</Text>
                </View>
                <View style={styles.Bodycontent}>
                    <Flow name='location-pin' style={styles.BodyIcons} />
                    <Text style={[styles.LeadStatus, { fontFamily: Fonts.OpenSans400 }]}>{Data.leadStatus}</Text>
                </View>
                <View style={styles.Bodycontent}>
                    <Flow name='clock' style={styles.BodyIcons} />
                    <Text style={[styles.LeadStatus, { fontFamily: Fonts.OpenSans400 }]}>Wednesday| July 07,2023 | 12:00pm</Text>
                </View>
            </View>
            <ComponentButtons showDatePicker={showDatePicker} showTimePicker={showTimePicker} Data={Data} />






            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
            />
        </View>
    )
}

export default CommonScreen
const styles = StyleSheet.create({
    Hotleadimage: {
        width: 70,
        height: 70
    },
    Hotleadimageback: {
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70
    },
    TopContantwrap: {
        flexDirection: 'row',

    },
    ContentText: {
        lineHeight: 35,
        color: Colors.CommonColor,
        fontFamily: Fonts.Poppins500,
        fontSize: 15
    },
    TopContainerwrap: {
        paddingVertical: 30,
        height: 'auto',
        borderBottomColor: '#D6D6D6',
        borderWidth: 1,
    },
    Icons: {
        color: '#000000',
        fontSize: 22,

    },
    IconsBack: {
        backgroundColor: Colors.MainColor,
        width: 35,
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TopContantBottomWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20
    },
    Buttons: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: Colors.MainColor,
        flexDirection: 'row',
        borderRadius: 5,
        // justifyContent:'space-between'

    },
    ButtonsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginVertical: 20,
        // marginHorizontal: 20
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1
    },
    LeadText: {
        color: '#000000',
        fontFamily: Fonts.OpenSans400
    },
    LeadStatus: {
        fontSize: 17,
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans600
    },
    Bodycontent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,

    },
    BodyIcons: {
        color: 'black',
        fontSize: 25,
        marginRight: 10
    },
    BottomButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', marginHorizontal: 20,
        marginVertical: 30
    },
    BottomButtons: {
        width: '40%',
        backgroundColor: Colors.MainColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 30,
        borderRadius: 5
    },
    sheetContainer: {
        container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 20,
            height: 'auto',
        },
    },
})