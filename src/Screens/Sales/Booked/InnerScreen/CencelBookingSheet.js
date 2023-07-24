import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import ExclaimIcon from 'react-native-vector-icons/AntDesign';
import EditIcon from 'react-native-vector-icons/Entypo'
import Colors from '../../../../../assets/colors';
import Fonts from '../../../../../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const CencelBookingSheet = ({ setModalVisible, modalVisible }) => {

    const refRBSheet = useRef();
    const navigation = useNavigation()

    return (
        <>
            <View style={styles.ModalView}>
                <View style={styles.ModalHead}>
                    <Text style={styles.HeaderText}>Reservation Details</Text>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <EditIcon name='cross' style={{ fontSize: 20, color: Colors.CommonColor }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ModalInner}>
                    <ExclaimIcon name="exclamationcircleo" style={styles.icon} />
                    <Text style={styles.modalText}>
                        Are you sure to cencel Booking
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginHorizontal: 20 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: Colors.MainColor, paddingHorizontal: 15, paddingVertical: 10 }}
                        onPress={() => navigation.navigate('Salesmain')}
                    >
                        <Text>Ok</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: Colors.MainColor, paddingHorizontal: 10, paddingVertical: 10 }}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>


            </View>



        </>
    );
};

export default CencelBookingSheet

const styles = StyleSheet.create({
    ModalHead: {
        backgroundColor: Colors.MainColor,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between', flexDirection: 'row',
        paddingHorizontal: 20
    },
    HeaderText: {
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans400,
        fontSize: 20,
    },
    ModalInner: {
        flexDirection: 'row',
        // justifyContent:'center',
        // justifyContent:'space-around',
        alignItems: 'center',
        // alignSelf:'center'
        marginHorizontal: 20,
    },
    modalText: {
        textAlign: 'center',
        width: '50%',
        marginVertical: 25,
        marginLeft: 50,
        fontSize: 15,
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans400,
        // backgroundColor: 'red',
    },
    icon: {
        fontSize: 25,
        color: Colors.CommonColor
    },
    Del: {
        color: Colors.CommonColor,
        fontSize: 20,
        marginRight: 5
    },
    sheetContainer: {
        container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 20,
            height: 'auto',
        },
    },
    BottomSheetText: {
        color: Colors.CommonColor,
        fontSize: 15,
        fontFamily: Fonts.Poppins500
    },
    SheetBox: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: Colors.MainColor,
        // width:'30%'
    },
    SheetBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40
    },
    SheetBoxText: {
        fontSize: 15,
        color: Colors.CommonColor,
        fontFamily: Fonts.Poppins500
    },
});
