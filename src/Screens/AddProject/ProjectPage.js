import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CommonHeards from '../Common/CommonHeards';
import Fonts from '../../../assets/fonts';
import Colors from '../../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import CommonDropdown from '../Common/Dropdowns/CommonDropdown';
import CommonTextInputs from '../../Components/CommonTextInputs';
import CustomButton from '../../Components/CustomButton';
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const ProjectPage = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [input, setInput] = useState({
    projectName: '',
    projectType: ' ',
    projectAdd: '',
    landStatue: '',
    DateofCompile: '',
    reraNumber: '',
  });
const[submit, setSubmit] = useState([])


const handleInputChange = (field, value) => {
  setInput((prevInput) => ({ ...prevInput, [field]: value }));
}


const Handlesubmit =()=>{
setSubmit(input)
}
console.log(submit,"save data")
  const label = data.map((item) => item.label)
  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1, paddingBottom: 20 }}>
      <CommonHeards title={'Project Details'} />

      <View style={{ marginHorizontal: 15 }}>

        <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"Project Name*"}
          placeholderText={'Enter your Full Name'}
          Inputname={input.projectName}
          Inputfieldname={'projectName'}
          OnChangeFunction ={handleInputChange}
        />

        <CommonDropdown
          setIsFocus={setIsFocus}
          setValue={setValue}
          data={data}
          value={value}
          isFocus={isFocus}
          placeholdertext='Select Project Type'
          Label={label}
          Headername={"Project Type"}
        />

        <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"Project Address"}
          placeholderText={'Enter Project Address'}
          Inputname={input.projectAdd}
          Inputfieldname={'projectAdd'}
          OnChangeFunction ={handleInputChange}

        />

        <CommonDropdown
          Headername={"Land Status"}
          setIsFocus={setIsFocus}
          setValue={setValue}
          data={data}
          value={value}
          isFocus={isFocus}
          placeholdertext='Select Land Status'
          Label={label}
        />

        <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"Proposed Date of Completion"}
          placeholderText={'Enter Proposed Date of Completion'}
          Inputname={input.DateofCompile}
          Inputfieldname={'DateofCompile'}
          OnChangeFunction ={handleInputChange}

        />
        <CommonTextInputs
          setInput={setInput}
          input={input}
          Headername={"RERA Number"}
          placeholderText={'Enter RERA number '}
          Inputname={input.reraNumber}
          Inputfieldname={'reraNumber'}
          OnChangeFunction ={handleInputChange}

        />
      </View>
      <View style={styles.ButtonWrap}>
        <TouchableOpacity
          style={styles.SkipButton}
          onPress={() => navigation.navigate('Projectpage3')}>
          <Text
            style={{
              fontFamily: Fonts.Inter600,
              color: Colors.CommonColor,
              fontSize: 14,
            }}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SecondButton}
          onPress={() => {
            Handlesubmit()
            navigation.navigate('Projectpage2')
          }}>
          <Text
            style={{
              fontFamily: Fonts.Inter600,
              color: Colors.CommonColor,
              fontSize: 14,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProjectPage;

const styles = StyleSheet.create({
  SecondButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MainColor,
    width: '30%',
    borderRadius: 5,
    elevation: 5,
  },
  SkipButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '30%',
    borderRadius: 5,
    elevation: 5,
    marginRight: 20,
  },
  ButtonWrap: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
  },

});
