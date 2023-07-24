import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Dimensions, Image } from 'react-native';
import CommonHeards from '../Common/CommonHeards';
import Fonts from '../../../assets/fonts';
import Colors from '../../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import Filephoto from 'react-native-vector-icons/FontAwesome'
import Documenttext from 'react-native-vector-icons/Ionicons'
import CommonDropdown from '../Common/Dropdowns/CommonDropdown';
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
const ProjectPage3 = () => {
  const label = data?.map((item)=> item.label)

  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [fileResponse, setFileResponse] = useState([]);
  const [fileResponse1, setFileResponse1] = useState([]);



  const [input, setInput] = useState({
    TotalUnits: '',
    TotalFloors: '',
    EngineerName: '',
    ArchitectName: '',
    EstimatedCost: ''
  });
  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: width,
      height: height / 3,
      cropping: true,
      mediaType: 'photo'
    })
      .then(image => {
        console.log('image', image);
        setSelectedImage(image);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  const handleImagePicker1 = () => {
    ImagePicker.openPicker({
      width: width,
      height: height / 3,
      cropping: true,
      mediaType: 'photo'
    })
      .then(images => {
        console.log('images', images);
        setSelectedImage1(images);
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.allFiles]
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const handleDocumentSelection1 = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.allFiles]
      });
      setFileResponse1(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  // console.log(fileResponse,"Document")
  const handleNext = () => {
    navigation.navigate('Addminmain');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <CommonHeards title={'Project Details'} />
        <View style={styles.contentContainer}>
          <Text style={styles.topHeading}>Site Elevation</Text>
          <TouchableOpacity style={[styles.inputContainer,styles.shadowProp, { paddingVertical: 20 }]} onPress={() => handleImagePicker()}>
            <Text style={[styles.inputStyle, { color: 'rgba(0, 0, 0, 0.25)' }]}>Upload Site Elevation in JPG/PNG</Text>
            <Filephoto name='file-photo-o' style={{ fontSize: 20, color: "rgba(0, 0, 0, 0.25)" }} />
          </TouchableOpacity>
          <Text style={styles.topHeading}>Site Brochure</Text>
          <TouchableOpacity style={[styles.inputContainer, styles.shadowProp,{ paddingVertical: 20 }]} onPress={() => handleDocumentSelection1()}>
            <Text style={[styles.inputStyle, { color: 'rgba(0, 0, 0, 0.25)' }]}>Upload Site Brochure in PDF</Text>
            <Documenttext name='document-text' style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.25)' }} />
          </TouchableOpacity>
          <Text style={styles.topHeading}>Site Images</Text>
          <TouchableOpacity style={[styles.inputContainer,styles.shadowProp, { paddingVertical: 20 }]} onPress={() => handleImagePicker1()}>
            <Text style={[styles.inputStyle, { color: 'rgba(0, 0, 0, 0.25)' }]}>Upload Site Elevation in JPG/PNG</Text>
            <Filephoto name='file-photo-o' style={{ fontSize: 20, color: "rgba(0, 0, 0, 0.25)" }} />
          </TouchableOpacity>

          <Text style={styles.topHeading}>Site Progress</Text>
          <CommonDropdown
          setIsFocus={setIsFocus}
          setValue={setValue}
          data={data}
          value={value}
          isFocus={isFocus}
          placeholdertext='Select site Progress'
          Label={label}
        />

          <Text style={styles.topHeading}>Site Documents</Text>
          <TouchableOpacity style={[styles.inputContainer, styles.shadowProp,{ paddingVertical: 20 }]} onPress={() => handleDocumentSelection()}>
            <Text style={[styles.inputStyle, { color: 'rgba(0, 0, 0, 0.25)' }]}>Upload Site Brochure in PDF</Text>
            <Documenttext name='document-text' style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.25)' }} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectPage3;
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
  topHeading: {
    fontSize: 15,
    fontFamily: Fonts.JosefinSansregular,
    color: Colors.CommonColor,
    marginTop: 15,
  },
  inputStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 0,
    width: '93%',
    marginLeft: 20,
  },
  inputContainer: {
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingRight: 20
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
    marginRight: 20,
    width:'30%',

  },
  nextButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.MainColor,
    borderRadius: 5,
    width:'30%',

    elevation: 5,
  },
  buttonText: {
    fontFamily: Fonts.Inter600,
    color: Colors.CommonColor,
    fontSize: 17,
  },

  icon: {
    marginRight: 5,
  },
  shadowProp: {
    shadowColor: 'rgba(0,0,0.25)',
    shadowOffset: { width: -2, height: 1},
    shadowOpacity: 0.2,
    // shadowRadius: 3,
  },

});
