import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../../../assets/fonts';
import Colors from '../../../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Textarea from 'react-native-textarea';

// import { TouchableOpacity } from '@gorhom/bottom-sheet';
const CommonSheet = ({ showDatePicker,showTimePicker,Data,Button }) => {
    const [input, setInput] = useState({
        fullName: '',
        phnNum: '',
        additionalNum: '',
        email: '',

    });
    console.log(Data,"sheet")
    const handleInputChange = (field, value) => {
        console.log(value, field);
        setInput(prevInput => ({ ...prevInput, [field]: value }));
    };
    const [textareatext, setTextareaText] = useState('');

    const handleTextareaChange = (value) => {
        setTextareaText(value)
    };

    return (
        <View>
              <View style={styles.BottomSheetHeader}>

<Text style={styles.Title}>{Button    }</Text>
</View>
                <View style={styles.filed_container}>
                    <View style={{ width: '30%' }}>

                        <Text style={styles.FieldHeading}>Select Date</Text>
                    </View>
                    <View style={styles.Inputcontainer}>
                        <TextInput
                            placeholder="DD/MM/YYYY"
                            autoCapitalize="characters"
                            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                            value={input.fullName}
                            // onChangeText={text => handleInputChange('fullName', text)}
                            style={styles.InputStyle}
                        />
                        <TouchableOpacity
                            onPress={() => showDatePicker()}
                        >
                            <Icon name="calendar-month-outline" size={30} color={'#000000'} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.filed_container}>
                    <View style={{ width: '30%' }}>

                        <Text style={styles.FieldHeading}>Select Time</Text>
                    </View>
                    <View style={styles.Inputcontainer}>
                        <TextInput
                            placeholder="DD/MM/YYYY"
                            autoCapitalize="characters"
                            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                            value={input.fullName}
                            // onChangeText={text => handleInputChange('fullName', text)}
                            style={styles.InputStyle}
                        />
                        <TouchableOpacity
                            onPress={() => showTimePicker()}
                        >
                            <Icon name="clock-outline" size={30} color={'#000000'} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{ marginHorizontal: 20 }}>

<Text style={styles.FieldHeading}>Remarks</Text>
<Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText={handleTextareaChange}
    defaultValue={textareatext}
    maxLength={120}
    placeholder={'Enter your remarks here'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
/>
</View>

<TouchableOpacity style={styles.LoginButton}>
<Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Save</Text>
</TouchableOpacity>
        </View>
    )
}

export default CommonSheet
const { width, height } = Dimensions.get('screen')
const fontSize = height > 900 ? 15 : height >= 800 ? 12 : 10;
const styles = StyleSheet.create({
    BottomSheetHeader: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingVertical: 15,
        backgroundColor:Colors.MainColor
    },
    Title: {
        fontFamily: Fonts.Poppins500,
        color: Colors.CommonColor,
        fontSize: fontSize
    },
    filed_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    FieldHeading: {
        fontSize: fontSize,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 20,
    },
    Inputcontainer: {
        backgroundColor: '#fff',
        width: '70%',
        elevation: 3,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 20,
        paddingVertical: 5,
    },
    InputStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '80%',
        marginLeft: 10,
        // backgroundColor:'red'
    },

    textareaContainer: {
        height: height / 7,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D6D6D6', marginVertical: 20
    },
    textarea: {
        textAlignVertical: 'top',
        height: height / 8,
        fontSize: 14,
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans400

    },
    LoginButton: {
        backgroundColor: Colors.MainColor,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        borderRadius: 5,
        elevation: 3,
        marginBottom: 20
    },

})