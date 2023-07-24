import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import CommonHeards from '../Common/CommonHeards';
import Usericon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import {useNavigation} from '@react-navigation/native';
import ProjectMain from './InnetScreen/ProjectMain';
import MediaMain from './InnetScreen/MediaMain';
import ReceiptsMain from './InnetScreen/ReceiptsMain';
import RBSheet from 'react-native-raw-bottom-sheet';
import EditProfile from './InnetScreen/EditProfile';
import ImagePicker from 'react-native-image-crop-picker';

const UserProfileMain = () => {
  const refRBSheet = useRef();
  const [selectedButton, setSelectedButton] = useState('Project');
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();
  const handleButtonPress = buttonName => {
    if (selectedButton === buttonName) {
      setSelectedButton(null);
    } else {
      setSelectedButton(buttonName);
    }
  };
  const handleSubItemPress = el1 => {
    refRBSheet.current.open();
  };

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: width,
      height: height / 3,
      cropping: true,
      mediaType: 'photo',
    })
      .then(image => {
        console.log('image', image);
        setSelectedImage(image);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <CommonHeards title="" />
      <View>
        <View
          style={{
            borderBottomColor: Colors.MainColor,
            borderBottomWidth: 1,
            height: height > 900 ? height / 2.6 : height / 2.8,
          }}>
          <View>
            <Image
              source={require('../../../assets/images/Profileback.png')}
              style={styles.ProfileUpperSide}
            />
            <View style={styles.ProfileWrap}>
              <TouchableOpacity
                style={styles.PlusIcon}
                onPress={() => handleImagePicker()}>
                <Text style={{color: 'black', fontSize: 20}}>+</Text>
              </TouchableOpacity>
              <Usericon name="user-circle-o" style={styles.UserIcons} />
            </View>
          </View>
          <View style={styles.ProfileContentWrap}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.UserName}>User Name</Text>

              <Usericon
                name="pencil"
                style={{
                  color: Colors.CommonColor,
                  position: 'absolute',
                  left: 150,
                  fontSize: 20,
                }}
                onPress={() => handleSubItemPress()}
              />
            </View>
            <Text>Occuption</Text>
            <Text>example@gmail.com</Text>
            <Text
              style={{
                color: Colors.CommonColor,
                fontFamily: Fonts.Poppins500,
                marginTop: 5,
                fontSize: 12,
              }}>
              +91 9001317585
            </Text>
          </View>
        </View>
        <View style={styles.ProfileBottomWrap}>
          <View style={styles.ProfileBottomButton}>
            <TouchableOpacity
              style={[
                styles.ButtonWrap1,
                selectedButton === 'Project' && styles.ButtonWrap,
              ]}
              onPress={() => handleButtonPress('Project')}>
              <Text style={styles.ButtonText}>Project</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.ButtonWrap1,
                selectedButton === 'Receipts' && styles.ButtonWrap,
              ]}
              onPress={() => handleButtonPress('Receipts')}>
              <Text style={styles.ButtonText}>Receipts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.ButtonWrap1,
                selectedButton === 'Media' && styles.ButtonWrap,
              ]}
              onPress={() => handleButtonPress('Media')}>
              <Text style={styles.ButtonText}>Media</Text>
            </TouchableOpacity>
          </View>
          {/* height:height>900?height/2:height/1.7,paddingBottom:20 */}
          <ScrollView>
            {selectedButton === 'Project' ? <ProjectMain /> : null}
            {selectedButton === 'Receipts' ? <ReceiptsMain /> : null}
            {selectedButton === 'Media' ? <MediaMain /> : null}
          </ScrollView>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        customStyles={styles.sheetContainer}>
        <EditProfile />
      </RBSheet>
    </View>
  );
};

export default UserProfileMain;
const {width, height} = Dimensions.get('screen');
console.log(height);
fontSize = height > 900 ? 15 :  12 

const styles = StyleSheet.create({
  ProfileUpperSide: {
    width: width,
    height:
      height > 900 ? height / 6 : height > 800 ? height / 7.6 : height / 9,
    resizeMode: 'stretch',
  },
  ProfileWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.CommonColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -50,
  },
  UserIcons: {
    fontSize: 70,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  PlusIcon: {
    position: 'absolute',
    left: 85,
    top: 0,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileContentWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  UserName: {
    color: Colors.CommonColor,
    fontSize: 18,
    fontFamily: Fonts.Poppins600,
  },
  ProfileBottomWrap: {
    backgroundColor: 'rgba(255, 223, 22, 0.1)',
    height: height / 2,
    paddingVertical: 20,
  },
  ProfileBottomButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  ButtonWrap: {
    backgroundColor: Colors.MainColor,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: Colors.CommonColor,
  },
  ButtonWrap1: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: Colors.CommonColor,
  },
  ButtonText: {
    color: 'black',
    fontFamily: Fonts.Poppins500,
  },
  sheetContainer: {
    container: {
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingBottom: 20,
      height: 'auto',
    },
  },
});
