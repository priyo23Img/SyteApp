import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Dimensions } from 'react-native';
import CommonHeards from '../Common/CommonHeards';
import Fonts from '../../../assets/fonts';
import Colors from '../../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import CommonTextInputs from '../../Components/CommonTextInputs';

const ProjectPage2 = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState({
    TotalUnits: '',
    TotalFloors: '',
    EngineerName: '',
    ArchitectName: '',
    EstimatedCost: ''
  });

  const handleSkip = () => {
    navigation.navigate('Projectpage3');
  };

  const handleNext = () => {
    navigation.navigate('Projectpage3');
  };
  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({ ...prevInput, [field]: value }));
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <CommonHeards title={'Project Details'} />

        <View style={styles.contentContainer}>
          <CommonTextInputs
            setInput={setInput}
            input={input}
            Headername={"Total Units"}
            placeholderText={'Enter Total Units '}
            Inputname={input.TotalUnits}
            Inputfieldname={'TotalUnits'}
          OnChangeFunction ={handleInputChange}

          />

          <CommonTextInputs
            setInput={setInput}
            input={input}
            Headername={"Total Floors"}
            placeholderText={'Enter Total Floors '}
            Inputname={input.TotalFloors}
            Inputfieldname={'TotalFloors'}
          OnChangeFunction ={handleInputChange}

          />

          <CommonTextInputs
            setInput={setInput}
            input={input}
            Headername={"Engineer Name"}
            placeholderText={'Enter Engineer Name '}
            Inputname={input.EngineerName}
            Inputfieldname={'EngineerName'}
          OnChangeFunction ={handleInputChange}

          />
          <CommonTextInputs
            setInput={setInput}
            input={input}
            Headername={"Architect Name"}
            placeholderText={'Enter Architect Name'}
            Inputname={input.ArchitectName}
            Inputfieldname={'ArchitectName'}
          OnChangeFunction ={handleInputChange}

          />
          <CommonTextInputs
            setInput={setInput}
            input={input}
            Headername={"Estimated Cost"}
            placeholderText={'Enter Estimated Cost '}
            Inputname={input.EstimatedCost}
            Inputfieldname={'EstimatedCost'}
          OnChangeFunction ={handleInputChange}

          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectPage2;
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginHorizontal: 15,
    marginVertical: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  skipButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    width: '30%',
    marginRight: 20
  },
  nextButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MainColor,
    borderRadius: 5,
    width: '30%',
    elevation: 5,
  },
  buttonText: {
    fontFamily: Fonts.Inter600,
    color: Colors.CommonColor,
    fontSize: 14,
  },
});
