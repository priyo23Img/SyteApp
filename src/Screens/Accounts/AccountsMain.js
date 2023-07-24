import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CommonHeards from '../Common/CommonHeards'
import Icons from 'react-native-vector-icons/AntDesign'
import Fonts from '../../../assets/fonts'
import VenderMain from './VenderMain'
import TranscationsMain from './TranscationsMain'
import ItemsMain from './ItemsMain'
import Colors from '../../../assets/colors'
const AccountsMain = () => {
    const [selectedButton, setSelectedButton] = useState('Project');
    const navigation = useNavigation()
    const handleButtonPress = (buttonName) => {
        if (selectedButton === buttonName) {
            setSelectedButton(null)
        } else {
            setSelectedButton(buttonName);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <CommonHeards title={"Accounts"} />
            <View style={styles.TopboxcontainerWrap}>
                <View style={styles.Topboxcontainer}>
                    <Icons name='arrowdown' style={styles.Iconsstyle} />
                    <View>
                        <Text style={{ textAlign: 'center', fontFamily: Fonts.Poppins600, color: '#50C878', fontSize: 15 }}> ₹ 20,000</Text>
                        <Text style={styles.Textstyle}>Payment Received</Text>
                    </View>
                </View>
                <View style={styles.Topboxcontainer}>
                    <Icons name='arrowup' style={[styles.Iconsstyle, { color: '#D21F3C' }]} />
                    <View>
                        <Text style={{ textAlign: 'center', fontFamily: Fonts.Poppins600, color: '#D21F3C', fontSize: 15 }}> ₹ 20,000</Text>
                        <Text style={[styles.Textstyle, { color: '#D21F3C' }]}>Payment Given</Text>
                    </View>
                </View>
            </View>

            <View style={styles.ProfileBottomButton}>
                <TouchableOpacity
                    style={[
                        styles.ButtonWrap1,
                        selectedButton === 'Vendor' && styles.ButtonWrap,
                    ]}
                    onPress={() => handleButtonPress('Vendor')}
                >
                    <Text style={styles.ButtonText}>Vendor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.ButtonWrap1,
                        selectedButton === 'Transactions' && styles.ButtonWrap,
                    ]}
                    onPress={() => handleButtonPress('Transactions')}
                >
                    <Text style={styles.ButtonText}>Transactions</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.ButtonWrap1,
                        selectedButton === 'items' && styles.ButtonWrap,
                    ]}
                    onPress={() => handleButtonPress('items')}
                >
                    <Text style={styles.ButtonText}>items</Text>
                </TouchableOpacity>
            </View>
           
            {/* height:height>900?height/2:height/1.7,paddingBottom:20 */}
            <ScrollView >
                {selectedButton === "Vendor" ? <VenderMain /> : null}
                {selectedButton === "Transactions" ? <TranscationsMain /> : null}
                {selectedButton === "items" ? <ItemsMain /> : null}
            </ScrollView>
           
        </View>
    )
}

export default AccountsMain

const styles = StyleSheet.create({
    TopboxcontainerWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 20
    },
    Topboxcontainer: {
        paddingHorizontal: 15,
        alignItems: 'center',
        width: '47%',
        borderRadius: 10,
        // justifyContent:'center',
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: '#fff',
        elevation: 3,
        flexDirection: 'row',
    },
    Iconsstyle: {
        color: '#50C878',
        fontWeight: 600,
        fontSize: 20,
    },
    Textstyle: {
        fontFamily: Fonts.OpenSans400,
        fontSize: 10,
        color: '#50C878',

    },
    ProfileBottomButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 5,
        marginBottom: 15
    },
    ButtonWrap: {
        backgroundColor: Colors.MainColor,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: Colors.CommonColor
    },
    ButtonWrap1: {
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: Colors.CommonColor
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
    sheetContainer: {
        container: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingBottom: 20,
            height: 'auto',
        },
    },

})