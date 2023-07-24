import { StyleSheet, Text, View,Dimensions,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import Colors from '../../../../assets/colors'
import Fonts from '../../../../assets/fonts'

const AddNewMachinary = () => {
    return (
    <View>
    <View style={styles.TopHeader}>
   
<Text style={{ fontSize: 17, fontFamily: Fonts.Poppins600, color: Colors.CommonColor }}>Add New Machinery</Text>
</View>
<View style={styles.TopSubheader}>
        <Text style={styles.Title}>Machine Name</Text>
        <Text style={styles.Title}>hours</Text>
        <Text style={styles.Title}>Rates/Hr</Text>
       
      </View>
      <View style={styles.ContentBox}>
          {/* <View style={styles.ContentBack}>
            <Text style={styles.ContentTitle}>Cement</Text>
          </View> */}
          <TextInput style={[styles.InputStyle]} />

          <TextInput style={[styles.InputStyle,{width:'15%'}]} />
          <TextInput
          keyboardType='number-pad'
          style={[styles.InputStyle,{width:'15%'}]} />
        </View>
        {/* <TouchableOpacity style={styles.ContentButton}
        // onPress={()=> refRBSheet.current.open()}
        >
          <Text style={styles.ContentTitle}>Add More</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.buttonText}>Save Machinery</Text>
                </TouchableOpacity>
    </View>
  )
}

export default AddNewMachinary
const{width,height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    TopHeader: {
        width: width,
        height: "15%",
        backgroundColor: Colors.MainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopSubheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
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
      ContentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 5,
        marginTop: 20,
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 15
      },
      InputStyle: {
        width: '15%',
        paddingHorizontal: 5,
        paddingVertical: 4,
        backgroundColor: '#fff',
        elevation: 5
      },
      ContentBack: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        paddingVertical: 10,
        width: '25%',
        borderRadius: 5,
      },
      InputStyle: {
        width: '30%',
        paddingHorizontal: 5,
        paddingVertical: 4,
        backgroundColor: '#F7F8F9',
        borderColor: Colors.MainColor,
        borderWidth: 1,
        elevation: 2,
    borderRadius:5

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
        width:'50%',
        alignSelf:'center',
        marginTop:20,
        marginBottom:20
    },
    ContentButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        alignItems: 'center',
        // justifyContent: 'flex-end',
        alignSelf:'flex-end',
        flex: 1,
        elevation: 5,
        paddingVertical: 20,
        // lineHeight:30,
        width: '30%',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal:15
      },
      ContentTitle: {
        fontFamily: Fonts.Lato400,
        color: Colors.CommonColor,
        fontSize: 12
      },
})