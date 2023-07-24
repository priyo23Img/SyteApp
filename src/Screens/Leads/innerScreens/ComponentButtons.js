import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useRef, useContext } from 'react';

import RBSheet from 'react-native-raw-bottom-sheet';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
import DroppedSheet from './DroppedSheet';
import CommonSheet from './CommonSheet';

const ComponentButtons = ({ showDatePicker, showTimePicker, Data }) => {
     const [Button,setBottomSheet]=useState('')
    const refRBSheet = useRef();
    const refollowRBSheet = useRef();

  const   openSheet=(name)=>{
    setBottomSheet(name)
    refollowRBSheet.current.open(name)

    }
    console.log(Button,"shheeet")
    return (
        <ScrollView>
            <View style={styles.BottomButton}>

                {Data.leadStatus === "New Lead" ? (
                    <>
                        <TouchableOpacity style={[styles.BottomButtons]} onPress={(el) => openSheet("Call Not Connected")}><Text style={styles.LeadText}>Call Not Connected</Text></TouchableOpacity>
                        <TouchableOpacity onPress={(el) => openSheet("Call Not Received")} style={styles.BottomButtons}><Text style={styles.LeadText}>Call Not Received</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => refRBSheet.current.open(el)}
                        ><Text style={styles.LeadText}>Dropped</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons}  ><Text style={styles.LeadText}>Wrong Number</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Call Back")}><Text style={styles.LeadText}>Call Back</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Site Visit")}><Text style={styles.LeadText}>Site Visit </Text></TouchableOpacity>
                    </>

                ) : Data.leadStatus === "Site Visit" ? (<>
                    <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Booked")}><Text style={styles.LeadText}>Booked  </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Follow-Up")}><Text style={styles.LeadText}>Follow-Up </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.BottomButtons} onPress={(el) => refRBSheet.current.open(el)} ><Text style={styles.LeadText}>Dropped</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Re-scheduled ")}><Text style={styles.LeadText}>Re-scheduled</Text></TouchableOpacity>
                </>

                ) : Data.leadStatus === "Call Back" ? (<>
                    <TouchableOpacity style={[styles.BottomButtons]} onPress={(el) => openSheet("Call Not Connected")}><Text style={styles.LeadText}>Call Not Connected</Text></TouchableOpacity>
                    <TouchableOpacity onPress={(el) => openSheet("Call Not Received")} style={styles.BottomButtons}><Text style={styles.LeadText}>Call Not Received</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Site Visit")}><Text style={styles.LeadText}>Site Visit </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.BottomButtons} onPress={(el) => refRBSheet.current.open(el)}><Text style={styles.LeadText}>Dropped</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Call Back")}><Text style={styles.LeadText}>Call Back</Text></TouchableOpacity>
                </>

                ) : Data.leadStatus === "Follow Up" ? (
                    <>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Booked")}><Text style={styles.LeadText}>Booked  </Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Follow-Up")}><Text style={styles.LeadText}>Follow-Up </Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => refRBSheet.current.open(el)}><Text style={styles.LeadText}>Dropped</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Re-scheduled")}><Text style={styles.LeadText}>Re-scheduled</Text></TouchableOpacity>
                    </>

                ) : Data.leadStatus === "call Not Connected" ? (
                    <>
                        <TouchableOpacity style={[styles.BottomButtons]}><Text style={styles.LeadText}   onPress={(el) => openSheet("Call Not Connected")}>Call Not Connected</Text></TouchableOpacity>
                        <TouchableOpacity onPress={(el) => openSheet("Call Not Received")} style={styles.BottomButtons}><Text style={styles.LeadText}>Call Not Received</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => refRBSheet.current.open(el)} ><Text style={styles.LeadText}>Dropped</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Wrong Number")}><Text style={styles.LeadText}>Wrong Number</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Call Back")}><Text style={styles.LeadText}>Call Back</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Site Visit")}><Text style={styles.LeadText}>Site Visit </Text></TouchableOpacity>
                    </>
                ) : Data.leadStatus === "call Not Received" ? (
                    <>
                        <TouchableOpacity style={[styles.BottomButtons]}><Text style={styles.LeadText}>Call Not Connected</Text></TouchableOpacity>
                        <TouchableOpacity onPress={(el) => openSheet("Call Not Received")} style={styles.BottomButtons}><Text style={styles.LeadText}>Call Not Received</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => refRBSheet.current.open(el)} ><Text style={styles.LeadText}>Dropped</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Wrong Number")}><Text style={styles.LeadText}>Wrong Number</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Call Back")}><Text style={styles.LeadText}>Call Back</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.BottomButtons} onPress={(el) => openSheet("Site Visit")}><Text style={styles.LeadText}>Site Visit </Text></TouchableOpacity>
                    </>
                ) : null}





            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnPressMask={true}
                customStyles={styles.sheetContainer}>
                <DroppedSheet title={"Dropped"} />
            </RBSheet>

            <RBSheet
                ref={refollowRBSheet}
                closeOnPressMask={true}
                customStyles={styles.sheetContainer}>
                <CommonSheet showDatePicker={showDatePicker} showTimePicker={showTimePicker}  Data={Data} Button={Button}/>
            </RBSheet>
        </ScrollView>
    )
}

export default ComponentButtons

const styles = StyleSheet.create({
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
        marginVertical: 30,
        // backgroundColor:'b'
    },
    BottomButtons: {
        width: '40%',
        backgroundColor: Colors.MainColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 30,
        borderRadius: 5,
        elevation:3
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