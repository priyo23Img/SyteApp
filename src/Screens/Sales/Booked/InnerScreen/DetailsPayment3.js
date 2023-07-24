import { StyleSheet, Text, View,TextInput,TouchableOpacity,Dimensions, } from 'react-native'
import React,{useState} from 'react'
import CommonHeards from '../../../Common/CommonHeards'
import Fonts from '../../../../../assets/fonts'
import Colors from '../../../../../assets/colors'
import Rupee from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const DetailsPayment3 = () => {
  const navigation = useNavigation()
  const [input, setInput] = useState({
    agreementVal: '',
    DocumentVal: '',
   
});
const handleInputChange = (field, value) => {
    setInput((prevInput) => ({ ...prevInput, [field]: value }));
}
  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
     <CommonHeards title={"Detailed Payment"} />
            <View style={{borderBottomColor:'#D6D6D6',borderBottomWidth:1}}>

            <Text style={styles.TotalAmt}>Total Amount :  ₹XXXXXXXX</Text>
            </View>
            <View style={styles.Topheader}>
                <Text style={styles.Title}>Heads</Text>
                <Text style={[styles.Title,{marginRight:30}]}>Amount</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 25,marginTop:20,marginBottom:30 }}>
                <Text style={styles.Textsty}>Agreement Value</Text>
                <View style={styles.Inputcontainer}>
                    <TextInput
                        value={input.agreementVal}
                        onChangeText={(text) => handleInputChange('agreementVal', text)}
                        style={styles.InputStyle}
                    />
                    <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />
       
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 25,marginBottom:10 }}>
                <Text style={styles.Textsty}>Documentation Charges</Text>
                <View style={styles.Inputcontainer}>
                    <TextInput
                        value={input.DocumentVal}
                        onChangeText={(text) => handleInputChange('DocumentVal', text)}
                        style={styles.InputStyle}
                    />
                    <Rupee name='rupee' style={{ color: 'black', fontSize: 20, marginLeft: 5 }} />
       
                </View>
            </View>
            <TouchableOpacity style={styles.Button}
      onPress={()=>
      navigation.navigate('Finalpayment')}
      >
        <Text style={styles.ButtonText}>Save & Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailsPayment3
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
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor:Colors.MainColor
},
Title: {
    fontFamily: Fonts.Poppins500,
    color: Colors.CommonColor,
    fontSize: fontSize
},
Inputcontainer: {
  // backgroundColor: '#fff',
  elevation: 3,
  // marginTop: 15,
  flexDirection: 'row',
  width: '50%',
  alignItems: 'center',
  paddingHorizontal: 10,
  borderColor:Colors.MainColor,
  paddingVertical: Platform.OS==="ios"?10:0,
  borderWidth:1,
  borderRadius:6,
  backgroundColor:'rgba(247, 248, 249, 1)',


  // paddingVertical: 5
},
InputStyle: {
  // backgroundColor: '#fff',
  paddingHorizontal: 0,
  width: '90%',
  // marginLeft: 20
},
Button:{
  backgroundColor:Colors.MainColor,
  paddingHorizontal:35,
  borderRadius:5,
  paddingVertical:15,
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  marginVertical:20,
  position:'absolute',
  bottom:0
},
ButtonText:{
  color:Colors.CommonColor,
  fontSize:15,
  fontFamily:Fonts.Poppins600
},
Textsty:{ color: Colors.CommonColor, fontFamily: Fonts.OpenSans500, fontSize: fontSize,backgroundColor:Colors.MainColor,paddingHorizontal:10,paddingVertical:10,borderRadius:6}

})