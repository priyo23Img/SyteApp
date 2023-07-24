import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useRef, useContext } from 'react';
import Fonts from '../../../../assets/fonts';
import Colors from '../../../../assets/colors';
import Textarea from 'react-native-textarea';


const DroppedSheet = ({ title }) => {
    const [leadType, setleadType] = useState(" ")

    const HandleaLeadtype = (option) => {
        if (leadType === option) {
            setleadType(null)
        } else {
            setleadType(option);
        }

    };
    const [textareatext, setTextareaText] = useState('');

    const handleTextareaChange = (value) => {
        setTextareaText(value)
    };

    return (
        <View>
            <View style={styles.BottomSheetHeader}>

                <Text style={styles.Title}>{title}</Text>
            </View>
            <View>
                <View>


                    <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20, marginHorizontal: 20 }}>

                        <TouchableOpacity
                            style={styles.contentWrap}
                            onPress={() => HandleaLeadtype('  Other Location')}
                        >
                            <TouchableOpacity
                                style={[styles.EmptyView, leadType === '  Other Location' && styles.SelectedView]}
                            />
                            <Text style={styles.OptionText}>
                                Other Location
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.contentWrap}
                            onPress={() => HandleaLeadtype(' Not Interested')}
                        >
                            <TouchableOpacity
                                style={[styles.EmptyView, leadType === ' Not Interested' && styles.SelectedView]}
                            />
                            <Text style={{
                                fontSize: 15,
                                color: Colors.CommonColor,
                                fontFamily: Fonts.OpenSans400
                            }}
                            >
                                Not Interested
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.contentWrap}
                            onPress={() => HandleaLeadtype('Other Reason')}
                        >
                            <TouchableOpacity
                                style={[styles.EmptyView, leadType === 'Other Reason' && styles.SelectedView]}
                            />
                            <Text
                                style={styles.OptionText}
                            >
                                Other Reason
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.contentWrap}
                            onPress={() => HandleaLeadtype('Out of Budget   ')}
                        >
                            <TouchableOpacity
                                style={[styles.EmptyView, leadType === 'Out of Budget' && styles.SelectedView]}
                            />
                            <Text
                                style={styles.OptionText}
                            >
                                Out of Budget
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.contentWrap}
                            onPress={() => HandleaLeadtype('Other Interest')}
                        >
                            <TouchableOpacity
                                style={[styles.EmptyView, leadType === 'Other Interest' && styles.SelectedView]}
                            />
                            <Text
                                style={styles.OptionText}
                            >
                                Other Interest
                            </Text>
                        </TouchableOpacity>





                    </View>

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

export default DroppedSheet
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
    TopHeading: {
        fontSize: fontSize,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 15
    },
    contentWrap: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 20,
        width: '30%',

    },
    EmptyView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginRight: 10,
    },
    Filledview: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.AvailableFlat
    },
    SelectedView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        color: Colors.AvailableFlat,
        backgroundColor: Colors.AvailableFlat,
        marginRight: 10,
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
    FieldHeading: {
        fontSize: fontSize,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor,
        marginTop: 20,
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
    OptionText: {
        fontSize: fontSize,
        color: Colors.CommonColor,
        fontFamily: Fonts.OpenSans400
    }
})