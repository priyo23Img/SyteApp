import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../../assets/fonts'
import Colors from '../../../assets/colors'
import { useNavigation } from '@react-navigation/native'
import Mobilephone from 'react-native-vector-icons/FontAwesome'

const Addvendor = () => {
    const [input, setInput] = useState({
        Fullname: '',
        PhnNo: '',
        address: '',
    });
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionSelect = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };
    const isOptionSelected = (option) => {
        return selectedOptions.includes(option);
    };
    const navigation = useNavigation()
    console.log(selectedOptions, "SELected items")
    return (
        <View>
            <View style={{ borderBottomColor: Colors.CommonColor, borderBottomWidth: 1, paddingVertical: 15,backgroundColor:Colors.MainColor }}>
                <Text style={styles.TopHead}>Vendor Details</Text>
            </View>
            <View style={{ marginHorizontal: 20,marginVertical:20 }}>
                <Text style={styles.TopHeading}>Full Name</Text>
                <View style={styles.Inputcontainer}>
                    <Mobilephone name='user-o' style={{ color: 'grey', fontSize: 25 }} />
                    <TextInput
                        placeholder='Enter your Full Name'
                        placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                        value={input.Fullname}
                        onChangeText={text => setInput({ ...input, Fullname: text })}
                        //   maxLength={10}
                        //   keyboardType='number-pad'
                        style={styles.InputStyle}
                    />
                </View>
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.TopHeading}>Vendor  Number</Text>
                <View style={styles.Inputcontainer}>
                    <Mobilephone name='mobile-phone' style={{ color: 'grey', fontSize: 40 }} />
                    <TextInput
                        placeholder='Enter your Phone Number'
                        placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                        value={input.PhnNo}
                        onChangeText={text => setInput({ ...input, PhnNo: text })}
                        maxLength={10}
                        keyboardType='number-pad'
                        style={styles.InputStyle}
                    />
                </View>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.TopHeading}>Address</Text>
                <View style={styles.Inputcontainer}>
                    <Mobilephone name='address-card-o' style={{ color: 'grey', fontSize: 25 }} />
                    <TextInput
                        placeholder='Enter Vendor Address'
                        placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
                        value={input.address}
                        onChangeText={text => setInput({ ...input, address: text })}
                        //   maxLength={10}
                        //   keyboardType='number-pad'
                        style={styles.InputStyle}
                    />
                </View>
                <Text style={styles.TopHeading}>Material Type</Text>

                <View style={{ justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity
                        style={styles.contentWrap}
                        onPress={() => handleOptionSelect('Cement')}
                    >
                        <TouchableOpacity
                            style={isOptionSelected('Cement') ? styles.SelectedView : styles.EmptyView}
                        />
                        <Text
                            style={{
                                fontSize: 13,
                                color: Colors.CommonColor,
                                fontFamily:Fonts.OpenSans400

                            }}
                        >
                            {isOptionSelected('Cement') ? 'inclusive' : 'Cement'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentWrap} onPress={() => handleOptionSelect('Steel')}>
                        <TouchableOpacity style={isOptionSelected('Steel') ? styles.SelectedView : styles.EmptyView} />
                        <Text style={{
                                fontSize: 13,
                                color: Colors.CommonColor,
                                fontFamily:Fonts.OpenSans400

                        }}>{isOptionSelected('Steel') ? 'inclusive' : 'Steel'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentWrap} onPress={() => handleOptionSelect('Sanitary')}>
                        <TouchableOpacity style={isOptionSelected('Sanitary') ? styles.SelectedView : styles.EmptyView} />
                        <Text style={{
                                fontSize: 13,
                                color: Colors.CommonColor,
                                fontFamily:Fonts.OpenSans400

                        }}>{isOptionSelected('Sanitary') ? 'inclusive' : 'Sanitary'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentWrap} onPress={() => handleOptionSelect('Electric')}>
                        <TouchableOpacity style={isOptionSelected('Electric') ? styles.SelectedView : styles.EmptyView} />
                        <Text style={{
                                fontSize: 13,
                                color: Colors.CommonColor,
                                fontFamily:Fonts.OpenSans400

                        }}>{isOptionSelected('Electric') ? 'inclusive' : 'Electric'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentWrap} onPress={() => handleOptionSelect('Bricks')}>
                        <TouchableOpacity style={isOptionSelected('Bricks') ? styles.SelectedView : styles.EmptyView} />
                        <Text style={{
                                fontSize: 13,
                                color: Colors.CommonColor,
                                fontFamily:Fonts.OpenSans400

                        }}>{isOptionSelected('Bricks') ? 'inclusive' : 'Bricks'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contentWrap} onPress={() => handleOptionSelect('Other')}>
                        <TouchableOpacity style={isOptionSelected('Other') ? styles.SelectedView : styles.EmptyView} />
                        <Text style={{
                                fontSize: 13,
                                color: Colors.CommonColor,
                                fontFamily:Fonts.OpenSans400
                        }}>{isOptionSelected('Other') ? 'inclusive' : 'other'}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>+Add vendor</Text>
        </TouchableOpacity>
            </View>
        </View>
    )
}

export default Addvendor

const styles = StyleSheet.create({
    TopHead: {
        fontFamily: Fonts.Arial400,
        textAlign: 'center',
        color: Colors.CommonColor,
        fontSize: 17,
        paddingVertical:10,
        // backgroundColor:Colors.MainColor
    },
    Inputcontainer: {
        backgroundColor: '#fff',
        elevation: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 20
    },
    TopHeading: {
        fontSize: 15,
        fontFamily: Fonts.JosefinSansregular,
        color: Colors.CommonColor
    },
    InputStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        width: '93%',
        marginLeft: 20,

    },
    contentWrap: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 20,
        width: '20%',

    },
    EmptyView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        marginRight: 10,
    },
    SelectedView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: Colors.MainColor,
        borderWidth: 3,
        marginRight: 10,
    },
    nextButton: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.MainColor,
        borderRadius: 5,
        elevation: 5,
        width:'60%',
        alignSelf:'center'
      },
      buttonText: {
        fontFamily: Fonts.Inter600,
        color: Colors.CommonColor,
        fontSize: 17,
      },
})