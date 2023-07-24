import { StyleSheet, Text, View, Dimensions, TextInput, Modal, TouchableOpacity,Platform} from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../../assets/colors'
import Fonts from '../../../../assets/fonts'
import Calender from 'react-native-vector-icons/AntDesign'
import moment from 'moment'
import CalendeTimermodal from '../../Common/CalendeTimermodal'

const NewTaskDetails = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [isStartdate, setStartDate] = useState('')
    const [isEnddate, setEndDate] = useState('')



    const showDatePicker = () => {
        setDatePickerVisibility(true);
        // setEndDatePickerVisibility(true)
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        setEndDatePickerVisibility(false)
    };

    const handleConfirm = (date) => {
        if (!isStartdate) {

            setStartDate(date)
        } else {

            setEndDate(date)
        }
        hideDatePicker();
        //   refollowRBSheet.current.close()
    };

    console.log(isStartdate, "start")
    console.log(isEnddate, "enddate")

    return (
        <View>
            <View style={styles.TopHeader}>

                <Text style={{ fontSize: 17, fontFamily: Fonts.Poppins600, color: Colors.CommonColor }}>New Task Details</Text>
            </View>

            <Text style={styles.TopHeading}>Task Name</Text>
            <View style={styles.Inputcontainer}>
                <TextInput
                    placeholder='Enter your Task'
                    placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                    // value={input.busAddress}
                    // onChangeText={(text) => handleInputChange('busAddress', text)}
                    style={styles.InputStyle}
                />
            </View>
            <Text style={styles.TopHeading}>Start Date</Text>
            <TouchableOpacity style={styles.CalenderBox}
                onPress={(el) =>

                    showDatePicker()
                }

            >
                <Text style={styles.Date}>{isStartdate ? moment(isStartdate).format('MMM DD,YYYY') : "Select Date"}</Text>
                <Calender name='calendar' style={styles.IconsWrap} />
            </TouchableOpacity>
            <Text style={styles.TopHeading}>End Date</Text>
            <TouchableOpacity style={styles.CalenderBox}
                onPress={(el) =>
                    showDatePicker()

                }
            >
                <Text style={styles.Date}>{isEnddate ? moment(isEnddate).format('MMM DD,YYYY') : "Enter Deadline"}</Text>
                <Calender name='calendar' style={styles.IconsWrap} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.buttonText}>Save Task</Text>
            </TouchableOpacity>
            <CalendeTimermodal isDatePickerVisible={isDatePickerVisible} isEndDatePickerVisible={isEndDatePickerVisible} handleConfirm={handleConfirm} hideDatePicker={hideDatePicker} />
        </View>
    )
}

export default NewTaskDetails
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    TopHeader: {
        width: width,
        height: "15%",
        backgroundColor: Colors.MainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopHeading: {
        fontSize: 15,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 20,
        marginHorizontal: 15

    },
    Inputcontainer: {
        backgroundColor: '#F7F8F9',
        elevation: 3,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 10,
        paddingVertical:  Platform.OS === "ios"? 14:5,
        marginHorizontal: 15,
        borderColor: Colors.MainColor,
        borderWidth: 1

    },
    InputStyle: {
        backgroundColor: '#F7F8F9',
        paddingHorizontal: 0,
        width: '93%',
        marginLeft: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    CalenderBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 7,
        width: '93%',
        borderColor: Colors.MainColor,
        borderWidth: 1,
        justifyContent: 'space-between',
        borderRadius: 5,
        marginHorizontal: 15,
        elevation: 3,

        backgroundColor: '#F7F8F9'

    },
    Date: {
        color: 'rgba(0, 0, 0, 0.25)',
        fontSize: 15,
        fontFamily: Fonts.Arial400
    },
    IconsWrap: {
        fontSize: 20,
        color: Colors.CommonColor
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
        width: '50%',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
    },

})