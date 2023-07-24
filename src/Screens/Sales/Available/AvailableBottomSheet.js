import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../../assets/colors'
import Fonts from '../../../../assets/fonts'
import { useNavigation } from '@react-navigation/native';
import DelIcon from 'react-native-vector-icons/AntDesign'
import EditIcon from 'react-native-vector-icons/Entypo'

const AvailableBottomSheet = ({ refavailSheet, flatdata }) => {
    const navigation = useNavigation()

    return (
        <View>
            <View style={{ backgroundColor: Colors.MainColor, height: 60, width: '100%', justifyContent: 'center', justifyContent: 'center', paddingHorizontal: 40 }}>
                <Text style={styles.BottomSheetText}>{flatdata.Text}</Text>

            </View>
            <Text style={styles.ActionText}>Choose Action</Text>
            <View style={styles.SheetBoxContainer}>
                <TouchableOpacity style={styles.SheetBox}
                    onPress={() => 
                
                        navigation.navigate('BookedSecond')
                    
                    }
                >
                    <Text style={styles.SheetBoxText}>Book</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SheetBox}
                onPress={()=>navigation.navigate('Reservedmain')}
                >
                    <Text style={styles.SheetBoxText}>Reserve</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SheetBox}>
                    <Text style={styles.SheetBoxText}>Add Leads</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ActionWrap}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <DelIcon name='delete' style={styles.Del} />
                    <Text style={{ fontFamily: Fonts.OpenSans400, color: Colors.CommonColor }}>Delete</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <EditIcon name='edit' style={[styles.Del, { fontSize: 15 }]} />
                    <Text style={{ fontFamily: Fonts.OpenSans400, color: Colors.CommonColor }}>Edit</Text>
                </View>
            </View>
        </View>
    )
}

export default AvailableBottomSheet

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
        fontSize: 18,
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
        marginTop: 20
    },
    SheetBoxText: {
        fontSize: 15,
        color: Colors.CommonColor,
        fontFamily: Fonts.Poppins500
    },
    ActionText: {
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans500,
        fontSize: 15,
        borderBottomColor: "#D6D6D6",
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    ActionWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 30,
        // marginBottom:10
    },
    Del: {
        color: Colors.CommonColor,
        fontSize: 20,
        marginRight: 5
    }
})