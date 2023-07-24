


import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
import ExclaimIcon from 'react-native-vector-icons/AntDesign';
import EditIcon from 'react-native-vector-icons/Entypo'

const ReserveForcustomerModal = ({ setModalVisible, modalVisible,refAvilBookSheet }) => {

    return (
        <View style={styles.ModalView}>
            <View style={styles.ModalHead}>
                <Text style={styles.HeaderText}>Reservation Details</Text>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <EditIcon name='cross' style={{ fontSize: 20, color: Colors.CommonColor }} />

                </TouchableOpacity>
            </View>

<View>

            <View style={styles.ModalInner}>
                <Text  style={styles.modalText}>Reserved By</Text>
                <Text style={{fontSize:17,color:Colors.CommonColor,fontWeight:600}} >
                 xxxxx
                </Text>
            </View>
            <View style={styles.ModalInner}>
                <Text  style={styles.modalText}> Reserved For</Text>
                <Text style={{fontSize:17,color:Colors.CommonColor,fontWeight:600}} >
                 xxxxx
                </Text>
            </View>
            <View style={styles.ModalInner}>
                <Text  style={styles.modalText}>Contact Number </Text>
                <Text style={{fontSize:17,color:Colors.CommonColor,fontWeight:600}} >
                 xxxxx
                </Text>
            </View>
            <View style={styles.ModalInner}>
                <Text  style={styles.modalText}>Reserved Till</Text>
                <Text style={{fontSize:14,color:Colors.CommonColor,fontWeight:600}} >
                 DD/MM/YYYY
                </Text>
            </View>
</View>
            <TouchableOpacity style={{ marginHorizontal: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',marginTop:10 }} 
              onPress={() => {
                refAvilBookSheet.current.open()
                setModalVisible(false)
              }}
            >
                <EditIcon name='edit' style={[styles.Del, { fontSize: 15 }]} />

                <Text>Edit</Text>
            </TouchableOpacity>

        </View>
    );
};

export default ReserveForcustomerModal
const {width,height} = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;
const HeaderfontSize = height > 900 ? 20 : height >= 800 ? 15 : 10;
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
        fontSize: HeaderfontSize,
    },
    ModalInner: {
        flexDirection: 'row',
        // justifyContent:'center',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    modalText: {
        // marginVertical: 25,
        marginBottom:15,
        marginTop:10,
        fontSize: fontSize,
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans400,
    },
    icon: {
        fontSize: 25,
        color: Colors.CommonColor
    },
    Del: {
        color: Colors.CommonColor,
        fontSize: 20,
        marginRight: 5
    }
});
