import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import React,{useState} from 'react'
import Textarea from 'react-native-textarea';
import Colors from '../../../../assets/colors';
import Fonts from '../../../../assets/fonts';


const AvailableScreen = () => {
  const [textareatext, setTextareaText] = useState('');

  const handleTextareaChange = (value) => {
    setTextareaText(value)
  };
  const handleSubmitUser = () => {
};

  return (
    <View>
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

<TouchableOpacity style={styles.LoginButton} onPress={handleSubmitUser}>
        <Text style={{ fontFamily: Fonts.JosefinSans500, color: Colors.CommonColor, fontSize: 15 }}>Save Unit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AvailableScreen
const{width,height}= Dimensions.get('screen')
const styles = StyleSheet.create({

    textareaContainer: {
        height: height/7,
        paddingHorizontal:10,
        backgroundColor: '#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#D6D6D6',marginVertical:20
      },
      textarea: {
        textAlignVertical: 'top',
        height: height/8,
        fontSize: 14,
        color: Colors.CommonColor,
        fontFamily:Fonts.OpenSans400
    
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
        marginBottom:20
      },
})