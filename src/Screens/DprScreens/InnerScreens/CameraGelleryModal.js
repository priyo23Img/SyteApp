import { StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../../../assets/colors'
import Icons from 'react-native-vector-icons/MaterialIcons'
import EditIcon from 'react-native-vector-icons/Entypo'

import Fonts from '../../../../assets/fonts'
import ImagePicker from 'react-native-image-crop-picker';
const CameraGelleryModal = ({refRBSheet}) => {


    const HandleCamera=()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }

    const handlegallery =()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
  
  return (
    <View style={styles.Modalwrap}>
        <View style={styles.ModalHead}>
                    <Text style={styles.HeaderText}>Add Media</Text>
               
                </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginBottom:10}}>
            <TouchableOpacity style={[styles.IconBack,{marginRight:30}]} 
            onPress={()=>{
                HandleCamera()
                // setModalVisible(!modalVisible) || setCamModalVisible(!cammodalVisible)
            }}
            >

            <Icons name='photo-camera' style={styles.Icon} />
            <Text style={styles.Icontext}>Camera </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBack}
            onPress={()=>{handlegallery()
                refRBSheet.current.close()
            }} 
            >
            <Icons name='photo-size-select-actual'  style={styles.Icon} />
            <Text style={styles.Icontext}>Upload</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default CameraGelleryModal
const {width,height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    Topheader:{
         backgroundColor:Colors.MainColor,
        height:50,
        width:'100%',
        justifyContent:'center',
        paddingHorizontal:20,
        // borderRadius:10
        borderTopLeftRadius:10

        // paddingVertical:10
    },
    Modalwrap:{
        backgroundColor:'#fff',
        width:width,
        paddingBottom:20,
        height:'auto',
        // borderRadius:10
        borderTopRightRadius:20,

        borderTopLeftRadius:20
    },
    IconBack:{
        backgroundColor:Colors.MainColor,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        elevation:5,
        borderRadius:5
    },
    ModalHead: {
        backgroundColor: Colors.MainColor,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginBottom:30


    },
    HeaderText: {
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans600,
        fontSize: 17,
    },
    Icon:{
        fontSize:35,
        color:Colors.CommonColor
    },
    HeadText:{
        color:Colors.CommonColor,
        fontFamily:Fonts.Poppins600,
        fontSize:18
    },
    SubText:{
        color:Colors.CommonColor,
        fontFamily:Fonts.Poppins400,
        fontSize:15,paddingHorizontal:20,
        paddingVertical:15
    },
    Icontext:{
        fontFamily:Fonts.Poppins500,
        color:Colors.CommonColor
    }
})