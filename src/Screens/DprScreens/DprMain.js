import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import CommonHeards from '../Common/CommonHeards'
import Calender from 'react-native-vector-icons/AntDesign'
import Colors from '../../../assets/colors'
import Fonts from '../../../assets/fonts'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import CalendeTimermodal from '../Common/CalendeTimermodal'

const DprMain = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isStartdate, setStartDate] = useState('')



    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setStartDate(date)
        hideDatePicker();
        //   refollowRBSheet.current.close()
    };
    const navigation = useNavigation()
    //   console.log(selectedDate,"date choose")
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <CommonHeards title={"DPR"} />
            <View style={styles.TopWrapper}>
                <TouchableOpacity style={styles.CalenderBox}
                    onPress={() => showDatePicker()}
                >
                    <Text style={styles.Date}>{isStartdate ? moment(isStartdate).format('MMM DD,YYYY') : "Select Date"}</Text>
                    <Calender name='calendar' style={styles.IconsWrap} />
                </TouchableOpacity>
                <View style={styles.DropdownBox}>
                    <Text style={styles.Date}>Select Project</Text>
                    <Calender name='caretdown' style={[styles.IconsWrap, { fontSize: 15 }]} />
                </View>
            </View>
            <ImageBackground source={require('../../../assets/images/Bulding.png')} style={{ height: height, width: '100%' }} resizeMode='contain' >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Taskmanagermain')}
                            style={[styles.Cards,  styles.shadowProp,{
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 20
                            }]}>
                            <Image source={require('../../../assets/images/Task.png')} style={{}} />
                        </TouchableOpacity>
                        <Text style={styles.cardText}>Tasks</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Materialconsume')}
                            style={[styles.Cards, styles.shadowProp,{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }]}>
                            <Image source={require('../../../assets/images/Mate1.png')} style={{}} />
                        </TouchableOpacity>
                        <Text style={styles.cardText}>Material</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Labourconsumemain')}
                            style={[styles.Cards, styles.shadowProp,{ borderTopLeftRadius: 20, borderBottomRightRadius: 20 }]}>
                            <Image source={require('../../../assets/images/Lav1.png')} style={{}} />
                        </TouchableOpacity>
                        <Text style={styles.cardText}>Labour</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Machinaryconmain')}

                            style={[styles.Cards,styles.shadowProp, {
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 20
                            }]}>
                            <Image source={require('../../../assets/images/Mac1.png')} style={{}} />
                        </TouchableOpacity>
                        <Text style={styles.cardText}>Machinery</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.buttonText}>Submit DPR</Text>
                </TouchableOpacity>
            </View>
            <CalendeTimermodal isDatePickerVisible={isDatePickerVisible} handleConfirm={handleConfirm} hideDatePicker={hideDatePicker} />

        </View>
    )
}

export default DprMain

const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height > 800 ? 13 : 12
const styles = StyleSheet.create({
    TopWrapper: {
        width: width,
        marginVertical: 20,
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 30,
        borderBottomColor: Colors.CommonColor,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    CalenderBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '40%',
        borderColor: Colors.CommonColor,
        backgroundColor: Colors.MainColor,
        elevation: 5,
        justifyContent: 'space-between',
        borderRadius: 6
    },
    Date: {
        color: Colors.CommonColor,
        fontSize: 15,
        fontFamily: Fonts.Arial400
    },
    IconsWrap: {
        fontSize: 25,
        color: Colors.CommonColor
    },
    DropdownBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '45%',
        backgroundColor: Colors.MainColor,
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 5
    },
    CardsContainer: {
        marginTop: 20,
        borderBottomColor: Colors.CommonColor,
    },
    CardsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: width,
        alignItems: 'center',
        marginHorizontal: 20
    },
    Cards: {
        width: width / 2.6,
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: Colors.MainColor,

        elevation: 5,

    },

    InnerCard: {
        width: '40%',
        backgroundColor: Colors.MainColor,
        height: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    CardImage: {
        width: '45%',
        height: '80%',
        position: 'absolute',
        zIndex: 1
    },

    cardText: {
        fontSize: fontSize,
        color: Colors.CommonColor,
        fontFamily: Fonts.Poppins600,
        textAlign: 'center',
        marginTop: 10
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 40,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: '30%'
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    shadowProp: {
        shadowColor: 'rgba(0,0,0.25)',
        shadowOffset: { width: -2, height: 3},
        shadowOpacity: 0.5,
        // shadowRadius: 3,
      },
})
