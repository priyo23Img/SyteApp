import { StyleSheet, Text, ScrollView, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../../assets/fonts'
import Colors from '../../../assets/colors'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    name: 'Kiran D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Get'
  },
  {
    name: 'Sagar B',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Give'
  }, {
    name: 'Akash B',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Get'
  }, {
    name: 'Dev D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Give'
  },{
    name: 'Dev D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Give'
  },{
    name: 'Dev D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Give'
  }, {
    name: 'Kiran D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Get'
  },{
    name: 'Dev D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Give'
  }, {
    name: 'Kiran D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Get'
  },{
    name: 'Dev D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Give'
  },{
    name: 'Dev D',
    date: '03 MAR 2023',
    payment: '₹ 20,000',
    desc: 'You’ll Give'
  },
]

const VenderMain = () => {
  const navigation = useNavigation()
  return (
    <View style={{ marginBottom: height > 900 ? 20 : 20 }}>

      <TouchableOpacity style={styles.VendorButton}
      onPress={()=>navigation.navigate('Addvender')}
      >
        <Text style={{color:Colors.CommonColor}}>+ AddVendor</Text>
      </TouchableOpacity>

      {
        data.map((el, index) => {
          const textColor = el.desc === 'You’ll Give' ? Colors.BookedFlat : Colors.AvailableFlat;
          return (
            <>
              <View style={styles.Container} key={index}>
                <View>
                  <Text style={styles.ContainerText}>{el.name}</Text>
                  <Text style={styles.ContainersubText}>{el.date}</Text>
                </View>
                <View>
                  <Text style={[styles.ContainersubText2, { color: textColor, fontFamily: Fonts.Poppins500 }]}>{el.payment}</Text>
                  <Text style={[styles.ContainersubText2, { color: textColor }]}>{el.desc}</Text>
                </View>
              </View>
            </>
          )
        })
      }
       <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
            <TouchableOpacity
                    style={styles.UnderButtonWrap}>
                    <Text style={[styles.ButtonText,{color:'#fff'}]}>income</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.UnderButtonWrap,{backgroundColor:Colors.BookedFlat}] }>
                    <Text style={[styles.ButtonText,{color:'#fff'}]}>Expenses</Text>
                </TouchableOpacity>
            </View>

    </View>
  )
}

export default VenderMain
const { height, width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 15,
    width: '93%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 3,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center'
  },
  ContainerText: {
    fontFamily: Fonts.OpenSans600,
    color: Colors.CommonColor,
    fontSize: height>900? 15:12
  },
  ContainersubText: {
    fontFamily: Fonts.OpenSans400,
    color: Colors.CommonColor,
    fontSize: 12,
    lineHeight: 25
  },
  ContainersubText2: {
    fontFamily: Fonts.OpenSans400,
    fontSize: 12,
    lineHeight: 18,
    color: 'rgba(80, 200, 120, 1)',
    // width:'50%',
    // alignSelf:'flex-end',
    alignItems: 'center'
  },
  VendorButton:{
    paddingHorizontal:10,
    paddingVertical:5,
    alignItems:'center',
    backgroundColor:"rgba(255, 223, 22, 0.1)",
    width:'30%',
    alignSelf:'flex-end',
    marginHorizontal:15,
    marginBottom:15,
    borderRadius:10,
    borderWidth:.5,
    borderColor:'#D6D6D6'
    
  },
  UnderButtonWrap: {
    backgroundColor: Colors.AvailableFlat,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: Colors.CommonColor,
    width:'40%',
    alignItems:'center',
    marginBottom:20
},
ButtonText: {
    color: "black",
    fontFamily: Fonts.Poppins500,
    fontSize: 12
},
})