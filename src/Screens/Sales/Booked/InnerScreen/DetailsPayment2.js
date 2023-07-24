import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Dimensions,Platform } from 'react-native'
import React, { useState, useRef } from 'react'
import CommonHeards from '../../../Common/CommonHeards'
import Colors from '../../../../../assets/colors'
import Fonts from '../../../../../assets/fonts'
import Rupee from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsPayment2 = () => {
  const navigation = useNavigation()
  const refRBSheet = useRef()
  const [input, setInput] = useState({
    gst: '',
    stampduty: '',
    regCharges: '',
    legalCharges: '',
    maintanceCharges: '',
    msebCharges: '',
  });
  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({ ...prevInput, [field]: value }));
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <CommonHeards title={"Detailed Payment"} />
      <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1 }}>

        <Text style={styles.TotalAmt}>Total Amount :  ₹XXXXXXXX</Text>
      </View>
      <View style={styles.Topheader}>
        <Text style={styles.Title}>Heads</Text>
        <View style={{ flexDirection: 'row' }}>

          <Text style={[styles.Title, { marginRight: 20 }]}>Amount</Text>
          <Text style={styles.Title}>Action</Text>
        </View>

      </View>
      <ScrollView style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.mainContainer}>
            <Text style={styles.Textsty}>GST</Text>
            <Text style={styles.Textsty}>Stamp Duty</Text>
            <Text style={[styles.Textsty]}>Registration Charges</Text>
            <Text style={styles.Textsty}>Legal Charges</Text>
            <Text style={[styles.Textsty]}>Maintenance Charges</Text>
            <Text style={styles.Textsty}>MSEB Charges</Text>


          </View>
          <View>
            <View style={styles.innercontainer}>

              <View style={[styles.Inputcontainer]}>
                <TextInput
                  value={input.gst}
                  onChangeText={(text) => handleInputChange('gst', text)}
                  style={styles.InputStyle}
                />
                <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

              </View>
              <MaterialCommunityIcons name="trash-can-outline" style={styles.IconSty} />
            </View>


            <View style={styles.innercontainer}>

              <View style={[styles.Inputcontainer]}>
                <TextInput
                  value={input.gst}
                  onChangeText={(text) => handleInputChange('gst', text)}
                  style={styles.InputStyle}
                />
                <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

              </View>
              <MaterialCommunityIcons name="trash-can-outline" style={styles.IconSty} />
            </View>
            <View style={styles.innercontainer}>

              <View style={[styles.Inputcontainer]}>
                <TextInput
                  value={input.gst}
                  onChangeText={(text) => handleInputChange('gst', text)}
                  style={styles.InputStyle}
                />
                <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

              </View>
              <MaterialCommunityIcons name="trash-can-outline" style={styles.IconSty} />
            </View>
            <View style={styles.innercontainer}>

              <View style={[styles.Inputcontainer]}>
                <TextInput
                  value={input.gst}
                  onChangeText={(text) => handleInputChange('gst', text)}
                  style={styles.InputStyle}
                />
                <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

              </View>
              <MaterialCommunityIcons name="trash-can-outline" style={styles.IconSty} />
            </View>
            <View style={styles.innercontainer}>

              <View style={[styles.Inputcontainer]}>
                <TextInput
                  value={input.gst}
                  onChangeText={(text) => handleInputChange('gst', text)}
                  style={styles.InputStyle}
                />
                <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

              </View>
              <MaterialCommunityIcons name="trash-can-outline" style={styles.IconSty} />
            </View>
            <View style={styles.innercontainer}>

              <View style={[styles.Inputcontainer]}>
                <TextInput
                  value={input.gst}
                  onChangeText={(text) => handleInputChange('gst', text)}
                  style={styles.InputStyle}
                />
                <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />

              </View>
              <MaterialCommunityIcons name="trash-can-outline" style={styles.IconSty} />
            </View>
          </View>
        </View>













        <TouchableOpacity style={styles.ContentButton}
          onPress={() => refRBSheet.current.open()}
        >
          <Text style={styles.ContentTitle}>+ Add More</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.Button}
        onPress={() =>
          navigation.navigate('Detailspayment3')}
      >
        <Text style={styles.ButtonText}>Next</Text>
      </TouchableOpacity>



      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        height={300}
        customStyles={{
          draggableIcon: {
            display: 'none',
          },
          container: { borderTopLeftRadius: 30, borderTopRightRadius: 30 },
        }}>
        <View style={styles.rbSheetInner__container}>
          <View style={styles.RBheading__container}>
            <Text style={styles.RBSheet_heading}>Add Payment</Text>
          </View>
          <View style={styles.amounContainer}>
            <Text style={styles.AmountText}>Heads</Text>
            <Text style={styles.AmountText}>Amount</Text>
          </View>
          <View style={styles.RbMain_container}>
            <View style={styles.paymentType__container}>
              <TextInput
                placeholder='Payment Type'
                style={styles.paymenttype_Text}
              />
              <View style={[styles.Inputcontainer, { width: '35%' }]}>
                <TextInput
                  value={input.gst}
                  onChangeText={(text) => handleInputChange('gst', text)}
                  style={styles.InputStyle}
                />
                <Rupee name='rupee' style={{ color: 'black', marginLeft: 5 }} />

              </View>

            </View>


            {/* -----------schedule btn */}
            <View
              style={styles.schedule_btn}
              onTouchEnd={() => refRBSheet.current.close()}>
              <Text style={styles.btnText}>Add Amount</Text>
            </View>
          </View>
        </View>
      </RBSheet>

    </View>
  )
}

export default DetailsPayment2
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 13 : height >= 800 ? 12 : 10;

const styles = StyleSheet.create({
  TotalAmt: {
    color: Colors.AvailableFlat,
    fontFamily: Fonts.OpenSans600,
    fontSize: fontSize,
    marginVertical: 15,
    marginHorizontal: 15
  },
  Topheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: Colors.MainColor
  },
  Title: {
    fontFamily: Fonts.Poppins500,
    color: Colors.CommonColor,
    fontSize: fontSize
  },
  InputStyle: {
    // backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '90%',
    fontSize: 12

    // marginLeft: 20
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 3,
    justifyContent: 'flex-end',
    // marginTop: 15,
    marginRight: 10,
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.MainColor,
    backgroundColor: 'rgba(247, 248, 249, 1)',
    borderRadius: 6,
    paddingVertical:   Platform.OS === "ios"?14: 5


    // paddingVertical: 5
  },
  Button: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 35,
    borderRadius: 5,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20
  },
  ButtonText: {
    color: Colors.CommonColor,
    fontSize: 18,
    fontFamily: Fonts.Poppins600
  },
  ContentButton: {
    backgroundColor: Colors.MainColor,

    alignItems: 'center',
    alignSelf: 'flex-end',
    flex: 1,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '30%',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 15
  },
  ContentTitle: {
    fontFamily: Fonts.Lato400,
    color: Colors.CommonColor,
    fontSize: 15,
  },
  rbSheetInner__container: {
    flex: 1,
    alignItems: 'center',

  },
  RBheading__container: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    backgroundColor: Colors.MainColor,
    height: 60
  },
  RBSheet_heading: { color: Colors.CommonColor, fontSize: 24 },

  amounContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    width: '100%',
  },
  AmountText: {
    fontSize: 12,
    color: Colors.CommonColor,
  },
  RbMain_container: {
    width: '100%',
    paddingVertical: 10,
    // paddingHorizontal: 20,
    flex: 1,
    // height:500
  },
  paymentType__container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 5,
    paddingHorizontal: 10,
    elevation: 3,
    marginVertical: 20
  },
  paymenttype_Text: {
    borderBottomWidth: 1,
    flex: 1 / 2,
    fontSize: 14,
    color: Colors.CommonColor,
    paddingBottom: 0,
    // backgroundColor:'red'
  },
  paymentAmount_Text: {
    borderBottomWidth: 1,
    flex: 1 / 3.5,
    fontSize: 14,
    color: Colors.CommonColor,
    paddingBottom: 0,
  },
  schedule_btn: {
    backgroundColor: Colors.MainColor,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 5,
  },
  btnText: {
    color: Colors.CommonColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textareaContainer: {
    height: height / 7,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D6D6D6', marginVertical: 20
  },
  Textsty: {
    color: Colors.CommonColor,
    fontFamily: Fonts.OpenSans500,
    fontSize: fontSize,
    backgroundColor: Colors.MainColor,
    paddingVertical: 10,
    borderRadius: 6,
    paddingHorizontal: 13,
    marginBottom:50
    // backgroundColor:'red'
  },
  IconSty: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.5)",
    marginLeft: 10
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
     marginBottom: 35
  },
  mainContainer: {
    alignItems: 'flex-start',
    width: '45%',
    marginLeft: 10


  }

})
















