import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef } from 'react'
import CommonHeards from '../../Common/CommonHeards'
import Fonts from '../../../../assets/fonts'
import Colors from '../../../../assets/colors'
import Icons from 'react-native-vector-icons/MaterialIcons'
import RBSheet from 'react-native-raw-bottom-sheet';
import AddNewMaterial from '../InnerScreens/AddNewMaterial'
import { CollapsedItem } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer'
const MaterialConsumMain = () => {
  const refRBSheet = useRef();
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <CommonHeards title={"Material Consumption"} rightComponent={<TouchableOpacity><Text>Add</Text></TouchableOpacity>} />
      <View style={styles.Topheader}>
        <Text style={styles.Title}>Material</Text>
        <Text style={[styles.Title,{marginLeft:25}]}>Qty</Text>
        <Text style={[styles.Title,{marginRight:0}]}>Unit</Text>
        {/* <Text style={styles.Title}>Other</Text> */}
        <Text />
      </View>
      <ScrollView>
        <View style={styles.ContentBox}>
          <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Cement</Text>
          </View>
          <TextInput style={styles.InputStyle} />
          <TextInput style={styles.InputStyle} />
          <View style={{ flexDirection: 'row' }}>
            {/* <Icons name='edit' size={20} style={{ marginRight: 10 }} /> */}
            <Icons name='delete' size={20} />
          </View>
        </View>
        <View style={styles.ContentBox}>
          <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Bricks</Text>
          </View>
          <TextInput style={styles.InputStyle} />
          <TextInput style={styles.InputStyle} />
          <View style={{ flexDirection: 'row' }}>
            {/* <Icons name='edit' size={20} style={{ marginRight: 10 }} /> */}
            <Icons name='delete' size={20} />
          </View>
        </View>
        <View style={styles.ContentBox}>
          <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Steel</Text>
          </View>
          <TextInput style={styles.InputStyle} />
          <TextInput style={styles.InputStyle} />
          <View style={{ flexDirection: 'row' }}>
            {/* <Icons name='edit' size={20} style={{ marginRight: 10 }} /> */}
            <Icons name='delete' size={20} />
          </View>
        </View>
        <View style={styles.ContentBox}>
          <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Sand</Text>
          </View>
          <TextInput style={styles.InputStyle} />
          <TextInput style={styles.InputStyle} />
          <View style={{ flexDirection: 'row' }}>
            {/* <Icons name='edit' size={20} style={{ marginRight: 10 }} /> */}
            <Icons name='delete' size={20} />
          </View>
        </View>

        <TouchableOpacity style={styles.ContentButton}
          onPress={() => refRBSheet.current.open()}
        >
          <Text style={styles.ContentTitle}> + Add More</Text>
        </TouchableOpacity>


      </ScrollView>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}
      >
        <AddNewMaterial />
      </RBSheet>
    </View>
  )
}

export default MaterialConsumMain;

const styles = StyleSheet.create({
  Topheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  Title: {
    fontFamily: Fonts.Poppins500,
    color: Colors.CommonColor,
    fontSize: 15
  },
  ContentTitle: {
    fontFamily: Fonts.Lato400,
    color: Colors.CommonColor,
    fontSize: 12,
  },
  ContentBack: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    paddingVertical: 10,
    width: '25%',
    borderRadius: 5,
  },
  ContentButton: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 15,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    flex: 1,
    elevation: 5,
    paddingVertical: 10,
    width: '30%',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10, marginHorizontal: 15
  },
  ContentBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  InputStyle: {
    width: '15%',
    paddingHorizontal: 5,
    paddingVertical: 4,
    backgroundColor: '#F7F8F9',
    borderColor: Colors.MainColor,
    borderWidth: 1,
    elevation: 2,
    borderRadius:5
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  buttonText: {
    fontFamily: Fonts.Inter600,
    color: Colors.CommonColor,
    fontSize: 17,
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
    marginTop: 20,
    marginBottom: 20
  },
  sheetContainer: {
    container: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
        // paddingBottom: 40,
      
      height: 'auto',
    },
  },
});
