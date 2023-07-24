import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';
import ExclaimIcon from 'react-native-vector-icons/AntDesign';
import EditIcon from 'react-native-vector-icons/Entypo'
import RBSheet from 'react-native-raw-bottom-sheet';
const ReserveModal = ({ setModalVisible, modalVisible, refAvilBookSheet }) => {
  const refRBSheet = useRef();

  return (
    <>
      <View style={styles.ModalView}>
        <View style={styles.ModalHead}>
          <Text style={styles.HeaderText}>Reservation Details</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <EditIcon name='cross' style={{ fontSize: 20, color: Colors.CommonColor }} />
          </TouchableOpacity>
        </View>



        <View style={styles.ModalInner}>
          <ExclaimIcon name="exclamationcircleo" style={styles.icon} />
          <Text style={styles.modalText}>
            This unit has been permanently reserved.
          </Text>
        </View>
        <TouchableOpacity style={{ marginHorizontal: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}
          onPress={() => {
            refAvilBookSheet.current.open()
            setModalVisible(false)
          }}
        >
          <EditIcon name='edit' style={[styles.Del, { fontSize: 15 }]} />

          <Text>Edit</Text>
        </TouchableOpacity>

      </View>



    </>
  );
};

export default ReserveModal;
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
    fontSize: HeaderfontSize
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
    fontSize: fontSize,
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
