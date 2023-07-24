import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,Modal} from 'react-native'
import React,{useState} from 'react'
import CommonHeards from '../../../Common/CommonHeards'
import Colors from '../../../../../assets/colors'
import Fonts from '../../../../../assets/fonts'
import Rupee from 'react-native-vector-icons/FontAwesome'
import BookingNotification from './BookingNotification'
import { useNavigation } from '@react-navigation/native'


const  data = [
  {
  name:'GST',
  amount:'xxxx'
},
{
  name:'Stamp Duty',
  amount:'xxxx'
},  {
  name:'Registration Charges',
  amount:'xxxx'
},  {
  name:'Local Charges',
  amount:'xxxx'
},  {
  name:'Maintenance Charges',
  amount:'xxxx'
},  {
  name:'MSEB Charges',
  amount:'xxxx'
},  {
  name:'Agreement Charges',
  amount:'xxxx'
},
{
  name:'Documentation  Charges',
  amount:'xxxx'
},

]


const FinalPaymentScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  return (
    <View>
      <CommonHeards title={"Total Payment"} />
<View style={styles.Topheader}>
                <Text style={styles.Title}>User Name</Text>
                <Text style={styles.Title}>project Name</Text>
            </View>
            <View style={[styles.Topheader,{backgroundColor:'rgba(151, 71, 255, 0.12)',borderBottomColor:'#D6D6D6',borderBottomWidth:2}]}>
        <Text style={styles.Title}>Chapet Area</Text>
        <Text style={styles.Title}>Sqr Mtr</Text>
        <Text style={styles.Title}>Rate</Text>
        <Text style={styles.Title}>Amount</Text>
      </View>
      <View style={[styles.Content,{backgroundColor:'rgba(151, 71, 255, 0.12)',borderBottomColor:'#D6D6D6',borderBottomWidth:2}]}>
                <Text style={styles.Title}>Heads</Text>
                <Text style={styles.Title}>Amount</Text>
            </View>
            <ScrollView style={{height:height/2.2}}>
            {data.map((el,index)=>{
                return(
                  <View key={index}>
                    <View style={[styles.Content,{backgroundColor:'rgba(151, 71, 255, 0.12)',borderBottomColor:'#D6D6D6',borderBottomWidth:2}]}>
                    <Text style={styles.Title}>{el.name}</Text>
                <Text style={styles.Title}>₹ {el.amount}</Text>
                  </View>
            </View>
                )
              })}
            </ScrollView>
             
                    <View style={[styles.Content,{backgroundColor:'rgba(151, 71, 255, 0.12)',borderBottomColor:'#D6D6D6',borderBottomWidth:2}]}>
                <Text style={[styles.Title,{fontFamily:Fonts.Poppins600,fontSize:14}]}>Total Amount</Text>
                <Text style={[styles.Title,{fontFamily:Fonts.Poppins600,fontSize:14}]}>₹ XXXXXXXX</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>

            <TouchableOpacity style={styles.Button}
  onPress={()=>navigation.navigate('Detailspayment1')}
      >
        <Text style={styles.ButtonText}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button}
 onPress={()=>setModalVisible(!modalVisible)}
      >
        <Text style={styles.ButtonText}>Save</Text>
      </TouchableOpacity>
      </View>


            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
        <View style={[styles.modalView]}>

         <BookingNotification setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </View>
        </View>
      </Modal>   
            
    </View>
  )
}

export default FinalPaymentScreen
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 11: 10;
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
    // borderBottomColor: '#D6D6D6',
    // borderBottomWidth: 1,
    // marginBottom: 10
},
Content: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 50,
  paddingVertical: 20,
  // borderBottomColor: '#D6D6D6',
  // borderBottomWidth: 1,
  // marginBottom: 10
},
Title: {
    fontFamily: Fonts.Poppins500,
    color: Colors.CommonColor,
    fontSize: fontSize
},
Button:{
  backgroundColor:Colors.MainColor,
  paddingHorizontal:35,
  borderRadius:5,
  paddingVertical:10,
  justifyContent:'center',
  alignItems:'center',
  marginTop:height > 900 ? 20 : height >= 800 ? 0 : 0
  
},
ButtonText:{
  color:Colors.CommonColor,
  fontSize:15,
  fontFamily:Fonts.Poppins600
},
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  width: '70%',
  height: 'auto',
  marginHorizontal: 20,

},
})