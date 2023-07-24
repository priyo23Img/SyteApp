import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {useCallback, useState} from 'react';
import CustomButton from './CustomButton';
import Fonts from '../../assets/fonts';
import Colors from '../../assets/colors';
import {Dropdown} from 'react-native-element-dropdown';
import Textarea from 'react-native-textarea';
import DocumentPicker from 'react-native-document-picker';
import Filephoto from 'react-native-vector-icons/FontAwesome';
// import CustomButton from './CustomButton';
const {width, height} = Dimensions.get('window');

const BottomSheetFrom = ({BottomSheet, refRBSheet = null, data}) => {
  const [fileResponse1, setFileResponse1] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  const handleDocumentSelection1 = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.allFiles],
      });
      setFileResponse1(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <View style={styles.bottomSheetHeader}>
        <Text style={styles.bottomSheetHeaderText}>Send {BottomSheet}</Text>
      </View>

      <View style={{marginHorizontal: 30}}>
        <Text style={styles.TopHeading}>Customer Name</Text>
        <View style={styles.Inputcontainer}>
          <TextInput
            placeholder="Enter Customer Name"
            placeholderTextColor={`rgba(0, 0, 0, 0.25)`}
            // value={input.busName}
            // onChangeText={(text) => handleInputChange('busName', text)}
            style={[styles.InputStyle, {textTransform: 'uppercase'}]}
          />
        </View>
        <View>
          <Text style={styles.TopHeading}>Selected Template</Text>
          <View style={styles.container}>
            <Dropdown
              style={[
                styles.dropdown,
                isFocus && {borderColor: Colors.MainColor},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Land Status' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.TopHeading}>Message Box</Text>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            // onChangeText={handleTextareaChange}
            defaultValue={''}
            maxLength={120}
            placeholder={'Enter your remarks here'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
          />
        </View>
        {BottomSheet === 'WhatsApp' ? (
          <View style={{marginBottom: 15}}>
            <Text style={styles.TopHeading}>Select Media</Text>
            <TouchableOpacity
              style={[styles.inputContainer, {paddingVertical: 20}]}
              onPress={() => handleDocumentSelection1()}>
              <Text style={[styles.inputStyle, {color: 'rgba(0, 0, 0, 0.25)'}]}>
                Select Media
              </Text>
              <Filephoto
                name="file-photo-o"
                style={{fontSize: 20, color: 'rgba(0, 0, 0, 0.25)'}}
              />
            </TouchableOpacity>
          </View>
        ) : null}

        <View>
          <CustomButton txt="Send Message" />
        </View>
      </View>
    </>
  );
};

export default BottomSheetFrom;

const styles = StyleSheet.create({
  sheetContainer: {
    container: {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingBottom: 20,
      height: 'auto',
    },
  },
  inputContainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingRight: 20,
  },
  bottomSheetHeader: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    backgroundColor:Colors.MainColor,
  },
  inputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,
  },
  bottomSheetHeaderText: {
    fontFamily: Fonts.OpenSans400,
    fontSize: 24,
    lineHeight: 33,
    color: '#1F1F1F',
    paddingVertical: 8,
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  InputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,
  },
  TopHeading: {
    fontSize: 20,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 20,
  },
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
  TopHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 15,
  },
  InputStyle: {
    // marginTop:15,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,
    // elevation:5
  },
  Inputcontainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    elevation: 5,
  },
  dropdown: {
    height: 60,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.25)',
    paddingHorizontal: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.50)',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  textareaContainer: {
    height: height / 7,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 20,
  },
  textarea: {
    textAlignVertical: 'top',
    height: height / 8,
    fontSize: 14,
    color: Colors.CommonColor,
    fontFamily: Fonts.OpenSans400,
  },
});
