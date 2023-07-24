import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import DrawerItem from './DrawerItem';
import Fonts from '../../assets/fonts';
import Colors from '../../assets/colors';
const itemList = [
  {
    title: 'Create User/Team',
    iconName: 'user-plus',
    id: '1',
    children: [
      {title: 'Add Team Member', route: 'BottomSheet'},
      {title: 'Add vendor', route: 'BottomSheet1'},
    ],
  },
  {
    title: 'Team Profiles',
    iconName: 'user-circle-o',
    id: '2',
    route: 'Teamprofile',
  },
  {
    title: 'Sales',
    iconName: 'bar-chart-o',
    id: '3',
    route: 'Salesmain',
  },
  {
    title: 'Leads',
    iconName: 'bar-chart-o',
    id: '3',
    route: 'Leads',
  },
  {
    title: 'DPR',
    iconName: 'sun-o',
    route: 'Dpr',
  },
  {
    title: 'Purchases',
    iconName: 'rupee',
    route: 'Purchases',
  },
  {
    title: 'Accounts',
    iconName: 'calculator',
    route: 'Accounts',
  },
  {
    title: 'Attendance',
    iconName: 'user-plus',
    route: 'Attendances',
  },
  {
    title: 'Site Progress',
    iconName: 'line-chart',
    route: 'SiteProgress',
  },
  {
    title: 'Reports',
    iconName: 'file-text-o',
    route: 'Reports',
  },
  {
    title: 'Settings',
    iconName: 'gear',
    route: 'Settings',
  },
  {
    title: 'Logout',
    iconName: 'user-times',
    id: '12',
    route: 'Logout',
  },
];
const DrawerContent = ({props, navigation}) => {
  const [toggleChevron, setToggleChevron] = useState(true);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawer__content}>
      <TouchableOpacity
        style={styles.drawer__header}
        onPress={() => navigation.navigate('Userprofilemain')}>
        <View style={styles.header__content}>
          <View style={styles.userbackground}>
            <UserIcon name="user-alt" style={styles.UserStyle} />
          </View>
          <View style={styles.loginSign__container}>
            <Text style={styles.header_text}>Admin/User Name</Text>
            <Text
              style={[
                styles.header_text,
                {color: '#000000', fontWeight: 'bold'},
              ]}>
              View Profile
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {itemList.map((el, id) => {
        return(
        <DrawerItem DrawerItemlist={el} navigation={navigation} key={id} />
      )})}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  drawer__content: {
    paddingTop: 0,
    paddingLeft: 0,
    margin: 0,
  },
  drawer__header: {
    backgroundColor: Colors.MainColor,
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    height: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  loginSign__container: {
    color: '#757575',
    marginLeft: 15,
  },
  header__content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile__photo: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
  },
  header_text: {
    fontFamily: Fonts.OpenSans400,
    color: Colors.CommonColor,
    fontSize: height > 900 ? 15 : 13,
    lineHeight: 25,
  },
  chevron__icon: {
    color: 'white',
    fontWeight: 'bold',
  },
  drawer__item__contianer: {
    borderBottomWidth: 1,
    borderColor: '#D6d6D6',
    padding: 19,
  },
  drawer__item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item__title: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#484b47',
    marginLeft: 9,
  },
  UserStyle: {
    fontSize: 30,
    color: Colors.CommonColor,
  },
  userbackground: {
    backgroundColor: '#f2f2f2',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
