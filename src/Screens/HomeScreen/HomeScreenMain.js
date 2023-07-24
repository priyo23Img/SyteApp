import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Notifications from 'react-native-vector-icons/Ionicons';
import DropIcon from 'react-native-vector-icons/AntDesign';
import Colors from '../../../assets/colors';
import Fonts from '../../../assets/fonts';
import BottomLink from './BottomLink';
import Locationcity from 'react-native-vector-icons/MaterialIcons';
import CommonHeards from '../Common/CommonHeards';

const HomeScreenMain = () => {
  const navigation = useNavigation();
  const [isBoxOpen, setBoxOpen] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu-outline" size={35} color="#1F1F1F" />
        </TouchableOpacity>
        <Text style={styles.Text}>Syte</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Projectpage')}
        >
          <Notifications name='notifications' size={25} color="#1F1F1F" />
        </TouchableOpacity>
      </View> */}
      <CommonHeards
        lasticonname="notifications"
        titlestyle={styles.Text}
        coustomstyle={{paddingVertical: 10}}
      />

      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.DropWrap}>
          <Text style={styles.ProjectText}>Select Projects</Text>
          <TouchableOpacity onPress={() => setBoxOpen(!isBoxOpen)}>
            <DropIcon name="caretdown" size={15} color="#1F1F1F" />
          </TouchableOpacity>
        </View>
        {isBoxOpen && (
          <TouchableOpacity
            style={styles.ModalView}
            onPress={() => setBoxOpen(false)}>
            <View style={styles.ModalInner}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}>
                <Locationcity name="location-city" size={30} color="#1f1f1f" />
                <Text style={{marginLeft: 5, color: '#1f1f1f', fontSize: 15}}>
                  Oskar Heights
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}>
                <Locationcity name="location-city" size={30} color="#1f1f1f" />
                <Text style={{marginLeft: 5, color: '#1f1f1f'}}>
                  Oskar Tower
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        <View style={{marginHorizontal: 20}}>
          <Image
            source={require('../../../assets/images/Dashboardmain.png')}
            style={styles.DashboardImage}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Progress.Bar
            progress={0.5}
            width={width / 1.3}
            color="rgba(0, 107, 250, 0.4)"
            height={15}
            borderRadius={10}
          />
          <Text style={{marginLeft: 20, color: '#1F1F1F', fontSize: 20}}>
            30%
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            width: '70%',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: '#1f1f1f',
              fontSize: 20,
              marginBottom: 5,
              fontFamily: Fonts.Arial400,
            }}>
            Oskar Heights
          </Text>
          <Text
            style={{
              color: '#1f1f1f',
              fontSize: 12,
              fontFamily: Fonts.Arial400,
            }}>
            5B, Nirapalm Society, Ashok Nagar, Vijapur Road, Solapur, 413004.
          </Text>
        </View>
        <View style={{marginHorizontal: 20, width: '40%'}}>
          <Text
            style={{
              color: '#1f1f1f',
              fontSize: 20,
              marginBottom: 5,
              fontFamily: Fonts.Arial400,
            }}>
            Description
          </Text>
          <Text
            style={{
              color: '#1f1f1f',
              fontSize: 12,
              lineHeight: 20,
              fontFamily: Fonts.Arial400,
            }}>
            Land Area: 5500sq.ft Building Area: 3800sq.ft Floors: 06
          </Text>
        </View>
        <Text
          style={{
            color: '#2F88FF',
            marginTop: 10,
            marginHorizontal: 20,
            fontSize: 17,
            fontFamily: Fonts.Arial700,
            marginBottom: 20,
          }}>
          See more
        </Text>
      </ScrollView>
      <View style={{marginBottom: 20, backgroundColor: '#fff'}}>
        <BottomLink navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreenMain;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  HeaderContainer: {
    width: width,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: Colors.MainColor,
    paddingVertical: 10,
  },
  Text: {
    color: Colors.CommonColor,
    fontFamily: Fonts.JosefinSans700,
    fontSize: 30,
    marginTop: -10,
  },
  ProjectText: {
    fontFamily: Fonts.Arial700,
    color: Colors.CommonColor,
    fontSize: 20,
  },
  DropWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
  DashboardImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  ModalView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  ModalInner: {
    backgroundColor: '#fff',
    width: 170,
    paddingVertical: 10,
    top: 100,
    left: '55%',
  },
});
