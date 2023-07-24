import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../../assets/colors'
import Fonts from '../../../assets/fonts'
import { useNavigation } from '@react-navigation/native'

const AvailBookSheet = ({refAvilBookSheet}) => {
  const navigation= useNavigation()
  return (
    <View>
    <View style={{ backgroundColor: Colors.MainColor, height: 40, width: '100%', justifyContent: 'center', paddingHorizontal: 40 }}>
      <Text style={styles.BottomSheetText}>Choose Action</Text>

    </View>
    <View style={styles.SheetBoxContainer}>

      <TouchableOpacity style={styles.SheetBox}
        onPress={() => navigation.navigate("BookedSecond")
        }
      >
        <Text style={styles.SheetBoxText}>Book</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.SheetBox}
    
      onPress={()=>refAvilBookSheet.current.close()}
      >
        <Text style={styles.SheetBoxText}>Avail</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default AvailBookSheet

const styles = StyleSheet.create({
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
})