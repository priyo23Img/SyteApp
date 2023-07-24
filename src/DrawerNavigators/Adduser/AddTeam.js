import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Fonts from '../../../assets/fonts';
import Colors from '../../../assets/colors';
import { useNavigation } from '@react-navigation/native';

const AddTeam = ({refRBSheet}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigation = useNavigation()
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const isOptionSelected = (option) => {
        return selectedOption === option;
    };

    return (
        <View>
            <View style={{ borderBottomColor: Colors.CommonColor, borderBottomWidth: 1, paddingVertical: 15,backgroundColor:Colors.MainColor,}}>
                <Text style={styles.TopHead}>Member Details</Text>
            </View>
            <Text style={styles.subHead}>Designate Position</Text>
            <View>
                <TouchableOpacity style={styles.contentWrap} onPress={() => {
                    navigation.navigate('Sitemanager')
                    handleOptionSelect('Site Manager')
                    refRBSheet.current.close()
                }}>
                    <TouchableOpacity style={isOptionSelected('Site Manager') ? styles.SelectedView : styles.EmptyView} />
                    <Text style={{ fontSize: 15,fontFamily:Fonts.OpenSans400,color:Colors.CommonColor }}>Site Manager</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentWrap} onPress={() => {
                    navigation.navigate('Accounts') 
                    refRBSheet.current.close()

                    handleOptionSelect('Accounts')
                }}>
                    <TouchableOpacity style={isOptionSelected('Accounts') ? styles.SelectedView : styles.EmptyView} />
                    <Text style={{ fontSize: 15,fontFamily:Fonts.OpenSans400,color:Colors.CommonColor }}>Accounts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentWrap} onPress={() => {
                    handleOptionSelect('Sales Team')
                    refRBSheet.current.close()

                    navigation.navigate('Salesteam')
                }}>
                    <TouchableOpacity style={isOptionSelected('Sales Team') ? styles.SelectedView : styles.EmptyView} />
                    <Text style={{ fontSize: 15,fontFamily:Fonts.OpenSans400,color:Colors.CommonColor }}>Sales Team</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentWrap} onPress={() => {
                    handleOptionSelect('Agent')
                    refRBSheet.current.close()

                    navigation.navigate('Agent')
                }}>
                    <TouchableOpacity style={isOptionSelected('Agent') ? styles.SelectedView : styles.EmptyView} />
                    <Text style={{ fontSize: 15,fontFamily:Fonts.OpenSans400,color:Colors.CommonColor }}>Agent</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddTeam;

const styles = StyleSheet.create({
    TopHead: {
        fontFamily: Fonts.OpenSans600,
        textAlign: 'center',
        color: Colors.CommonColor,
        fontSize: 15,
        paddingBottom:10
    },
    subHead: {
        marginHorizontal: 10,
        marginVertical:20,
        fontFamily: Fonts.OpenSans600,
        color: Colors.CommonColor,
        fontSize: 15,
       
    },
    EmptyView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10,
    },
    SelectedView: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: Colors.MainColor,
        borderWidth: 1,
        marginRight: 10,
    },
    contentWrap: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 20,
    },
});
